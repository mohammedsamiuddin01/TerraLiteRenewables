
      // Loading screen
      window.addEventListener("load", function () {
        setTimeout(() => {
          document.getElementById("loading").classList.add("fade-out");
        }, 1500);
      });

      // Mobile menu toggle
      const mobileMenu = document.getElementById("mobile-menu");
      const navMenu = document.getElementById("nav-menu");

      mobileMenu.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
        });
      });

      // Smooth scroll animation
      function animateOnScroll() {
        const elements = document.querySelectorAll(".fade-in");

        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", animateOnScroll);
      animateOnScroll(); // Initial check

      // Form submission
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Get form data
          const formData = new FormData(this);
          const data = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });

          // Simulate form submission
          const submitBtn = this.querySelector(".submit-btn");
          const originalText = submitBtn.textContent;

          submitBtn.textContent = "Sending...";
          submitBtn.disabled = true;

          setTimeout(() => {
            alert("Thank you for your message! We will get back to you soon.");
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        });

      // Header background change on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY > 100) {
    header.style.background = 'rgba(44, 90, 160, 0.95)';
    header.style.backdropFilter = 'blur(15px)';
} else {
    header.style.background = 'linear-gradient(rgba(44, 90, 160, 0.9), rgba(74, 144, 226, 0.9))';
    header.style.backdropFilter = 'blur(10px)';
}
      });

      // Add floating animation to service cards
      document.querySelectorAll(".service-card").forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });

      // Parallax effect for hero section
      window.addEventListener("scroll", function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        if (hero) {
          hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      });
   