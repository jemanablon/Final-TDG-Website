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

  // Jardin Prive Slider
  const jardinSlider = document.getElementById('jardinSlider');
  if (jardinSlider) {
    let jardinSlideIndex = 0;
    const jardinSlides = jardinSlider.querySelectorAll('.slide').length;
    const jardinNext = document.getElementById('jardinNext');
    const jardinPrev = document.getElementById('JardinPrev');

    jardinNext?.addEventListener('click', () => {
      if (jardinSlideIndex < jardinSlides - 1) {
        jardinSlideIndex++;
      } else {
        jardinSlideIndex = 0;
      }
      jardinSlider.style.transform = `translateX(-${jardinSlideIndex * 100}vw)`;
    });

    jardinPrev?.addEventListener('click', () => {
      if (jardinSlideIndex > 0) {
        jardinSlideIndex--;
      } else {
        jardinSlideIndex = jardinSlides - 1;
      }
      jardinSlider.style.transform = `translateX(-${jardinSlideIndex * 100}vw)`;
    });
  }

  // Chef Profile Interaction
  const chefProfiles = document.querySelectorAll('.chef-profile[data-chef]');
  const chefInfoPanel = document.querySelector('.chef-info-panel');

  const chefDetails = {
    miguel: `
      <h1>MIGUEL FUENTES</h1>
      <p><em>Chef Miguel Manuel Fuentes</em> is an acclaimed Michelin-starred Spanish chef celebrated for his bold fusion of traditional Iberian flavors and cutting-edge modernist cuisine...<br><br>
      • Michelin Star recipient for Alma de Mar, Barcelona<br>
      • National Gastronomy Award of Spain (2015)<br>
      • Named among Spain’s Top 10 Young Chefs to Watch by GastroEspaña Magazine<br>
      • Featured speaker at premier culinary events including:<br>
      &nbsp;&nbsp;&nbsp;– Madrid Fusión<br>
      &nbsp;&nbsp;&nbsp;– San Sebastián Gastronomika</p>
    `,
    michael: `
      <h1>MICHAEL FUENTES</h1>
      <p>Michael Fuentes is known for his innovation in pastry and fine desserts with foraged botanicals... (Add real content here)</p>
    `,
    luca: `
      <h1>LUCA MORETTI</h1>
      <p>Luca Moretti brings refined northern Italian floral techniques into a modern culinary dialogue... (Add real content here)</p>
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