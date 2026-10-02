-- Run once in the Supabase SQL editor for this site's dedicated project.
begin;
create table if not exists public.night_letters (
  id uuid primary key,
  body text not null check (char_length(btrim(body)) between 1 and 500),
  created_at timestamptz not null default now(),
  hidden boolean not null default false
);
alter table public.night_letters enable row level security;
revoke all on public.night_letters from anon, authenticated;
grant select (id, body, created_at) on public.night_letters to anon, authenticated;
create policy "Read visible anonymous letters" on public.night_letters
  for select to anon, authenticated using (not hidden);
create or replace function public.post_night_letter(letter_body text, submission_id uuid)
returns table (id uuid, body text, created_at timestamptz)
language plpgsql security definer set search_path = '' as $$
begin
  if submission_id is null or char_length(btrim(letter_body)) not between 1 and 500 or letter_body is null then
    raise exception 'Please write 1–500 characters.';
  end if;
  -- Serialise submissions to make the small-site global flood guard effective.
  perform pg_advisory_xact_lock(784120);
  if exists (select 1 from public.night_letters n where n.id = submission_id and n.body = btrim(letter_body) and not n.hidden) then
    return query select n.id, n.body, n.created_at from public.night_letters n where n.id = submission_id and not n.hidden;
    return;
  end if;
  if (select count(*) from public.night_letters n where n.created_at > now() - interval '1 minute') >= 10 then
    raise exception 'The mailbox is busy. Please try again in a minute.';
  end if;
  insert into public.night_letters (id, body) values (submission_id, btrim(letter_body));
  return query select n.id,n.body,n.created_at from public.night_letters n where n.id = submission_id;
end;
$$;
revoke all on function public.post_night_letter(text, uuid) from public;
grant execute on function public.post_night_letter(text, uuid) to anon, authenticated;
commit;
