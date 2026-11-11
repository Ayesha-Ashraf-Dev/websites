const CONFIG = {
  whatsapp: "255713093840",
};

const STAYS = {
  "living-room": {
    title: "Modern Living Room",
    copy: "A welcoming living space with comfortable seating and room to unwind.",
    long: "Settle into a thoughtfully furnished living room designed for everyday comfort, privacy, and relaxing time at home.",
    amenities: ["Comfortable seating", "Living space", "Free Wi-Fi"],
    images: [
      "assets/images/living-lounge.jpg",
      "assets/images/lounge-styled.jpg",
      "assets/images/sofa-textiles.jpg",
      "assets/images/armchair-detail.jpg",
    ],
  },
  bedrooms: {
    title: "Comfortable Bedrooms",
    copy: "A clean, restful bedroom designed for a comfortable stay.",
    long: "Rest in a comfortable bedroom with the privacy and everyday ease of a fully furnished serviced apartment.",
    amenities: ["Comfortable bedding", "Privacy", "Clean accommodation"],
    images: [
      "assets/images/bedroom-suite.jpg",
      "assets/images/bedroom-linen.jpg",
      "assets/images/bedroom-light.jpg",
    ],
  },
  kitchen: {
    title: "Fully Equipped Kitchen",
    copy: "Everyday kitchen essentials for a convenient, comfortable stay.",
    long: "Enjoy the convenience of a furnished kitchen and dining area, whether you are staying for a few nights or longer.",
    amenities: ["Fully equipped kitchen", "Dining area", "Flexible stays"],
    images: [
      "assets/images/dining-table.jpg",
      "assets/images/living-open.jpg",
    ],
  },
  bathroom: {
    title: "Private Bathroom",
    copy: "Enjoy the convenience and privacy of your own bathroom, with hot water available 24/7.",
    long: "Each stay includes a private bathroom, with hot water available 24/7.",
    amenities: ["Private bathroom", "Hot water 24/7", "Clean accommodation"],
    images: [
      "assets/images/bedroom-light.jpg",
      "assets/images/bedroom-suite.jpg",
    ],
  },
  "outdoor-space": {
    title: "Relaxing Outdoor Space",
    copy: "A peaceful place to enjoy a quiet moment outdoors.",
    long: "Take time to relax in a peaceful outdoor setting with garden space and privacy.",
    amenities: ["Garden space", "Peaceful setting", "Privacy"],
    images: [
      "assets/images/exterior-detail.jpg",
      "assets/images/exterior-porch.jpg",
      "assets/images/exterior-front.jpg",
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
    const preset = el.getAttribute("data-whatsapp") || "Hello Victoria Bliss & Breeze — I would like to enquire about a serviced apartment in Mwanza.";
    window.open(whatsappUrl(preset), "_blank", "noopener");
  });
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
  detailHero.alt = `Property photo for ${stay.title}`;
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
