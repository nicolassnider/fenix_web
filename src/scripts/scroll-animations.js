// Intersection Observer para animaciones de scroll
export function initScrollAnimations() {
  // Configuración del observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // activar cuando 10% del elemento es visible
  };

  // Crear el observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observar todas las secciones y divisores
  const sections = document.querySelectorAll('section');
  const dividers = document.querySelectorAll('.section-divider');

  sections.forEach((section) => observer.observe(section));
  dividers.forEach((divider) => observer.observe(divider));

  // Cleanup function
  return () => {
    sections.forEach((section) => observer.unobserve(section));
    dividers.forEach((divider) => observer.unobserve(divider));
  };
}

// Inicializar cuando el DOM esté listo
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
  });
}
