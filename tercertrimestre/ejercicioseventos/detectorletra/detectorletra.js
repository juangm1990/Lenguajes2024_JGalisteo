// Seleccionamos el contenedor donde se va a mostrar la letra
const zonaLetra = document.getElementById("zona-letra");

// Evento keydown: cuando se presiona una tecla
document.addEventListener("keydown", function (event) {
  // Convertimos la tecla a mayúscula
  const letra = event.key.toUpperCase();

  // Verificamos si es una letra del alfabeto (A-Z)
  if (/^[A-Z]$/.test(letra)) {
    // Si es una letra, la mostramos en la zona
    zonaLetra.textContent = letra;
  } else {
    // Si no es una letra, dejamos el cuadro en blanco
    zonaLetra.textContent = "";
  }
});

// Evento keyup: cuando se suelta la tecla
document.addEventListener("keyup", function () {
  // Al soltar cualquier tecla, se limpia el contenido
  zonaLetra.textContent = "";
});
