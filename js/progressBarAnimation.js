document.addEventListener('DOMContentLoaded', function () {

// Obtener todas las barras de progreso
const barrasDeProgreso = document.querySelectorAll('.progress-bar');

function animarBarrasVisibles() {
    // Iterar sobre cada barra de progreso
    barrasDeProgreso.forEach(barra => {
        // Obtener la posición de la barra de progreso en relación con la ventana
        const rect = barra.getBoundingClientRect();

        // Verificar si la barra de progreso está completamente visible en la ventana gráfica
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Obtener el valor del atributo "aria-valuenow" para calcular el ancho
            const valor = parseInt(barra.getAttribute('aria-valuenow'));
            // Aplicar el ancho calculado para animar la barra de progreso
            barra.style.width = valor + '%';
        }
    });
}

// Verificar visibilidad al cargar la página, para que no se quede en 0% si ya es visible sin hacer scroll
animarBarrasVisibles();

// Controlador de eventos de desplazamiento
document.addEventListener('scroll', animarBarrasVisibles);

});
