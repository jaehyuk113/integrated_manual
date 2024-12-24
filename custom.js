console.log("custom.js is loaded and executed");

function filterCards() {
  console.log("filterCards function called");
  const searchInput = document.getElementById('search-input');
  const cardGroup = document.querySelector('.card-group');
  
  console.log("Search input:", searchInput);
  console.log("Card group:", cardGroup);

  if (!searchInput || !cardGroup) {
    console.error('Search input or card group not found');
    return;
  }

  const searchTerm = searchInput.value.toLowerCase();
  console.log("Search term:", searchTerm);

  const cards = cardGroup.querySelectorAll('.card');
  console.log("Number of cards found:", cards.length);

  cards.forEach(card => {
    const titleElement = card.querySelector('h3');
    if (!titleElement) {
      console.error('Title element not found in card');
      return;
    }
    const title = titleElement.textContent.toLowerCase();
    console.log("Card title:", title);
    
    if (title.includes(searchTerm)) {
      card.style.display = '';
      console.log("Showing card:", title);
    } else {
      card.style.display = 'none';
      console.log("Hiding card:", title);
    }
  });
}

if (typeof window !== 'undefined') {
  window.filterCards = filterCards;
}
