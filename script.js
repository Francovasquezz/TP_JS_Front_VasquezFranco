
document.addEventListener('DOMContentLoaded', function() {
  // Tu código aquí
  const cantidadInput = document.getElementById('cantidad');
  const categoriaSelect = document.getElementById('categoria');
  const totalPagarElement = document.getElementById('precioFinal');

// Precios base por categoría
const precios = {
  Estudiante: 200 * 0.8, // 80% de descuento para estudiantes
  Trainee: 200 * 0.5,    // 50% de descuento para trainees
  Junior: 200 * 0.85      // 15% de descuento para juniors
};

// Función para calcular el precio total y mostrarlo en la página
function calcularTotal() {
  const cantidad = parseInt(cantidadInput.value);
  const categoria = categoriaSelect.value;
  
  // Verificar si la cantidad ingresada es un número válido
  if (isNaN(cantidad) || cantidad <= 0) {
    totalPagarElement.textContent = 'Cantidad inválida';
    return;
  }

  // Verificar si la categoría seleccionada tiene un precio definido
  if (!(categoria in precios)) {
    totalPagarElement.textContent = 'Categoría inválida';
    return;
  }

  // Calcular el precio total y mostrarlo en la página
  const precioFinal = precios[categoria];
  const precioTotal = cantidad * precioFinal;
  totalPagarElement.textContent = `${precioTotal}`;
}

// Agrega un evento al input de cantidad y al select de categoría para calcular el total
cantidadInput.addEventListener('input', calcularTotal);
categoriaSelect.addEventListener('change', calcularTotal);
});




