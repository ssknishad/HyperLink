document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".main-header");
  const menuIcon = menuToggle.querySelector("i");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    const isActive = header.classList.toggle("active");

    // Toggle icon
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");

    // Update accessibility
    menuToggle.setAttribute("aria-expanded", isActive);
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("active")) {
        header.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Add scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Trigger scroll event on load in case page is reloaded while scrolled
  window.dispatchEvent(new Event("scroll"));
});

// Initialize Kursor safely
if (typeof kursor === "function") {
  new kursor({
    type: 2,
    color: "#1f0c46",
    removeDefaultCursor: true,
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Define animation class groups with thresholds
  const animationGroups = [
    {
      selectors: [
        ".animate-slide-left",
        ".animate-zoom-in",
        ".animate-fade-up",
        ".animate-slide-right",
        ".animate-fade-in",
        ".animate-slide-up",
        ".animate-float-in",
      ],
      threshold: 0.3,
    },
  ];

  // Create a single IntersectionObserver with dynamic thresholds
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  // Combine all selectors and observe them
  const uniqueSelectors = new Set();
  animationGroups.forEach((group) => {
    group.selectors.forEach((selector) => uniqueSelectors.add(selector));
  });

  uniqueSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  });
});
