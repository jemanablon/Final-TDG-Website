document.addEventListener('DOMContentLoaded', () => {
  const menuProfiles = document.querySelectorAll('.menu-profile[data-menu]');
  const menuInfoPanel = document.querySelector('.menu-info-panel');

  const menuDetails = {
    main: `
      <h1 class="menu-name">MAIN</h1>
      <p class="menu-description"><em>How we encoperate Dahlia Pinnata in our MAINS</em><br><br>
      • Salads: Fresh dahlia petals are used over green salads to give the salad a peppery note and colour.<br>
      • Tubers:  Dahlia tubers are roasted and sauteed or used like Jerusakem Artichokes  <br>
      • Oils: Petals are infused into oils for dressing and drizzles to add nutty and peppery flavour.<br>
    `,
    drink: `
      <h1 class="menu-name">BEVARAGE</h1>
      <p class="menu-description"> How we encoperate Dahlia Pinnata  in our BEVERAGES</p>
      • Floral Water: Classic, Non-Alcoholic option. Steeped into hot water for a light refreshing floral tea, can be served hot or colld<br>
      • Cocktails & Mocktails: Infused in strong drinks like Gin based cocktails for it's peppery and delicate aroma. <br>
    `,
    desert: `
      <h1 class="menu-name">DESSERT</h1>
       <p class="menu-description"> How we encoperate Dahlia Pinnata in our DESSERTS</p>
      • Petal Sugar: Petals are dried and grounded into sugar that is then added as toppings and sweetener for shortbreads and macarons<br>
      • Dahlia Creams: Used in panna cotta, mousses and custards.<br>
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