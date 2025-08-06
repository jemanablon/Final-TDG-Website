document.addEventListener('DOMContentLoaded', () => {
  const menuProfiles = document.querySelectorAll('.menu-profile[data-menu]');
  const menuInfoPanel = document.querySelector('.menu-info-panel');

  const menuDetails = {
    main: `
      <h1 class="menu-name">MAIN</h1>
      <p class="menu-description"><em>How we encoperate Taraxacum Officinale in our MAINS</em><br><br>
      • Salads: Young lleaves are tossed in spring salads with citrus<br>
      • Pasta: Dandelion leafs pestp are folded into handmade pasta & spread beneath seared scallops<br>
    `,
    drink: `
      <h1 class="menu-name">BEVARAGE</h1>
      <p class="menu-description"> How we encoperate Taraxacum Officinale in our BEVERAGES</p>
      • Champagne: Infused with fresh petals for meadow inspired drink<br>
      • Cocktails & Mocktails: Roasted dandelions are used as root in old fasioned style cocktails for an earthy twist <br>
    `,
    desert: `
      <h1 class="menu-name">DESSERT</h1>
      <p class="menu-description"> How we encoperate Taraxacum Officinale in our DESSERTS</p>
      •Shortbread: Shotbread with dandelion flower syrups for floral sweetness<br>
      •Dandelion Ice cream: Dandelion petal ice creams are often paired with lemon zest<br>     
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