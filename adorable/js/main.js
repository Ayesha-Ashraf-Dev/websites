const CONFIG = {
  whatsapp: "255758758326",
  instagram: "https://www.instagram.com/adorablehome_iringa/",
};

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

menuToggle?.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => header.classList.remove("menu-open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".in-view").forEach((el) => observer.observe(el));

const sections = [...document.querySelectorAll("section[id]")];
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

function whatsappUrl(message) {
  const text = encodeURIComponent(message);
  if (CONFIG.whatsapp) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${text}`;
  }
  return `https://wa.me/?text=${text}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const preset = el.getAttribute("data-whatsapp") || "Hello ADORABLE HOME IRINGA, I would like to enquire about a stay.";
    window.open(whatsappUrl(preset), "_blank", "noopener");
  });
});

const instagramLinks = document.querySelectorAll("[data-instagram]");
instagramLinks.forEach((el) => {
  el.setAttribute("href", CONFIG.instagram);
});

function openModal(modal) {
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.classList.remove("open");
  if (!document.querySelector(".modal.open")) {
    document.body.classList.remove("modal-open");
  }
}

document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", () => closeModal(btn.closest(".modal")));
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.open").forEach(closeModal);
  }
});

/* Booking */
const bookModal = document.getElementById("book-modal");
const staySelect = document.getElementById("stay-type");
const bookForm = document.getElementById("book-form");
const bookingSuccess = document.getElementById("booking-success");
const bookingSuccessDetails = document.getElementById("booking-success-details");

function openBooking(preselect) {
  bookForm.reset();
  bookForm.hidden = false;
  bookingSuccess.hidden = true;
  if (preselect) staySelect.value = preselect;
  openModal(bookModal);
}

document.querySelectorAll("[data-book]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openBooking(btn.dataset.book || "");
  });
});

bookForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(bookForm));
  const message = [
    "Hello ADORABLE HOME IRINGA, I would like to enquire about a stay.",
    `Home: ${data.stay}`,
    `Check-in: ${data.checkin}`,
    `Check-out: ${data.checkout}`,
    `Guests: ${data.guests}`,
    `Name: ${data.name}`,
    data.notes ? `Notes: ${data.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  bookingSuccessDetails.textContent = message;
  window.open(whatsappUrl(message), "_blank", "noopener");
  bookForm.hidden = true;
  bookingSuccess.hidden = false;
});

/* Lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll("[data-gallery]").forEach((btn) => {
  btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.gallery;
    lightboxImg.alt = btn.getAttribute("aria-label") || "Gallery image";
    openModal(lightbox);
  });
});

/* Intro video */
const videoModal = document.getElementById("video-modal");
const introVideo = document.getElementById("intro-video");

document.getElementById("play-experience")?.addEventListener("click", () => {
  openModal(videoModal);
  introVideo.currentTime = 0;
  introVideo.play().catch(() => {});
});

videoModal?.querySelector("[data-close]")?.addEventListener("click", () => {
  introVideo.pause();
});
