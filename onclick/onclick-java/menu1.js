document.addEventListener('DOMContentLoaded', () => {
  const menuProfiles = document.querySelectorAll('.menu-profile[data-menu]');
  const menuInfoPanel = document.querySelector('.menu-info-panel');

  const menuDetails = {
    main: `
      <h1 class="menu-name">MAIN</h1>
      <p class="menu-description"><em>How we encoperate Hibiscus Sabdariffa in our MAINS</em><br><br>
      • Salads: Fresh Hibiscus petals are the star of our salads for their tart burst of flavour and striking colours.<br>
      • Sauces & Glazes: Dried hibisus are steeped and blended into reductions and galzes for out meats such as lambs and proks as It's tartness flavour cuts through rich, fatty flavours<br>
      • Pickling: We also use Hibiscus infused pickling liquids to add tang and beautiful ruby red dye to our vegetables <br>
      • Spice Blends: Grounded dried hibiusus are often used as rubs for our fish and poultry, to add acidicity and floral notes<br>
    `,
    drink: `
      <h1 class="menu-name">BEVARAGE</h1>
      <p class="menu-description"> How we encoperate Hibiscus Sabdariffa in our BEVERAGES</p>
      • Agua de Jamaica: Classic, Non-Alcoholic option. Hibiscus floral tea that is served both hot and cold<br>
      • Cocktails & Mocktails: Hibiscus infused Cocktails and Mocktails brings the addicting tartness and vivid colour to drinks <br>
      • Fermented Drinks: Seasonaly Kombuchas abd souring agents in beer<br>
    `,
    desert: `
      <h1 class="menu-name">DESSERT</h1>
       <p class="menu-description"> How we encoperate Hibiscus Sabdariffa in our DESSERTS</p>
      • Hibiscus Syrup:  Hybiscus syrups are drizzled over panna cottas, cheese cakes and ice creams<br>
      • Jelly/Jam: Used as fillings that are paired beautifully with schones and pastries<br>
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