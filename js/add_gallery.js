document.addEventListener('DOMContentLoaded', function () {
    // Controlador de eventos de clic para el botón
    document.getElementById('agregar-elemento').addEventListener('click', function () {
        // Obtener el contenedor de la galería
        const galleryRow = document.getElementById('gallery-row');

        // Datos de los nuevos elementos (array de objetos)
        const nuevosElementosData = [
            { imageUrl: 'assets/arkethink.jpg', nombreProyecto: 'Arkethink', page: "https://arkethink.mx//" },
            { imageUrl: 'assets/legal.jpg', nombreProyecto: 'Legal-leader', page: "https://legal-leader.com/" },
            // { imageUrl: 'url_imagen_3.jpg', nombreProyecto: 'Nombre del proyecto 3' }
            // Agregar más objetos según sea necesario
        ];

        // Crear y agregar dinámicamente los nuevos elementos
        nuevosElementosData.forEach(function (elementoData) {
            // Crear el nuevo elemento
            const nuevoElemento = document.createElement('div');
            nuevoElemento.classList.add('col-sm-4', 'd-flex', 'flex-column', 'align-items-center', 'mb-5', 'animate__animated', 'animate__fadeInUp');
            nuevoElemento.innerHTML = `
                <div class="d-flex img_gallery rounded-4" style="background-image: url('${elementoData.imageUrl}');background-position: center top;
                background-size: cover;" onclick="window.open('${elementoData.page}', '_blank');"></div>
                <div class="fw-bold colorTextBold mt-3 text_img">${elementoData.nombreProyecto}</div>
            `;

            // Agregar el nuevo elemento al contenedor de la galería
            galleryRow.appendChild(nuevoElemento);

            // Eliminar la clase de animación una vez que haya finalizado la animación
            nuevoElemento.addEventListener('animationend', function () {
                nuevoElemento.classList.remove('animate__animated', 'animate__fadeInUp');
            });
        });

        // Obtener el elemento con el ID específico
        const divParaOcultar = document.getElementById('agregar-elemento');

        // Ocultar el div estableciendo su estilo display en "none"
        divParaOcultar.style.display = "none";


    });

// Obtener todas las secciones que deben animarse
const seccionesAnimadas = document.querySelectorAll('.animateClass');

// Objeto para almacenar el estado de la animación de cada sección
const estadoAnimacion = {};

// Controlador de eventos de desplazamiento
function verificarAnimaciones() {
    seccionesAnimadas.forEach(seccion => {
        // Obtener la posición de la sección en relación con la ventana
        const rect = seccion.getBoundingClientRect();

        // Verificar si la sección está completamente visible en la ventana gráfica
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Verificar si la sección ya ha sido animada o si los datos ya se han cargado
            if (!estadoAnimacion[seccion.id]) {
                // Cargar datos y aplicar animación solo si aún no se ha hecho
                cargarDatos(seccion);
                // Marcar la animación como activada para esta sección
                estadoAnimacion[seccion.id] = true;
            }
        } else {
            // Restablecer el estado si la sección no es visible
            estadoAnimacion[seccion.id] = false;
        }
    });
}

document.addEventListener('scroll', verificarAnimaciones);
document.addEventListener('touchmove', verificarAnimaciones);

function cargarDatos(seccion) {
    // Simulación de carga de datos
    // Aquí puedes hacer una solicitud AJAX para cargar los datos de la sección

    // Aplicar animación con animate.css
    seccion.classList.add('animate__animated', 'animate__fadeInUp');
    // Puedes agregar más clases de animación según tus necesidades
}


});
