
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
});