document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('#nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase para mostrar/ocultar el menú
            navMenu.classList.toggle('nav-menu--visible');

            // Actualiza el atributo ARIA para accesibilidad
            const isExpanded = navMenu.classList.contains('nav-menu--visible');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Opcional: cierra el menú móvil después de hacer clic en un enlace
                if (navMenu.classList.contains('nav-menu--visible')) {
                    navMenu.classList.remove('nav-menu--visible');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Un umbral más pequeño puede sentirse mejor
                nav.style.backgroundColor = 'rgba(245, 245, 220, 0.9)';
                nav.style.backdropFilter = 'blur(8px)';
            } else {
                nav.style.backgroundColor = 'var(--sand-beige)';
                nav.style.backdropFilter = 'none';
            }
        });
    }
});