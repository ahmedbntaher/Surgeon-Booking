const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const form = document.querySelector("#appointment-form");
const status = document.querySelector(".form-status");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.fullName;
  const phone = form.elements.phone;
  const consent = form.elements.consent;
  let valid = true;

  const setError = (input, message) => {
    const error = input.closest(".form-field")?.querySelector(".field-error");
    if (error) error.textContent = message;
    input.setAttribute("aria-invalid", "true");
    valid = false;
  };

  form.querySelectorAll(".field-error").forEach((error) => (error.textContent = ""));
  form.querySelectorAll("input").forEach((input) => input.removeAttribute("aria-invalid"));
  status.textContent = "";

  if (!name.value.trim()) setError(name, "Please enter your full name.");
  if (!phone.value.trim()) setError(phone, "Please enter your phone number.");
  else if (!/^[\d\s()+-]{7,}$/.test(phone.value.trim())) setError(phone, "Please check your phone number.");
  if (!consent.checked) {
    status.textContent = "Please agree to be contacted before submitting.";
    valid = false;
  }

  if (!valid) return;
  form.reset();
  status.textContent = "Thank you. Our clinic will contact you shortly to arrange or confirm your appointment.";
});

document.querySelector("#year").textContent = new Date().getFullYear();
