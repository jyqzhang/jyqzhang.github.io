// Reapply clipping typography whenever the shared quote renderer filters cards.
const conceptCards = document.getElementById('quote-grid');
function sizeClippings() {
  conceptCards.querySelectorAll('.quote-card').forEach((card, index) => {
    const quote = card.querySelector('blockquote');
    const text = quote.textContent;
    card.classList.toggle('short-quote', text.length < 34 && index % 2 === 1);
    // Keep the final four written characters together, with their punctuation.
    // This prevents one/two-character last lines at any card width or font size.
    if (quote.querySelector('.quote-ending')) return;
    const characters = Array.from(text);
    let start = characters.length, letters = 0;
    while (start > 0 && letters < 4) {
      start--;
      if (/[\p{L}\p{N}]/u.test(characters[start])) letters++;
    }
    if (start === 0) return;
    const ending = document.createElement('span');
    ending.className = 'quote-ending';
    ending.textContent = characters.slice(start).join('');
    quote.replaceChildren(document.createTextNode(characters.slice(0, start).join('')), ending);
  });
}
new MutationObserver(sizeClippings).observe(conceptCards, {childList: true});
sizeClippings();
