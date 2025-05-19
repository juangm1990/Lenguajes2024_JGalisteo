let piezas = {};
let presupuesto = {};

const zonapiezas = document.getElementById("zonapiezas");
const listaprecios = document.getElementById("listaprecios");
const tablacuerpo = document.getElementById("tablacuerpo");
const totalbruto = document.getElementById("totalbruto");
const totalmargen = document.getElementById("totalmargen");
const totaliva = document.getElementById("totaliva");

const margenInput = document.getElementById("margen");
const ivaInput = document.getElementById("iva");

const nombrespiezas = [
  "roja", "naranja", "amarilla", "verde", "azulclaro", "azuloscuro", "morado"
];

function cargarPrecios() {
  fetch("precios.json")
    .then(res => res.json())
    .then(data => {
      piezas = data;
      mostrarListaPrecios();
      actualizarTabla();
    });
}

function mostrarPiezas() {
  zonapiezas.innerHTML = "";
  for (let color of nombrespiezas) {
    const img = document.createElement("img");
    img.src = `imagenes/${color}.png`;
    img.alt = color;
    img.className = "pieza";
    img.draggable = true;
    img.dataset.color = color;

    img.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", color);
    });

    img.addEventListener("click", () => agregarPieza(color));

    zonapiezas.appendChild(img);
  }

  const contenedorPresupuesto = document.querySelector(".presupuesto");
  contenedorPresupuesto.addEventListener("dragover", e => e.preventDefault());
  contenedorPresupuesto.addEventListener("drop", e => {
    e.preventDefault();
    const color = e.dataTransfer.getData("text/plain");
    agregarPieza(color);
  });
}

function agregarPieza(color) {
  presupuesto[color] = (presupuesto[color] || 0) + 1;
  actualizarTabla();
}

function mostrarListaPrecios() {
  listaprecios.innerHTML = "";
  for (let color of nombrespiezas) {
    const precio = piezas[color];
    const item = document.createElement("li");
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.marginBottom = "10px";
    item.innerHTML = `
      <img src="imagenes/${color}.png" alt="${color}" style="width: 30px; height: 30px; margin-right: 10px;">
      <span>${color} - €${precio}</span>
    `;
    listaprecios.appendChild(item);
  }
}

function actualizarTabla() {
  tablacuerpo.innerHTML = "";
  let bruto = 0;

  for (let color in presupuesto) {
    const cantidad = presupuesto[color];
    const total = cantidad * piezas[color];
    bruto += total;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${color}</td>
      <td>${cantidad}</td>
      <td>€${total.toFixed(2)}</td>
    `;
    tablacuerpo.appendChild(fila);
  }

  const margen = parseFloat(margenInput.value || 0);
  const iva = parseFloat(ivaInput.value || 0);

  const conMargen = bruto * (1 + margen / 100);
  const conIva = conMargen * (1 + iva / 100);

  totalbruto.textContent = `€${bruto.toFixed(2)}`;
  totalmargen.textContent = `€${conMargen.toFixed(2)}`;
  totaliva.textContent = `€${conIva.toFixed(2)}`;

  guardarValoresLocales(margen, iva);
}

function guardarValoresLocales(margen, iva) {
  localStorage.setItem("margen", margen);
  localStorage.setItem("iva", iva);
}

function cargarValoresLocales() {
  const margen = localStorage.getItem("margen");
  const iva = localStorage.getItem("iva");
  if (margen) margenInput.value = margen;
  if (iva) ivaInput.value = iva;
}

// Eventos
document.getElementById("borrar").addEventListener("click", () => {
  presupuesto = {};
  actualizarTabla();
});

document.getElementById("actualizarprecios").addEventListener("click", () => {
  cargarPrecios();
});

margenInput.addEventListener("input", actualizarTabla);
ivaInput.addEventListener("input", actualizarTabla);

// Inicialización
mostrarPiezas();         // Solo carga fichas
cargarValoresLocales();  // Solo carga IVA y margen
actualizarTabla();       // Deja tabla en blanco hasta que pulses el botón
