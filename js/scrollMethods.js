document.addEventListener('DOMContentLoaded', function () {
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
