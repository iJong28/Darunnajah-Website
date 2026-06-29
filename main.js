document.addEventListener("DOMContentLoaded", function () {
  // ==========================================================================
  // Load Reusable Components (Navbar & Footer)
  // ==========================================================================
  let componentsLoaded = 0;
  const totalComponents = 2;

  const loadComponent = (url, containerId) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(containerId).innerHTML = data;
        componentsLoaded++;
        // Once all components are loaded, initialize all scripts
        if (componentsLoaded === totalComponents) {
          initializeAllScripts();
        }
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
  };

  const initializeAllScripts = () => {
    initializeNavbarScripts();
    initializeFooterScripts();
    initializePageScripts();
  };

  // ==========================================================================
  // Navbar Scroll Behavior
  // ==========================================================================
  const initializeNavbarScripts = () => {
    const navbar = document.getElementById("navbar");
    const navbarLogo = document.getElementById("navbar-logo");
    const navLinks = document.querySelectorAll("#nav-links a");
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    const handleScroll = () => {
    const isScrolled = window.scrollY > 50;

    // Toggle background and shadow
    navbar.classList.toggle("bg-white", isScrolled);
    navbar.classList.toggle("shadow-lg", isScrolled);
    navbar.classList.toggle("bg-transparent", !isScrolled);

    // Change logo
    if (navbarLogo) {
      navbarLogo.src = isScrolled ? "aset/logonavbar2.png" : "aset/logonavbar1.png";
    }

    // Change nav link text color
    navLinks.forEach((link) => {
      link.classList.toggle("text-white", !isScrolled);
      link.classList.toggle("text-slate-800", isScrolled);
    });

    // Change mobile menu button color
    if (menuBtn) {
      menuBtn.classList.toggle("text-white", !isScrolled);
      menuBtn.classList.toggle("border-white/40", !isScrolled);
      menuBtn.classList.toggle("text-slate-700", isScrolled);
      menuBtn.classList.toggle("border-slate-300", isScrolled);
    }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Mobile Menu Toggle
    if (menuBtn && mobileMenu && menuIcon) {
      menuBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.toggle("hidden");
        if (isHidden) {
          menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
        } else {
          menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
        }
      });
    }
  };

  // ==========================================================================
  // Footer & Back to Top Button
  // ==========================================================================
  const initializeFooterScripts = () => {
    const backToTopButton = document.getElementById("backToTop");
    // Back to Top Button
    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        backToTopButton.classList.toggle("hidden", window.scrollY <= 300);
      });

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  };

  // ==========================================================================
  // Page-Specific Scripts (Sliders, Tabs, etc.)
  // ==========================================================================
  const initializePageScripts = () => {
    // Hero Slider (Fade Transition)
    const heroSlides = document.querySelectorAll(".hero-slide");
    if (heroSlides.length > 0) {
      let currentSlide = 0;
      setInterval(() => {
        heroSlides[currentSlide].classList.remove("opacity-100");
        heroSlides[currentSlide].classList.add("opacity-0");
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.remove("opacity-0");
        heroSlides[currentSlide].classList.add("opacity-100");
      }, 5000); // Change slide every 5 seconds
    }

    // Program Unggulan Tabs
    const tabs = document.querySelectorAll(".program-tab");
    const contents = document.querySelectorAll(".program-content");
    if (tabs.length > 0 && contents.length > 0) {
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active-tab"));
          contents.forEach((c) => c.classList.add("hidden"));

          tab.classList.add("active-tab");
          const targetContent = document.getElementById(tab.dataset.target);
          if (targetContent) {
            targetContent.classList.remove("hidden");
          }
        });
      });
    }
  };

  // Load components
  loadComponent("navbar.html", "navbar-container");
  loadComponent("footer.html", "footer-container");
});