// Elementos clave del DOM
const zona = document.getElementById("zona-interactiva");     // Zona donde se puede interactuar
const lista = document.getElementById("lista-eventos");       // Lista donde se muestran los eventos
const limpiarBtn = document.getElementById("limpiar");        // Botón para limpiar el historial
const circulo = document.getElementById("circulo");           // Círculo que se puede arrastrar

// Posición inicial del círculo (para volver al origen si se suelta fuera)
const posInicial = {
  top: "100px",
  left: "100px"
};

// Función para registrar un evento con la hora actual
function registrar(mensaje) {
  const hora = new Date().toLocaleTimeString();               // Obtener hora en formato local
  const item = document.createElement("li");                  // Crear nuevo elemento <li>
  item.textContent = `[${hora}] ${mensaje}`;                  // Añadir el mensaje con la hora
  lista.appendChild(item);                                    // Insertar en la lista de eventos
  lista.scrollTop = lista.scrollHeight;                       // Hacer scroll hacia el último mensaje
}

// Eventos del RATÓN
zona.addEventListener("click", () => registrar("Click detectado"));
zona.addEventListener("dblclick", () => registrar("Doble click detectado"));
zona.addEventListener("contextmenu", (e) => {
  e.preventDefault();                                         // Evitar que se abra el menú contextual
  registrar("Clic derecho detectado");
});

// Eventos del TECLADO
document.addEventListener("keydown", (e) => registrar(`Tecla presionada: ${e.key}`));
document.addEventListener("keyup", (e) => registrar(`Tecla soltada: ${e.key}`));

// Eventos del NAVEGADOR
window.addEventListener("resize", () => registrar("La ventana ha sido redimensionada"));

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    registrar("La pestaña fue ocultada (minimizada o cambio de pestaña)");
  } else {
    registrar("La pestaña está visible de nuevo");
  }
});

window.addEventListener("beforeunload", () => {
  registrar("La página se va a cerrar o recargar");
});

// Botón para limpiar el historial
limpiarBtn.addEventListener("click", () => {
  lista.innerHTML = "";                                       // Borrar todo el contenido del historial
  registrar("Historial limpiado");
});

// Círculo draggable
let offsetX, offsetY;                                         // Diferencia entre clic y borde del círculo

circulo.addEventListener("dragstart", (e) => {
  const rect = circulo.getBoundingClientRect();              // Obtener posición actual del círculo
  offsetX = e.clientX - rect.left;                           // Calcular desplazamiento horizontal
  offsetY = e.clientY - rect.top;                            // Calcular desplazamiento vertical
  registrar("Inicio de arrastre del círculo");
});

zona.addEventListener("dragover", (e) => {
  e.preventDefault();                                        // Permitir soltar elementos en la zona
});

zona.addEventListener("drop", (e) => {
  e.preventDefault();
  const zonaRect = zona.getBoundingClientRect();             // Obtener posición de la zona

  // Calcular nueva posición del círculo dentro de la zona
  const nuevoX = e.clientX - zonaRect.left - offsetX;
  const nuevoY = e.clientY - zonaRect.top - offsetY;

  // Posicionar el círculo
  circulo.style.left = `${nuevoX}px`;
  circulo.style.top = `${nuevoY}px`;

  registrar(`Círculo soltado en posición (${Math.round(nuevoX)}, ${Math.round(nuevoY)})`);
});

// Si el círculo se suelta fuera de la zona
document.addEventListener("drop", (e) => {
  const estaEnZona = zona.contains(e.target) || e.target === zona;

  if (!estaEnZona) {
    // Volver a la posición inicial
    circulo.style.left = posInicial.left;
    circulo.style.top = posInicial.top;

    // Activar animación visual (rebote)
    circulo.classList.add("rebote");

    // Eliminar la clase tras la animación para que se pueda repetir
    setTimeout(() => {
      circulo.classList.remove("rebote");
    }, 500);

    registrar("Círculo soltado fuera de la zona interactiva (vuelve al origen)");
  }
});
