// js/navbar.js

/**
 * Inisialisasi semua fungsionalitas untuk navbar.
 */
export function initializeNavbar() {
  const navbar = document.getElementById("navbar");
  const navbarLogo = document.getElementById("navbar-logo");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOpenIcon = document.getElementById("menu-open-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");

  if (!navbar || !navbarLogo || !mobileMenuButton || !mobileMenu) return;

  // =================================================================
  // NAVBAR SCROLL BEHAVIOR
  // =================================================================
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      if (navbarLogo) {
        navbarLogo.src = "aset/logo-color.png";
      }
    } else {
      navbar.classList.remove("scrolled");
      if (navbarLogo) {
        navbarLogo.src = "aset/logo-white.png";
      }
    }
  };

  // =================================================================
  // MOBILE MENU TOGGLE
  // =================================================================
  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("hidden");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
  };

  // =================================================================
  // EVENT LISTENERS
  // =================================================================
  window.addEventListener("scroll", handleScroll);
  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  // Panggil handleScroll sekali saat load untuk set state awal
  handleScroll();
}