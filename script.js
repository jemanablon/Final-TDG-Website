
  const chefData = {
    miguel: `
      <h1>MIGUEL FUENTES</h1>
      <p>Chef Miguel Manuel Fuentes is an acclaimed Michelin-starred Spanish chef...</p>
      <ul>
        <li>Michelin Star recipient for Alma de Mar, Barcelona</li>
        <li>National Gastronomy Award of Spain (2015)</li>
        <li>Madrid Fusión</li>
      </ul>
    `,
    michael: `
      <h1>MICHAEL FUENTES</h1>
      <p>Michael is Miguel’s brother and co-founder of Alma de Mar, with a deep focus on technique...</p>
    `,
    luca: `
      <h1>LUCA ROMERO</h1>
      <p>Chef Luca Romero brings molecular gastronomy to the forefront with his theatrical plating...</p>
    `
  };

  const chefProfiles = document.querySelectorAll(".chef-profile");
  const infoPanel = document.getElementById("chef-info-content");

  chefProfiles.forEach(profile => {
    profile.addEventListener("click", () => {
      // Remove dimming from all
      chefProfiles.forEach(p => p.classList.add("dimmed"));
      // Highlight the selected one
      profile.classList.remove("dimmed");

      // Inject info
      const chefId = profile.getAttribute("data-chef");
      infoPanel.innerHTML = chefData[chefId] || "<p>Chef info not found.</p>";
    });
  });
