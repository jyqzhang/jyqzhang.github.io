# The Night Letters

Community subsection: `/community/werewolf/`. Standalone HTML/CSS/JS; no build step.

42 supplied responses are anonymized and manually tagged. One identifying description is generalized. The quotes are lightly edited for clarity, English expressions are translated into Chinese, and unsuitable slang and repeated laughter are removed while preserving the original meaning. Topic counts count responses, not word occurrences. Edges connect topics occurring together in at least two responses. Incoming letters are tagged with simple keyword rules, not AI semantic analysis.

## Shared mailbox setup

1. Create a dedicated Supabase project.
2. Run `supabase/night-letters.sql` in its SQL editor once.
3. Put the project URL and **publishable** (or legacy anon) key in `config.js`. Never use a secret or service_role key.
4. Test posting a letter and reading it in a separate browser, and confirm anonymous update/delete/direct insert requests are denied.

Only drafts stay local. Delivered letters are public and stored in Supabase. The UI never pretends a draft was published when no backend is connected. Failed requests preserve drafts; an idempotency UUID prevents duplicates on retry. Visitors cannot edit or delete letters. The database function limits length and caps submissions globally at 10/minute; this is a small-community guard, not full anti-abuse protection. Admins can set `hidden = true` using the Supabase table editor to remove abusive letters from public view. No names or private metadata are collected by the application. Page loads read the latest 1,000 shared letters.

Serve the repository root with `python3 -m http.server 8765` for local preview.
