// Año actualizado automáticamente en el pie de página.
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer span");
  if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} · Antonella Chasampoi`;
  }

  // Marca el enlace de navegación correspondiente a la sección visible.
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".navlinks a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach((section) => observer.observe(section));
});
