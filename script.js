document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("tracking-form").addEventListener("submit", e => {
  e.preventDefault();

  const n = document.getElementById("tracking-number").value.trim();
  const r = document.getElementById("tracking-result");

  r.textContent = n
    ? "Tracking number received. For the latest shipment update, please contact Reliance Global Courier Service at +1 (618) 504-0372 or relianceglobalcodelivery@yahoo.com."
    : "Please enter a tracking number.";
});
