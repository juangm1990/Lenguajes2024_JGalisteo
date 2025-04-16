const unicornio = document.getElementById("unicornio");
const destinos = document.querySelectorAll(".destino");
const mensaje = document.getElementById("mensaje");
const zonaUnicornio = document.getElementById("zona-unicornio");
const volverBtn = document.getElementById("volverBtn");

// Efecto de brillo al arrastrar
unicornio.addEventListener("dragstart", () => {
  unicornio.classList.add("brillo");
});

// Quitar brillo cuando se suelta
unicornio.addEventListener("dragend", () => {
  unicornio.classList.remove("brillo");
});

// Preparar cada destino para aceptar el unicornio
destinos.forEach(destino => {
  destino.addEventListener("dragover", (e) => {
    e.preventDefault(); // Permite soltar
  });

  destino.addEventListener("drop", () => {
    destino.appendChild(unicornio);
    const lugar = destino.dataset.destino;
    mensaje.textContent = `¡Me voy a ${lugar}!`;
  });
});

// Si se suelta fuera de los destinos, vuelve al origen
document.addEventListener("drop", (e) => {
  if (!e.target.classList.contains("destino") && !e.target.closest(".destino")) {
    zonaUnicornio.appendChild(unicornio);
    mensaje.textContent = "Me voy de vacaciones...";
  }
});

// Botón "Volver al origen"
volverBtn.addEventListener("click", () => {
  zonaUnicornio.appendChild(unicornio);
  mensaje.textContent = "Me voy de vacaciones...";
});

