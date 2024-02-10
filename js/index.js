

// Llamar a la función con el porcentaje deseado (por ejemplo, 50 para el 50%)
document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función setPercentage después de que se cargue el DOM
    console.log("dom1");
    /* Redirect to first div BEGIN */
     // Obtener el primer div
    const primerDiv = document.getElementById('inicio');
    // Hacer scroll al primer div
    primerDiv.scrollIntoView({ behavior: 'smooth' });
    /* Redirect to first div END */

       const circle = document.getElementById('circle');
      const redPath = document.querySelector('.red');

      // Selecciona el elemento <text> por su atributo 'x'
      const loadingText = document.querySelector('text[x="82"]');
      
      redPath.addEventListener('animationend', () => {
        console.log("animado");
        circle.style.border = '11px solid #2EB51A'; // Cambiar el color del círculo al rojo
        // Modifica el texto del elemento
        loadingText.setAttribute('x', '92');
        loadingText.textContent = 'Listo';

        const container = document.querySelector('.container-diagonal');
        container.classList.add('remove-diagonal'); // Agregar la clase para iniciar la animación
    

      });

      /* -----------------CLICK IN NAV-LINK EVENT BEGIN---------------------- */

      const links = document.querySelectorAll('.navbar-nav .nav-link');

        links.forEach(link => {
            link.addEventListener('click', function(event) {
              
                // Prevenir el comportamiento predeterminado del enlace
                event.preventDefault();

                // Obtener el identificador de la sección a la que se va a desplazar
                const targetId = this.getAttribute('href').substring(1);

                // Obtener la sección de destino
                const targetSection = document.getElementById(targetId);

                // Desplazarse a la sección de destino
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Cambiar el estado activo del enlace
                links.forEach(link => {
                    link.classList.remove('active'); // Eliminar la clase "active" de todos los enlaces
                });
                this.classList.add('active'); // Agregar la clase "active" al enlace actual
            });
        });

        /* -----------------CLICK IN NAV-LINK EVENT END---------------------- */

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

      // Desbloquear el desplazamiento después de un tiempo determinado (por ejemplo, 3 segundos)
      setTimeout(function() {
        document.body.classList.remove('scroll-lock');

        document.querySelectorAll('a').forEach(function(link) {
          link.style.pointerEvents = 'auto';
        });
    }, 3000); // 3000 milisegundos = 3 segundos

        
  });


