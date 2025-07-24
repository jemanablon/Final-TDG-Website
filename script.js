



       
   document.addEventListener("DOMContentLoaded", function () {
  // Menu Page 
  let currentSlide = 0;
  const slider = document.getElementById('slider');
  const totalSlides = document.querySelectorAll('.menu .slide').length;

  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  if (nextButton && prevButton && slider) {
    nextButton.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });

    function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  // Info Button Hover Effect 
  document.querySelectorAll('.info-button').forEach(button => {
    const panel = button.closest('.left-panel');
    button.addEventListener('mouseenter', () => {
      panel.classList.add('hovered');
    });
    button.addEventListener('mouseleave', () => {
      panel.classList.remove('hovered');
    });
  });

   // Jardin Privé Slider 
   let currentIndex = 0;
   const jardinSlider = document.getElementById('slides');
   const jardinSlides = jardinSlider ? jardinSlider.querySelectorAll('.slide') : [];
   const totalJardinSlides = jardinSlides.length;





      // Jardin Prive
// Jardin Prive Slider
let currentIndex = 0;
const jardinSlider = document.getElementById('slides');
const jardinSlides = jardinSlider ? jardinSlider.querySelectorAll('.slide') : [];
const totalJardinSlides = jardinSlides.length;
