const CONFIG = {
  whatsapp: "255795001426",
  instagram: "https://www.instagram.com/",
};

const STAYS = {
  "one-bed": {
    title: "1 Bedroom Apartment",
    copy: "A calm, fully furnished suite for solo travellers and couples, with a proper kitchen, workspace-ready lounge, and a restful bedroom.",
    long: "Designed for business trips and short city stays. Wake up to natural light, cook a quiet breakfast, and return to a made-for-living room rather than a hotel box.",
    amenities: ["High-speed WiFi", "Air conditioning", "Smart TV", "Kitchen", "Workspace"],
    images: [
      "assets/images/bedroom-suite.jpg",
      "assets/images/bedroom-linen.jpg",
      "assets/images/bedroom-light.jpg",
      "assets/images/dining-table.jpg",
    ],
  },
  "two-bed": {
    title: "2 Bedroom Apartment",
    copy: "Shared living with two private rooms — practical for families, colleagues, and friends travelling together.",
    long: "Open-plan living and a dining table that actually seats everyone. Stay longer without feeling cramped, with the same professional housekeeping standards as our smaller suites.",
    amenities: ["Two bedrooms", "Lounge & dining", "WiFi", "Parking", "Kitchen"],
    images: [
      "assets/images/living-lounge.jpg",
      "assets/images/living-open.jpg",
      "assets/images/dining-table.jpg",
      "assets/images/exterior-front.jpg",
    ],
  },
  premium: {
    title: "Premium Apartment",
    copy: "Layered textiles, warm lighting, and considered furniture for guests who want the apartment to feel styled, not staged.",
    long: "A slower, more atmospheric stay. Ideal for holidays and extended work visits when the living room is as important as the bed.",
    amenities: ["Designer furnishings", "Smart TV", "Kitchen", "Climate control", "Guest support"],
    images: [
      "assets/images/lounge-styled.jpg",
      "assets/images/sofa-textiles.jpg",
      "assets/images/armchair-detail.jpg",
      "assets/images/living-evening.jpg",
    ],
  },
  luxury: {
    title: "Luxury Stay",
    copy: "Our most complete residence: generous living, private parking, and access to leisure amenities where the property offers them.",
    long: "Choose this when comfort is non-negotiable — longer assignments, family holidays, or hosting in the city. Home first, hospitality always on call.",
    amenities: ["Pool access", "Gym access", "Secure parking", "Full kitchen", "24/7 support"],
    images: [
      "assets/images/living-evening.jpg",
      "assets/images/living-warm.jpg",
      "assets/images/exterior-porch.jpg",
      "assets/images/bedroom-suite.jpg",
    ],
  },
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
    const preset = el.getAttribute("data-whatsapp") || "Hello Serenity Stay — I would like to enquire about an apartment in Dar es Salaam.";
    window.open(whatsappUrl(preset), "_blank", "noopener");
  });
});

const instagramLinks = document.querySelectorAll("[data-instagram]");
instagramLinks.forEach((el) => {
  el.setAttribute("href", CONFIG.instagram);
});

/* Detail modal */
const detailModal = document.getElementById("detail-modal");
const detailTitle = document.getElementById("detail-title");
const detailCopy = document.getElementById("detail-copy");
const detailChips = document.getElementById("detail-chips");
const detailHero = document.getElementById("detail-hero");
const detailThumbs = document.getElementById("detail-thumbs");

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

function renderStay(id) {
  const stay = STAYS[id];
  if (!stay) return;
  detailTitle.textContent = stay.title;
  detailCopy.textContent = stay.long;
  detailHero.src = stay.images[0];
  detailHero.alt = stay.title;
  detailChips.innerHTML = stay.amenities.map((item) => `<span>${item}</span>`).join("");
  detailThumbs.innerHTML = stay.images
    .map(
      (src, i) =>
        `<button type="button" data-src="${src}" aria-label="View photo ${i + 1}"><img src="${src.replace(".jpg", "-md.jpg")}" alt=""></button>`
    )
    .join("");
  detailThumbs.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      detailHero.src = btn.dataset.src;
    });
  });
  const bookBtn = document.getElementById("detail-book");
  bookBtn.onclick = () => {
    closeModal(detailModal);
    openBooking(stay.title);
  };
  openModal(detailModal);
}

document.querySelectorAll("[data-stay]").forEach((btn) => {
  btn.addEventListener("click", () => renderStay(btn.dataset.stay));
});

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
  bookingSuccessDetails.textContent = [
    `Apartment: ${data.stay}`,
    `Check-in: ${data.checkin}`,
    `Check-out: ${data.checkout}`,
    `Guests: ${data.guests}`,
    `Name: ${data.name}`,
    data.notes ? `Notes: ${data.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
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
