

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

        var btn1=document.querySelector('.btn-outline-primary').removeAttribute('disabled');
        var btn2=document.querySelector('.btn-primary').removeAttribute('disabled');
    
        ocultarEnMovil();

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

        

      // Desbloquear el desplazamiento después de un tiempo determinado (por ejemplo, 3 segundos)
      setTimeout(function() {
        document.body.classList.remove('scroll-lock');

        document.querySelectorAll('a').forEach(function(link) {
          link.style.pointerEvents = 'auto';
        });
    }, 3000); // 3000 milisegundos = 3 segundos


        
  });

        // Función para verificar si la pantalla es de un dispositivo móvil
function esDispositivoMovil() {
    return window.innerWidth <= 768; // Aquí puedes ajustar el ancho de la pantalla para que se adapte a tu definición de dispositivos móviles
}

// Función para ocultar el div en dispositivos móviles
function ocultarEnMovil() {
    const miDiv = document.getElementById('progress_bar_mobil_animation');
    const div_toMobil = document.getElementById('toMobil');
    if (esDispositivoMovil()) {
        miDiv.style.display = 'none'; // Ocultar el div si es un dispositivo móvil
        div_toMobil.style.display = 'flex'; // Ocultar el div si es un dispositivo móvil
        const div_to_remove = document.getElementById('div_to_remove');
        div_to_remove.classList.remove("align-items-center");
        div_to_remove.classList.add("class_to_div_mobil");
    }
}


// También puedes llamar a la función en respuesta a cambios en el tamaño de la ventana
window.addEventListener('resize', function() {
    ocultarEnMovil();
});


/* --------------------- */

// Función para redireccionar a una URL
function redireccionar(url) {
    window.location.href = url;
}

// Obtener todos los elementos con la clase "toPage"
const elementos = document.querySelectorAll('.toPage');

// Iterar sobre cada elemento y agregar un evento de clic
elementos.forEach(elemento => {
    elemento.addEventListener('click', function() {
        // Obtener la URL específica del atributo "data-url"
        const url = this.getAttribute('data-url');
        // Llamar a la función de redireccionamiento con la URL específica
        redireccionar(url);
    });
});

/* --------------------- */





