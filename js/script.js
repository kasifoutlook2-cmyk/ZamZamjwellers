/* ZAM ZAM JEWELLERS — script.js */
function toggleMenu() {
  const menu = document.getElementById("headerMobileMenu") || 
               document.getElementById("mobileMenu");
  if (!menu) return;
  menu.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {

  // Close menu on link click
  const menu = document.getElementById("headerMobileMenu") || 
               document.getElementById("mobileMenu");

  if (menu) {
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (id.length > 1) {
        const t = document.querySelector(id);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

});
document.addEventListener('DOMContentLoaded', () => {

  // Close menu on link click
  document.querySelectorAll("#headerMobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("headerMobileMenu");
      if (menu) menu.classList.remove("active");
    });
  });

  // Smooth scroll
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (id.length > 1) {
        const t = document.querySelector(id);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

});