

// Llamar a la función con el porcentaje deseado (por ejemplo, 50 para el 50%)
document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función setPercentage después de que se cargue el DOM
    console.log("dom1");
    // setPercentage(50);

       const circle = document.getElementById('circle');
      const redPath = document.querySelector('.red');
      
      redPath.addEventListener('animationend', () => {
        console.log("animado");
        circle.style.border = '5px solid #2EB51A'; // Cambiar el color del círculo al rojo
      });
   
  });
  
