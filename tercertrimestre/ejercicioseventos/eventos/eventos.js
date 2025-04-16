// Elementos del DOM
const padre = document.getElementById("padre");         // Div contenedor general (padre)
const hijo1 = document.getElementById("hijo1");         // Primer hijo (con stopPropagation)
const hijo2 = document.getElementById("hijo2");         // Segundo hijo (sin stopPropagation)
const enlace = document.getElementById("enlace");       // Enlace hacia W3Schools
const boton = document.getElementById("botonToggle");   // Botón para activar/desactivar el enlace
const mensaje = document.getElementById("mensaje");     // Párrafo donde se muestra el mensaje en pantalla

let enlaceActivo = true; // Variable para saber si el enlace está activado o no

// Evento click sobre el padre
padre.addEventListener("click", () => {
  console.log("clic en PADRE");                         // Se muestra en consola
  mensaje.textContent = "clic en PADRE";                // Se muestra en pantalla
});

// Evento click sobre Hijo 1 (con stopPropagation)
hijo1.addEventListener("click", (e) => {
  e.stopPropagation();                                  // Impide que el evento suba al padre
  console.log("clic en HIJO 1 (con stopPropagation)");  // Solo se ejecuta este mensaje
  mensaje.textContent = "clic en HIJO 1 (con stopPropagation)";
});

// Evento click sobre Hijo 2 (sin stopPropagation)
hijo2.addEventListener("click", () => {
  // Como no usamos stopPropagation, el evento también llega al padre
  console.log("clic en HIJO 2 (sin stopPropagation)");
  mensaje.textContent = "clic en HIJO 2 (sin stopPropagation)";
  // Luego también se ejecutará el mensaje del padre automáticamente
});

// Evento sobre el enlace
enlace.addEventListener("click", (e) => {
  if (!enlaceActivo) {                                  // Si el enlace está desactivado...
    e.preventDefault();                                 // ...evita que se abra la página
    console.log("preventDefault activado → Enlace bloqueado");
    mensaje.textContent = "preventDefault activado → Enlace bloqueado";
  }
});

// Evento del botón para activar o desactivar el enlace
boton.addEventListener("click", () => {
  enlaceActivo = !enlaceActivo;                         // Cambia el estado del enlace
  mensaje.textContent = enlaceActivo
    ? "Enlace ACTIVADO"                                 // Si está activado, muestra mensaje
    : "Enlace DESACTIVADO (se bloquea al hacer clic)";  // Si no, avisa que está desactivado
});
