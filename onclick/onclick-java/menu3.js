document.addEventListener('DOMContentLoaded', () => {
  const menuProfiles = document.querySelectorAll('.menu-profile[data-menu]');
  const menuInfoPanel = document.querySelector('.menu-info-panel');

  const menuDetails = {
    main: `
  <h1 class="menu-name">MAIN</h1>
      <p class="menu-description"><em>How we encoperate Chrysanthemum Morifolium in our MAINS</em><br><br>
      • Salads: Young Chrysanthemum leaves have a mild bitternes making them refreshing counterpoint in salads..<br>
      • Broths & Soups: Inspired by Chinese cuisine, Crysanthemum petals and leaves are added to hot pots and miro soup for herbal and floral note<br>
      • Pickling: Pickled Chrysanthemum assa tangy and herbal qualities <br>
    `,
    drink: `
      <h1 class="menu-name">BEVARAGE</h1>
      <p class="menu-description"> How we encoperate Chrysanthemum Morifolium in our BEVERAGES</p>
      • Ju Hua Cha: Inspired by chinese delicate tea, belnded with honey or berries and prised for its cooling and calmping properties<br>
      • Cocktails & Mocktails: Added to cocktails and mocktails for its bitterness <br>
    `,
    desert: `
      <h1 class="menu-name">DESSERT</h1>
       <p class="menu-description"> How we encoperate Chrysanthemum Morifolium in our DESSERTS</p>
      • Chrysanthemum Syrup:   Chrysanthemum syrups are drizzled over panna cottas, cheese cakes and ice creams<br>
      •Candied Petals: Fresh petals are crystallised and candied and are garnished<br>     
    `
  };

  menuProfiles.forEach(profile => {
    profile.addEventListener('click', () => {
      menuProfiles.forEach(p => p.classList.add('dimmed'));
      profile.classList.remove('dimmed');

      const menuKey = profile.getAttribute('data-menu');
      menuInfoPanel.innerHTML = menuDetails[menuKey] || '<p>No information available.</p>';
    });
  });
});