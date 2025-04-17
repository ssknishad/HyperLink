// MAIN HEADER
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".main-header");

menuToggle.addEventListener("click", () => {
  header.classList.toggle("active");
});

// Initialize Kursor after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new kursor({
    type: 2,
    color: "#1f0c46",
    removeDefaultCursor: true,
  });
});

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
