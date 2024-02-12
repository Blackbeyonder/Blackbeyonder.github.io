document.addEventListener('DOMContentLoaded', function() {
    // Controlador de eventos de clic para el botón
    document.getElementById('agregar-elemento').addEventListener('click', function() {
        // Obtener el contenedor de la galería
        const galleryRow = document.getElementById('gallery-row');

        // Datos del nuevo elemento
        const nuevoElementoData = {
            imageUrl: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg', 
            nombreProyecto: 'Nombre del proyecto'
        };

        // Crear el nuevo elemento
        const nuevoElemento = document.createElement('div');
        nuevoElemento.classList.add('col-sm-4', 'd-flex', 'flex-column', 'align-items-center', 'mb-5', 'animate__animated', 'animate__fadeInUp');
        nuevoElemento.innerHTML = `
            <div class="d-flex img_gallery rounded-4" style="background-image: url('${nuevoElementoData.imageUrl}');background-position: center top;
            background-size: cover;"></div>
            <div class="fw-bold colorTextBold mt-3 text_img">${nuevoElementoData.nombreProyecto}</div>
        `;

        // Agregar el nuevo elemento al contenedor de la galería
        galleryRow.appendChild(nuevoElemento);

        // Eliminar la clase de animación una vez que haya finalizado la animación
        //QUITAR PARA EVITAR BUG
        nuevoElemento.addEventListener('animationend', function() {
            nuevoElemento.classList.remove('animate__animated', 'animate__fadeInUp');
        });
    });
});
