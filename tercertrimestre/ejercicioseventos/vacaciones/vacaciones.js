// Seleccionamos el unicornio por su ID
const unicornio = document.getElementById("unicornio");

// Seleccionamos todos los destinos (cuadros) con la clase "destino"
const destinos = document.querySelectorAll(".destino");

// Seleccionamos el elemento del mensaje para cambiar el texto
const mensaje = document.getElementById("mensaje");

// Seleccionamos la zona inicial donde está el unicornio
const zonaUnicornio = document.getElementById("zona-unicornio");

// Seleccionamos el botón que usaremos para devolver el unicornio al origen
const volverBtn = document.getElementById("volverBtn");


// Cuando empiezo a arrastrar el unicornio, le añado la clase "brillo"
unicornio.addEventListener("dragstart", () => {
  unicornio.classList.add("brillo");
});

// Cuando suelto el unicornio, le quito la clase "brillo"
unicornio.addEventListener("dragend", () => {
  unicornio.classList.remove("brillo");
});


// Recorremos cada destino para permitir que el unicornio se suelte ahí
destinos.forEach(destino => {
  
  // Permitir que se pueda soltar algo encima del destino
  destino.addEventListener("dragover", (e) => {
    e.preventDefault(); // Si no se pone esto, no se puede hacer drop
  });

  // Cuando se suelta el unicornio en un destino
  destino.addEventListener("drop", (e) => {
    e.preventDefault(); // Evitamos el comportamiento por defecto

    // Metemos el unicornio dentro del div destino
    destino.appendChild(unicornio);

    // Posicionamos el unicornio en el centro del destino usando estilos CSS
    unicornio.style.position = "absolute";
    unicornio.style.top = "50%";
    unicornio.style.left = "50%";
    unicornio.style.transform = "translate(-50%, -50%)";

    // Cambiamos el texto del mensaje según el destino (dato personalizado en HTML)
    const lugar = destino.dataset.destino;
    mensaje.textContent = `¡Me voy a ${lugar}!`;
  });
});


// Al hacer clic en el botón "Volver al origen"
volverBtn.addEventListener("click", () => {
  // Colocamos el unicornio de nuevo dentro de su contenedor original
  zonaUnicornio.appendChild(unicornio);

  // Restauramos la posición original (sin absolute)
  unicornio.style.position = "relative";
  unicornio.style.top = "0";
  unicornio.style.left = "0";
  unicornio.style.transform = "none";

  // Cambiamos el mensaje a su estado inicial
  mensaje.textContent = "Me voy de vacaciones...";
});
