// Emphasize genuinely short quotes, including after a topic filter changes them.
const conceptCards = document.getElementById('quote-grid');
function sizeClippings() {
  conceptCards.querySelectorAll('.quote-card').forEach((card, index) => {
    card.classList.toggle('short-quote', card.querySelector('blockquote').textContent.length < 34 && index % 2 === 1);
  });
}
new MutationObserver(sizeClippings).observe(conceptCards, {childList: true});
sizeClippings();
