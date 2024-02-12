

// Llamar a la función con el porcentaje deseado (por ejemplo, 50 para el 50%)
document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función setPercentage después de que se cargue el DOM
    console.log("dom2");
  
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
    nuevoElemento.classList.add('col-sm-4', 'd-flex', 'flex-column', 'align-items-center', 'mb-5');
    nuevoElemento.innerHTML = `
      <div class="d-flex img_gallery rounded-4" style="background-image: url('${nuevoElementoData.imageUrl}'); background-position: center;"></div>
      <div class="fw-bold colorTextBold mt-3 text_img">${nuevoElementoData.nombreProyecto}</div>
    `;

    // Agregar el nuevo elemento al contenedor de la galería
    galleryRow.appendChild(nuevoElemento);
  });
        
  });








