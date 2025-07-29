document.addEventListener('DOMContentLoaded', () => {
  const jardinSlider = document.getElementById('jardinSlider');
  if (!jardinSlider) return;

  let currentJardinSlide = 0;
  const jardinSlides = jardinSlider.querySelectorAll('.slide');
  const totalJardinSlides = jardinSlides.length;

  const jardinNext = document.getElementById('jardinNext');
  const jardinPrev = document.getElementById('jardinPrev');

  jardinNext?.addEventListener('click', () => {
    if (currentJardinSlide < totalJardinSlides - 1) {
      currentJardinSlide++;
      updateJardinSlider();
    }
  });

  jardinPrev?.addEventListener('click', () => {
    if (currentJardinSlide > 0) {
      currentJardinSlide--;
      updateJardinSlider();
    }
  });

  function updateJardinSlider() {
    jardinSlider.style.transform = `translateX(-${currentJardinSlide * 100}vw)`;
  }
});