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




});
