// js/main.js
import { loadComponent } from "./loader.js";
import { initializeNavbar } from "./navbar.js";
import { initializeFooter } from "./footer.js";
import { initializeHeroSlider } from "./hero-slider.js";
import { initializeProgramTabs } from "./program-tabs.js";

/**
 * Fungsi utama yang dijalankan setelah DOM selesai dimuat.
 */
async function main() {
  // =================================================================
  // LOAD HTML COMPONENTS
  // =================================================================
  // Muat navbar dan footer secara paralel menggunakan Promise.all.
  // Proses akan berlanjut hanya setelah kedua komponen berhasil dimuat.
  await Promise.all([
    loadComponent("components/navbar.html", "navbar-container"),
    loadComponent("components/footer.html", "footer"),
  ]);

  // =================================================================
  // INITIALIZE JAVASCRIPT MODULES
  // =================================================================
  // Inisialisasi modul HANYA SETELAH komponen HTML di atas selesai dimuat
  // untuk memastikan semua elemen (seperti #navbar, #back-to-top) sudah ada di DOM.
  initializeNavbar();
  initializeFooter();
  initializeHeroSlider();
  initializeProgramTabs();
}

// Jalankan fungsi main setelah seluruh konten halaman dimuat.
document.addEventListener("DOMContentLoaded", main);