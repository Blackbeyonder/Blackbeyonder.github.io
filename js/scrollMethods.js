// Carga diferida de imágenes de fondo (elementos con clase "lazy-bg" y atributo "data-bg").
// Se expone en window para que otros scripts (galería dinámica, carrusel) puedan
// registrar elementos creados después de la carga inicial.
window.lazyLoadImages = function (root) {
    root = root || document;
    const targets = root.querySelectorAll('.lazy-bg[data-bg]:not(.bg-loaded)');

    if (!('IntersectionObserver' in window)) {
        targets.forEach(function (el) {
            el.style.backgroundImage = "url('" + el.dataset.bg + "')";
            el.classList.add('bg-loaded');
        });
        return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.backgroundImage = "url('" + el.dataset.bg + "')";
                el.classList.add('bg-loaded');
                obs.unobserve(el);
            }
        });
    }, { rootMargin: '200px' });

    targets.forEach(function (el) {
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    // Cargar de forma diferida las imágenes de fondo presentes al cargar la página
    window.lazyLoadImages();

    /* -----------------SCROOLL EVENT BEGIN---------------------- */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Obtener las posiciones verticales de todas las secciones de la página
    const sectionPositions = Array.from(sections).map(section => {
        const id = section.getAttribute('id');
        const offsetTop = section.offsetTop;
        return { id, offsetTop };
    });

    // Función para determinar la sección actual en función de la posición vertical actual
    function getCurrentSection(scrollY) {
        for (let i = sectionPositions.length - 1; i >= 0; i--) {
            if (scrollY >= sectionPositions[i].offsetTop) {
                return sectionPositions[i].id;
            }
        }
        return null;
    }

    // Función para cambiar el estado activo del enlace de navegación
    function setActiveNavLink(currentSectionId) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Controlador de eventos de desplazamiento
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY || window.pageYOffset;
        const currentSectionId = getCurrentSection(scrollY);
        setActiveNavLink(currentSectionId);
    });

    // Establecer el enlace activo inicial cuando se carga la página
    setActiveNavLink(getCurrentSection(window.scrollY || window.pageYOffset));
  
/* -----------------SCROOLL EVENT END---------------------- */


    const divsToAnimate = document.querySelectorAll('.animateClass');

    function checkVisibility() {
        divsToAnimate.forEach(div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Verificar si al menos la mitad de la div es visible en la ventana gráfica
            if (rect.top < windowHeight && rect.bottom >= 0 && !div.classList.contains('animated')) {
                div.classList.add('animate__animated', 'animate__fadeInUp', 'animate__fast', 'animated');

                // Eliminar las clases de animación después de que termine la animación
                div.addEventListener('animationend', () => {
                    div.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fast');
                });
            }
        });
    }

    // Verificar la visibilidad cuando se carga la página
    checkVisibility();

    // Verificar la visibilidad en eventos de scroll y resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
});
