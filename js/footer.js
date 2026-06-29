// js/footer.js

/**
 * Inisialisasi fungsionalitas untuk footer, terutama tombol "Back to Top".
 */
export function initializeFooter() {
  const backToTopButton = document.getElementById("back-to-top");

  if (!backToTopButton) return;

  // =================================================================
  // BACK TO TOP BUTTON VISIBILITY
  // =================================================================
  const handleScroll = () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  };

  // =================================================================
  // BACK TO TOP BUTTON CLICK ACTION
  // =================================================================
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // =================================================================
  // EVENT LISTENERS
  // =================================================================
  window.addEventListener("scroll", handleScroll);
  backToTopButton.addEventListener("click", scrollToTop);
}