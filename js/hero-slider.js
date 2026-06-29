// js/hero-slider.js

/**
 * Inisialisasi hero slider otomatis.
 */
export function initializeHeroSlider() {
  const sliderContainer = document.getElementById("hero-slider");
  if (!sliderContainer) return;

  const slides = sliderContainer.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideInterval = 5000; // 5 detik

  const showNextSlide = () => {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
  };

  // =================================================================
  // START SLIDER
  // =================================================================
  setInterval(showNextSlide, slideInterval);

  // Set slide pertama agar terlihat
  slides[0].style.opacity = 1;
}