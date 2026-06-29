// js/loader.js

/**
 * Memuat konten dari file HTML ke dalam elemen target.
 * @param {string} url - Path ke file HTML komponen.
 * @param {string} targetId - ID dari elemen tempat komponen akan dimuat.
 */
export async function loadComponent(url, targetId) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Gagal memuat ${url}: ${response.statusText}`);
    const text = await response.text();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.innerHTML = text;
    }
  } catch (error) {
    console.error(`Error memuat komponen dari ${url}:`, error);
  }
}