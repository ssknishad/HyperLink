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

// hero serction
document.addEventListener("DOMContentLoaded", function () {
  // Scroll animations
  const observers = document.querySelectorAll(
    ".animate-slide-left, .animate-zoom-in, .animate-fade-up"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observers.forEach((el) => observer.observe(el));
});

// aboutsus
document.addEventListener("DOMContentLoaded", function () {
  const animatedEls = document.querySelectorAll(
    ".animate-slide-right, .animate-zoom-in"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
});

// technology

// why choose us
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-up"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});

// services

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".animate-fade-in, .animate-slide-up")
    .forEach((el) => {
      observer.observe(el);
    });
});

// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".animate-fade-in, .animate-slide-up, .animate-float-in")
    .forEach((el) => observer.observe(el));
});
