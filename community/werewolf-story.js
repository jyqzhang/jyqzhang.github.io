const werewolfTrigger = document.querySelector('[data-werewolf-story]');
if (werewolfTrigger) {
  const paragraphs = [
    '18% of my Common App Essay was about Werewolf. 3 years later, that same game has become one of the most meaningful ways I build community.',
    'For those unfamiliar, Werewolf (狼人杀 in Chinese) is a social deduction and strategy game similar to Mafia. At the end of my freshman year, a graduating senior invited me to a game and added me to a WeChat group of around 200 people. I loved it there, but many members had already graduated or become inactive. So, going into my sophomore year, I created a new group chat from 0 with one simple goal: keep it active.',
    'For a while, this meant a lot of recruiting, since a standard game usually takes around 12 people. I posted on social media, asked friends to bring friends, and mentioned the group whenever I met new students. Friday nights often looked like me spamming friends’ DMs: “10/12, we need 2 more people!” I also looked beyond UCLA. If I saw someone on RedNote asking about Werewolf around LA, I’d respond. If someone was new to UCLA and looking for their first community, I’d invite them. None of these were sophisticated growth strategies; I was simply always on the lookout. I knew consistency mattered too: I organized a game almost every Friday night, coordinating sign-ups and rides, finding spaces, and bringing people together.',
    'Slowly, 10/12 stopped being a problem. By the end of my sophomore summer, our group had grown from 0 to 494 members, just shy of WeChat’s 500-person limit. So this fall, I started a new group, hoping to make this community more active than ever.',
    'Within 2 days, over 250 people joined. Last night, more than 50 people showed up, a record high for a single night. Suddenly, instead of scrambling to ask people to come play, I’m opening WeChat to messages like: “Are we playing tonight? My two roommates and I are all new freshmen at UCLA, and we want to come.”',
    'Today, our tables might have a UCLA junior sitting next to a USC PhD student, a community college freshman, someone working full-time in downtown LA, or even someone from New Jersey visiting LA for just 3 days. On paper, they might have very little in common. But for a few hours, none of that matters. Everyone came for the same simple reason: We love this game.',
    'Someday, I’ll graduate and no longer be the person sending detailed Friday-night logistics or teaching the crowd. But for the first time, I can already see the new faces who might one day carry this community forward—their eyes lighting up every time it’s their turn to speak around the table. Maybe a few years later, I’ll open social media and see someone else posting the same kind of announcement I’ve posted countless times: “If you enjoy Werewolf and you’re in the LA area, come play with us at UCLA this Friday night. All experience levels and backgrounds are welcome.”'
  ];
  const dialog = document.createElement('dialog');
  dialog.className = 'project-modal community-modal werewolf-story-modal';
  dialog.setAttribute('aria-labelledby', 'werewolf-story-title');
  dialog.innerHTML = `<div class="modal-toolbar"><span>Community / Werewolf</span><button type="button" class="modal-close" aria-label="Close Werewolf story">Close ×</button></div>
    <div class="modal-content">
      <p class="meta">BRINGING PEOPLE TOGETHER, ONE FRIDAY AT A TIME</p>
      <h2 id="werewolf-story-title">More than a game.</h2>
      <p class="werewolf-summary">A Werewolf community I built around UCLA and Los Angeles—connecting students, friends, and newcomers through a shared love of social deduction, conversation, and Friday nights around a table.</p>
      <a class="night-letters-feature" href="/community/werewolf/" target="_blank" rel="noopener noreferrer">
        <span class="night-letters-moon" aria-hidden="true">☾</span>
        <span><span class="meta">AN INTERACTIVE COMMUNITY PORTRAIT</span><strong>天黑，请说心里话。</strong><span class="night-letters-description">Why do we keep coming back? Explore 42 anonymous voices through an interactive word cloud—connecting logic, friendship, and the reasons we play.</span><span class="night-letters-cta">Explore The Night Letters ↗ <small>Opens in a new tab</small></span></span>
      </a>
      <article class="werewolf-essay" aria-labelledby="werewolf-essay-title">
        <div class="werewolf-essay-heading"><div><p class="meta">A PERSONAL REFLECTION · JULIA ZHANG</p><h3 id="werewolf-essay-title">From 10/12 to a community.</h3></div><a class="text-link" href="https://www.linkedin.com/feed/update/urn:li:activity:7507200473402122240/" target="_blank" rel="noopener noreferrer">Read on LinkedIn ↗</a></div>
        <p class="werewolf-source-note">Originally shared on LinkedIn. Numbers and time references reflect the original post.</p>
        <div class="werewolf-essay-body">${paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join('')}</div>
      </article>
    </div>`;
  document.body.append(dialog);
  werewolfTrigger.addEventListener('click', () => {
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
  });
  dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    werewolfTrigger.focus({preventScroll: true});
  });
}
