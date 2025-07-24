
   
   // Menu Page
 let currentSlide = 0;
  const slider = document.getElementById('slider');
  const totalSlides = document.querySelectorAll('.slide').length;

  document.getElementById('next').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
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

// Jardin Prive Slider
let currentIndex = 0;
const jardinSlider = document.getElementById('slides');
const jardinSlides = jardinSlider ? jardinSlider.querySelectorAll('.slide') : [];
const totalJardinSlides = jardinSlides.length;

window.changeSlide = function (direction) {
  if (!jardinSlider) return;
  currentIndex = (currentIndex + direction + totalJardinSlides) % totalJardinSlides;
  jardinSlider.style.transform = `translateX(-${currentIndex * 100}vw)`;}