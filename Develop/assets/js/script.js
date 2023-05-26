// Get all the card elements
const cards = document.querySelectorAll('.portfolio-item');

// Add event listeners to each card
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('flip');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('flip');
  });
});