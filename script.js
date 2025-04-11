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

//testimonial

// Optional: Fade in steps on scroll
const steps = document.querySelectorAll(".tech-step");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

steps.forEach((step) => {
  step.style.opacity = 0;
  step.style.transform = "translateY(40px)";
  observer.observe(step);
});

//
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".floating-icon");
  if (icon) {
    icon.style.transition = "transform 0.3s ease";
    icon.addEventListener("mouseover", () => {
      icon.style.transform = "scale(1.1)";
    });
    icon.addEventListener("mouseout", () => {
      icon.style.transform = "scale(1)";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let current = 0;

  function updateSlider(index) {
    const cards = document.querySelectorAll(".testimonial-card");
    const total = cards.length;

    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === current);
    });
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    updateSlider(current - 1);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    updateSlider(current + 1);
  });

  updateSlider(current);
});

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Grab values
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  // Basic email and phone validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[+\d][\d\s\-().]{7,15}$/;

  // Validation
  if (firstName.value.trim() === "") {
    alert("Please enter your first name.");
    firstName.focus();
    return;
  }

  if (lastName.value.trim() === "") {
    alert("Please enter your last name.");
    lastName.focus();
    return;
  }

  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  if (!phonePattern.test(phone.value)) {
    alert("Please enter a valid phone number.");
    phone.focus();
    return;
  }

  if (message.value.trim() === "") {
    alert("Please enter a message.");
    message.focus();
    return;
  }

  // If all good
  alert("Form submitted successfully!");
  document.getElementById("quoteForm").reset();
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
