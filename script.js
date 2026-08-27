document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("tracking-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const number = document.getElementById("tracking-number").value.trim();
  const result = document.getElementById("tracking-result");

  if (!number) {
    result.textContent = "Please enter a tracking number.";
    return;
  }

  result.textContent = "Tracking number received. Live shipment tracking will be connected when a tracking system is added.";
});
