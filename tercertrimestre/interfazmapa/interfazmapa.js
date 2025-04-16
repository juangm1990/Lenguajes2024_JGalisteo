// ===========================
// VARIABLES GLOBALES
// ===========================

// Coordenadas de origen y destino
let puntoOrigen = null;
let puntoDestino = null;

// Marcadores Leaflet para poder eliminarlos luego
let marcadorOrigen = null;
let marcadorDestino = null;

// ===========================
// INICIALIZACIÓN DEL MAPA
// ===========================

// Creamos el mapa centrado en Córdoba
const mapa = L.map('mapa').setView([37.8882, -4.7794], 16);

// Añadimos la capa de OpenStreetMap al mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// ===========================
// EVENTO: CLIC IZQUIERDO (ORIGEN)
// ===========================

mapa.on('click', function (e) {
  // Guardamos las coordenadas del clic como origen
  puntoOrigen = e.latlng;

  // Si ya hay un marcador de origen anterior, lo eliminamos
  if (marcadorOrigen) {
    mapa.removeLayer(marcadorOrigen);
  }

  // Creamos y añadimos el nuevo marcador al mapa
  marcadorOrigen = L.marker(puntoOrigen, { title: "Origen" }).addTo(mapa);

  // Mostramos dirección fija + coordenadas en el input de origen
  document.getElementById("origen").value = `San Francisco de Sales, 7 (14010 Córdoba)
Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`;
});

// ===========================
// EVENTO: CLIC DERECHO (DESTINO)
// ===========================

mapa.on('contextmenu', function (e) {
  // Guardamos las coordenadas del clic como destino
  puntoDestino = e.latlng;

  // Si ya hay un marcador de destino anterior, lo eliminamos
  if (marcadorDestino) {
    mapa.removeLayer(marcadorDestino);
  }

  // Creamos y añadimos el nuevo marcador al mapa
  marcadorDestino = L.marker(puntoDestino, { title: "Destino" }).addTo(mapa);

  // Mostramos coordenadas en el input de destino
  document.getElementById("destino").value = `Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`;
});

// ===========================
// FUNCIÓN: Calcular distancia
// ===========================

function calcularDistancia() {
  const resultado = document.getElementById("resultado");

  // Si falta algún punto, mostramos advertencia
  if (!puntoOrigen || !puntoDestino) {
    resultado.textContent = "Debes marcar ambos puntos en el mapa.";
    return;
  }

  // Usamos la función distance() de Leaflet (en metros)
  const distancia = mapa.distance(puntoOrigen, puntoDestino);

  // Mostramos la distancia redondeada a 2 decimales
  resultado.textContent = `La distancia lineal entre los dos puntos es: ${distancia.toFixed(2)} m.`;
}

// ===========================
// FUNCIÓN: Resetear el mapa
// ===========================

function resetearMapa() {
  // Eliminar marcadores si existen
  if (marcadorOrigen) {
    mapa.removeLayer(marcadorOrigen);
    marcadorOrigen = null;
  }
  if (marcadorDestino) {
    mapa.removeLayer(marcadorDestino);
    marcadorDestino = null;
  }

  // Limpiar las coordenadas
  puntoOrigen = null;
  puntoDestino = null;

  // Limpiar los campos de entrada
  document.getElementById("origen").value = "";
  document.getElementById("destino").value = "";

  // Mensaje inicial
  document.getElementById("resultado").textContent =
    "Haz clic izquierdo para marcar el origen y derecho para el destino.";
}
