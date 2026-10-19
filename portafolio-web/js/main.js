/**
 * main.js - Lógica interactiva para el Portafolio de Emmanuel Granados Pulgarin
 * Desarrollo Web - Parcial 2
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Selector de Tema Claro / Oscuro con persistencia en localStorage
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  // Recuperar preferencia guardada o usar preferencia del sistema
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = (theme) => {
    htmlElement.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'bi bi-sun-fill text-warning';
      themeToggleBtn.setAttribute('title', 'Cambiar a modo claro');
      themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
      themeIcon.className = 'bi bi-moon-stars-fill text-primary';
      themeToggleBtn.setAttribute('title', 'Cambiar a modo oscuro');
      themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
    localStorage.setItem('portfolio-theme', theme);
  };

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(systemPrefersDark ? 'dark' : 'light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // 2. Cierre automático del menú de navegación en pantallas móviles al hacer clic en un link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 3. Resaltar enlace activo según la sección visible (Scroll Spy manual mejorado)
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.navbar-nav a[href*='${sectionId}']`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });

  // 4. Actualizar año en el Footer dinámicamente
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 5. Manejo del formulario de contacto interactivo (Feedback visual)
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Estado de carga
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        
        if (contactFeedback) {
          contactFeedback.classList.remove('d-none');
          setTimeout(() => {
            contactFeedback.classList.add('d-none');
          }, 5000);
        }
      }, 1000);
    });
  }
});
