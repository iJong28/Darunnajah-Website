// js/program-tabs.js

/**
 * Inisialisasi fungsionalitas tab untuk bagian Program Unggulan.
 */
export function initializeProgramTabs() {
  const tabsContainer = document.querySelector(".program-tabs");
  if (!tabsContainer) return;

  const tabs = tabsContainer.querySelectorAll(".program-tab");
  const contents = document.querySelectorAll(".program-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const targetContent = document.getElementById(targetId);

      // Nonaktifkan semua tab dan sembunyikan semua konten
      tabs.forEach((t) => t.classList.remove("active-tab"));
      contents.forEach((c) => c.classList.add("hidden"));

      // Aktifkan tab yang diklik dan tampilkan konten yang sesuai
      tab.classList.add("active-tab");
      if (targetContent) {
        targetContent.classList.remove("hidden");
      }
    });
  });
}