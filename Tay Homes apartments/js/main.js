const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav a");
const bookingForm = document.getElementById("booking-form");
const checkinInput = bookingForm.elements.checkin;
const checkoutInput = bookingForm.elements.checkout;
const formStatus = document.getElementById("form-status");
const whatsappFallback = document.getElementById("whatsapp-fallback");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const galleryItems = [...document.querySelectorAll("[data-gallery]")];
let activeGalleryIndex = 0;
let lastFocusedElement = null;

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(`${date}T00:00:00`));
}

function setMinimumDates() {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  checkinInput.min = localToday;
  checkoutInput.min = checkinInput.value || localToday;
}

setMinimumDates();
checkinInput.addEventListener("change", () => {
  checkoutInput.min = checkinInput.value || checkinInput.min;
  if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
    checkoutInput.setCustomValidity("Check-out must be after check-in.");
  } else {
    checkoutInput.setCustomValidity("");
  }
});
checkoutInput.addEventListener("change", () => {
  checkoutInput.setCustomValidity(
    checkinInput.value && checkoutInput.value <= checkinInput.value
      ? "Check-out must be after check-in."
      : ""
  );
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.hash === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

function renderGalleryImage(index) {
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];
  lightboxImage.src = item.dataset.gallery;
  lightboxImage.alt = item.dataset.alt;
  lightboxCaption.textContent = `${item.dataset.alt} · ${activeGalleryIndex + 1} of ${galleryItems.length}`;
}

function openGallery(index) {
  lastFocusedElement = document.activeElement;
  renderGalleryImage(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  window.requestAnimationFrame(() => lightbox.classList.add("visible"));
  lightbox.querySelector(".lightbox-close").focus();
}

function closeGallery() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  window.setTimeout(() => lightbox.classList.remove("open"), 200);
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openGallery(index));
});

lightbox.querySelector(".lightbox-close").addEventListener("click", closeGallery);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => renderGalleryImage(activeGalleryIndex - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => renderGalleryImage(activeGalleryIndex + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeGallery();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeGallery();
  if (event.key === "ArrowLeft") renderGalleryImage(activeGalleryIndex - 1);
  if (event.key === "ArrowRight") renderGalleryImage(activeGalleryIndex + 1);
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkoutInput.setCustomValidity(
    checkoutInput.value <= checkinInput.value ? "Check-out must be after check-in." : ""
  );
  if (!bookingForm.reportValidity()) return;

  const details = new FormData(bookingForm);
  const message = [
    "Hello Tay Homes Apartments, I would like to send a booking enquiry.",
    `Name: ${details.get("name")}`,
    `Phone: ${details.get("phone")}`,
    `Email: ${details.get("email")}`,
    `Check-in: ${formatDate(details.get("checkin"))}`,
    `Check-out: ${formatDate(details.get("checkout"))}`,
    `Number of guests: ${details.get("guests")}`,
    details.get("message") ? `Message: ${details.get("message")}` : "",
  ].filter(Boolean).join("\n");
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  whatsappFallback.href = whatsappUrl;
  whatsappFallback.hidden = false;
  formStatus.textContent = "Your enquiry is ready. Continue in WhatsApp to choose a contact and send it.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("current-year").textContent = String(new Date().getFullYear());
