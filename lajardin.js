document.addEventListener('DOMContentLoaded', () => {
  // Menu Page
  const slider = document.getElementById('slider');
  if (slider) {
    let currentSlide = 0;
    const totalSlides = slider.querySelectorAll('.slide').length;

    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    nextBtn?.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
      }
    });

    prevBtn?.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });

    function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    document.querySelectorAll('.info-button').forEach(button => {
      const panel = button.closest('.left-panel');
      button.addEventListener('mouseenter', () => {
        panel.classList.add('hovered');
      });
      button.addEventListener('mouseleave', () => {
        panel.classList.remove('hovered');
      });
    });
  }

  // Chef Profile Interaction
  const chefProfiles = document.querySelectorAll('.chef-profile[data-chef]');
  const chefInfoPanel = document.querySelector('.chef-info-panel');

const chefDetails = {
  miguel: `
    <h1 class="chef-name">MIGUEL FUENTES</h1>
    <p class="chef-description"><em>Chef Miguel Manuel Fuentes</em> is an acclaimed Michelin-starred Spanish chef whose philosophy aligns perfectly with La Jardin’s devotion to nature’s artistry. Born along the rugged Galician coast, Miguel grew up foraging wild sea herbs and edible blooms with his grandmother, an early education in the harmony between land, sea, and plate. His cuisine fuses traditional Iberian flavors with rare botanicals, crafting dishes that feel both timeless and avant-garde.<br><br>
    • Michelin Star recipient for Alma de Mar, Barcelona<br>
    • National Gastronomy Award of Spain (2015)<br>
    • Pioneered “mar y flor” tasting menus celebrating coastal flowers and sea greens<br>
    • Frequent guest chef at <em>Madrid Fusión</em> and <em>San Sebastián Gastronomika</em>, where he advocates for ethical foraging in fine dining</p>
  `,
  michael: `
    <h1 class="chef-name">MICHAEL LUCA</h1>
    <p class="chef-description">A visionary in botanical patisserie, <em>Chef Michael Fuentes</em> transforms wild and seasonal flowers into ethereal desserts. Raised in the foothills of the Pyrenees, he learned to identify edible blooms and alpine herbs before mastering classical pastry in Paris. Michael’s work at La Jardin explores the intersection of nature and indulgence candied chrysanthemum petals, rose-scented mille-feuille, and sorbets infused with hand-foraged lavender are hallmarks of his artistry. His foraging practice is deeply seasonal, ensuring that no blossom is taken without thought for the ecosystem it calls home.<br><br>
    • Former Head Pastry Chef at the three-Michelin-starred Maison Églantine, Paris<br>
    • Recognized by <em>Dessert et Nature</em> Magazine as “Botanical Innovator of the Year”<br>
    • Advocate for sustainable wild harvesting and floral preservation</p>
  `,
  luca: `
    <h1 class="chef-name">LUCA MORETTI</h1>
    <p class="chef-description"><em>Chef Luca Moretti</em> brings the refined floral traditions of northern Italy into a modern, globally inspired dialogue. Growing up among the alpine meadows of Lombardy, Luca’s earliest memories are of gathering wild violets and primroses for his family’s spring feasts. Trained in both classical Italian cuisine and contemporary plant-based gastronomy, he uses foraged petals, roots, and aromatic leaves to create layered, story-rich dishes. At La Jardin, Luca is known for his “garden-to-table” tasting menus where every element from pickled dandelion buds to saffron marigold oil, is harvested with reverence for nature’s cycles.<br><br>
    • Culinary Excellence Award, Accademia Italiana della Cucina<br>
    • Guest lecturer on ethical foraging at the University of Gastronomic Sciences, Pollenzo<br>
    • Featured in <em>Gusto Verde</em> for his seasonal wildflower risottos</p>
  `
};

  chefProfiles.forEach(profile => {
    profile.addEventListener('click', () => {
      chefProfiles.forEach(p => p.classList.add('dimmed'));
      profile.classList.remove('dimmed');

      const chefKey = profile.getAttribute('data-chef');
      chefInfoPanel.innerHTML = chefDetails[chefKey] || '<p>No information available.</p>';
    });
  });
});