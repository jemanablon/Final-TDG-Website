document.addEventListener('DOMContentLoaded', () => {
  const menuProfiles = document.querySelectorAll('.menu-profile[data-menu]');
  const menuInfoPanel = document.querySelector('.menu-info-panel');

  const menuDetails = {
    miguel: `
      <h1 class="menu-name">MIGUEL FUENTES</h1>
      <p class="chef-description"><em>Chef Miguel Manuel Fuentes</em> is an acclaimed Michelin-starred Spanish chef celebrated for his bold fusion of traditional Iberian flavors and cutting-edge modernist cuisine...<br><br>
      • Michelin Star recipient for Alma de Mar, Barcelona<br>
      • National Gastronomy Award of Spain (2015)<br>
      • Named among Spain’s Top 10 Young Chefs to Watch by GastroEspaña Magazine<br>
      • Featured speaker at premier culinary events including:<br>
      &nbsp;&nbsp;&nbsp;– Madrid Fusión<br>
      &nbsp;&nbsp;&nbsp;– San Sebastián Gastronomika</p>
    `,
    michael: `
      <h1 class="menu-name">MICHAEL FUENTES</h1>
      <p class="menu-description">Michael Fuentes is known for his innovation in pastry and fine desserts with foraged botanicals... (Add real content here)</p>
    `,
    luca: `
      <h1 class="chef-name">LUCA MORETTI</h1>
      <p class="chef-description">Luca Moretti brings refined northern Italian floral techniques into a modern culinary dialogue... (Add real content here)</p>
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