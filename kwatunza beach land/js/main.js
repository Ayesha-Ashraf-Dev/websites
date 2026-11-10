const CONFIG = {
  whatsapp: "255795001426",
  instagram: "https://www.instagram.com/kwatunzabeachland/",
};

const STAYS = {
  rooms: {
    title: "Comfortable Rooms",
    copy: "A welcoming place to recharge between lake days, meals, and evenings out.",
    long: "Make Kwatunza your base for a lakeside escape, a family weekend, or a longer Mwanza stay. Contact our team for current room availability and details.",
    amenities: ["Lake Victoria", "Comfortable stay", "Mwanza"],
    images: ["unnamed%20(5).webp", "unnamed%20(6).webp", "unnamed%20(1).webp"],
  },
  suites: {
    title: "Suites",
    copy: "Ask about suite options for a little more room to settle in during your visit.",
    long: "Enjoy a relaxed stay beside Lake Victoria. Get in touch with the Kwatunza team to ask about available suites and the options that best suit your visit.",
    amenities: ["Lakeside setting", "Relaxation", "Mwanza"],
    images: ["unnamed%20(5).webp", "unnamed%20(10).webp", "unnamed%20(2).webp"],
  },
  family: {
    title: "Family Accommodation",
    copy: "Plan a restful family break with space to spend time together around the destination.",
    long: "Spend time together with Lake Victoria as your backdrop. Contact the team to discuss accommodation options and plan a family-friendly visit.",
    amenities: ["Family friendly", "Beach experience", "Dining"],
    images: ["unnamed%20(8).webp", "unnamed%20(6).webp", "unnamed.webp"],
  },
  "lake-view": {
    title: "Lake View Options",
    copy: "Wake to the beauty of Lake Victoria. Ask our team about available views and room options.",
    long: "Make the lake part of your stay. Contact Kwatunza to ask about current accommodation availability and lake view options.",
    amenities: ["Lake Victoria", "Scenic views", "Sunsets"],
    images: ["unnamed%20(2).webp", "unnamed%20(1).webp", "unnamed.webp"],
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
    const preset = el.getAttribute("data-whatsapp") || "Hello Kwatunza Beach Land — I would like to enquire about visiting your lakeside destination in Mwanza.";
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
        `<button type="button" data-src="${src}" aria-label="View photo ${i + 1}"><img src="${src}" alt=""></button>`
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
    openBooking("Accommodation");
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
const checkinInput = bookForm.querySelector('[name="checkin"]');
const checkoutInput = bookForm.querySelector('[name="checkout"]');
const checkinLabel = document.getElementById("checkin-label");
const checkoutLabel = document.getElementById("checkout-label");

function syncBookingDates() {
  const isAccommodation = staySelect.value === "Accommodation";
  checkinInput.required = isAccommodation;
  checkoutInput.required = isAccommodation;
  checkinLabel.firstChild.textContent = isAccommodation ? "Check-in" : "Preferred date";
  checkoutLabel.firstChild.textContent = isAccommodation ? "Check-out" : "End date (optional)";
}

function openBooking(preselect) {
  bookForm.reset();
  bookForm.hidden = false;
  bookingSuccess.hidden = true;
  staySelect.value = [...staySelect.options].some((option) => option.value === preselect)
    ? preselect
    : "Accommodation";
  syncBookingDates();
  openModal(bookModal);
}

staySelect.addEventListener("change", syncBookingDates);

document.querySelectorAll("[data-book]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openBooking(btn.dataset.book || "");
  });
});

bookForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(bookForm));
  const details = [
    `Enquiry: ${data.stay}`,
    `Preferred date: ${data.checkin}`,
    data.checkout ? `End date: ${data.checkout}` : "",
    `Guests: ${data.guests}`,
    `Name: ${data.name}`,
    data.notes ? `Details: ${data.notes}` : "",
  ].filter(Boolean);
  bookingSuccessDetails.textContent = details
    .join("\n");
  const message = `Hello Kwatunza Beach Land — I would like to make an enquiry.\n${details.join("\n")}`;
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
