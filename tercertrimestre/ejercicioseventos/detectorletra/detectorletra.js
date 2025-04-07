// Guardamos el cuadro central en una variable
var cuadro = document.getElementById("cuadro");

// Cuando pulsamos una tecla
document.addEventListener("keydown", function(evento) {
  var letra = evento.key; // Esto es para obtenemos la tecla pulsada

  // Si es una letra entre a y z 
  if ((letra >= "a" && letra <= "z") || (letra >= "A" && letra <= "Z")) {
    // Convertimos las letras a mayúscula para mejor visibilidad y lo mostramos en el cuadro
    cuadro.textContent = letra.toUpperCase();
  }
});

// Cuando soltamos la tecla
document.addEventListener("keyup", function() {
  // Borramos el contenido del cuadro para que no aparezca nada
  cuadro.textContent = "";
});
