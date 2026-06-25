// Menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn) menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  if (mobileMenu.classList.contains('hidden')) {
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  } else {
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  }
});

// Hero slider
(function() {
  const slidesEl = document.querySelector('#hero-slider .slides');
  const slides = slidesEl ? slidesEl.children : [];
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  let index = 0;
  const total = slides.length;

  function show(i) {
    if (!slidesEl) return;
    index = (i + total) % total;
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => show(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => show(index + 1));

  // keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  // optional autoplay
  let autoplay = true;
  let autoplayInterval = 10000;
  let timer = null;
  function startAuto() {
    if (!autoplay) return;
    timer = setInterval(() => show(index + 1), autoplayInterval);
  }
  function stopAuto() { if (timer) clearInterval(timer); }

  if (slidesEl) {
    slidesEl.addEventListener('mouseenter', stopAuto);
    slidesEl.addEventListener('mouseleave', startAuto);
    show(0);
    startAuto();
  }
})();

const heroSlides =
document.querySelectorAll(".hero-slide");

let currentSlide = 0;

setInterval(() => {

  heroSlides[currentSlide]
  .classList.remove("opacity-100");

  heroSlides[currentSlide]
  .classList.add("opacity-0");

  currentSlide =
  (currentSlide + 1) % heroSlides.length;

  heroSlides[currentSlide]
  .classList.remove("opacity-0");

  heroSlides[currentSlide]
  .classList.add("opacity-100");

}, 5000);


    const navbar=document.getElementById('navbar');
    const navLinks=document.querySelectorAll('#nav-links a');
    const logo=document.getElementById('navbar-logo');

    window.addEventListener('scroll',()=>{

    if(window.scrollY>50){

    navbar.classList.add('bg-white','shadow-lg');
    navbar.classList.remove('bg-transparent');

    logo.src='logonavbar2.png';

    navLinks.forEach(link=>{
    link.classList.remove('text-white');
    link.classList.add('text-slate-800');
    });

    }else{

    navbar.classList.remove('bg-white','shadow-lg');
    navbar.classList.add('bg-transparent');

    logo.src='logonavbar1.png';

    navLinks.forEach(link=>{
    link.classList.remove('text-slate-800');
    link.classList.add('text-white');
    });

}

});

const tabs = document.querySelectorAll('.program-tab');
const contents = document.querySelectorAll('.program-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active-tab'));
    contents.forEach(c => c.classList.add('hidden'));

    tab.classList.add('active-tab');

    document
      .getElementById(tab.dataset.target)
      .classList.remove('hidden');
  });
});

/* =========================
   BACK TO TOP
========================= */

const backToTop =
document.getElementById('backToTop');

window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {

    backToTop.classList.remove('hidden');

  } else {

    backToTop.classList.add('hidden');

  }

});

backToTop.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});
