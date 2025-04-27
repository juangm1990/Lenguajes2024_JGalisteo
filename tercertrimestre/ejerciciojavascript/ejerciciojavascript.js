let vasos = document.querySelectorAll('.vaso');
let botonElegir = document.getElementById('botonElegir');
let botonReiniciar = document.getElementById('botonReiniciar');
let posicionPelota = null;

// Función que inicia el juego
function iniciarJuego() {
  // Ocultamos el botón de elegir
  botonElegir.style.display = 'none';
  
  // Mostramos el botón de reiniciar
  botonReiniciar.style.display = 'block';

  // Ocultamos la pelota en un vaso aleatorio (pero aún no la mostramos)
  posicionPelota = Math.floor(Math.random() * 3);

  // Limpiamos el contenido de los vasos
  vasos.forEach((vaso) => {
    vaso.innerHTML = '<img src="imagenes/vaso.png" alt="Vaso" class="imagen-vaso">';
  });
}

// Función que maneja la adivinanza del vaso
function adivinarVaso(indice) {
  // Limpiamos los vasos antes de mostrar la pelota
  vasos.forEach((vaso) => {
    vaso.innerHTML = '<img src="imagenes/vaso.png" alt="Vaso" class="imagen-vaso">';
  });

  // Solo mostramos la pelota en el vaso si el jugador acierta
  if (indice === posicionPelota) {
    // Insertamos la pelota en el vaso correcto
    vasos[indice].innerHTML = '<div class="pelota"></div>';
  }
}

// Añadimos el evento de clic para que los vasos sean interactivos
vasos.forEach((vaso, indice) => {
  vaso.addEventListener('click', () => adivinarVaso(indice));
});

// Función para reiniciar el juego
function reiniciarJuego() {
  // Limpiamos los vasos y la pelota
  vasos.forEach(vaso => vaso.innerHTML = '<img src="imagenes/vaso.png" alt="Vaso" class="imagen-vaso">');

  // Volver a mostrar el botón de "Elige un Vaso"
  botonElegir.style.display = 'block';
  botonReiniciar.style.display = 'none';
}
