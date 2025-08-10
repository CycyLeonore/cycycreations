
// Simple filtering (no external libs)
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === '*' || card.dataset.cat === filter) ? '' : 'none';
      });
      window.scrollTo({ top: document.querySelector('#galerie').offsetTop - 70, behavior: 'smooth' });
    });
  });
});
