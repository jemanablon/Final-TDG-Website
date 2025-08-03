document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  let current = 0;


  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
  slide.style.opacity = '1';
  slide.style.zIndex = '1';
} else {
  slide.style.opacity = '0';
  slide.style.zIndex = '0';
}
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  showSlide(current);
});