// ===============================
// VARIABLE GLOBAL PARA EL TOTAL
// ===============================
let sumaTotal = 0; // Se irá actualizando al añadir o eliminar productos

// ==============================================
// FUNCIÓN PRINCIPAL: AÑADIR UN PRODUCTO A LA LISTA
// ==============================================
function agregarProducto() {
  // Capturamos los valores del formulario
  const nombre = document.getElementById("producto").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  // Validación: No permitir campos vacíos o inválidos
  if (!nombre || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
    alert("Introduce datos válidos.");
    return;
  }

  // Calculamos el subtotal de este producto
  const subtotal = precio * cantidad;

  // Sumamos al total general
  sumaTotal += subtotal;

  // ==============================
  // CREAMOS EL ELEMENTO EN LA LISTA
  // ==============================

  // Creamos el contenedor del producto
  const item = document.createElement("div");
  item.className = "item";

  // Creamos el texto a mostrar
  const texto = document.createElement("span");
  texto.textContent = `${nombre} - Cantidad: ${cantidad}, Precio: ${precio}€, Subtotal: ${subtotal.toFixed(2)}€`;

  // Creamos el botón para eliminar el producto
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  // Evento del botón: eliminar el producto y restar su subtotal
  botonEliminar.onclick = () => {
    item.remove(); // Elimina visualmente el producto
    sumaTotal -= subtotal; // Resta el subtotal al total general
    actualizarTotal(); // Refresca el total en pantalla
  };

  // Añadimos texto y botón al contenedor del producto
  item.appendChild(texto);
  item.appendChild(botonEliminar);

  // Insertamos el producto en el div de la lista
  document.getElementById("lista").appendChild(item);

  // Actualizamos el total visual
  actualizarTotal();

  // Limpiamos los campos del formulario
  document.getElementById("producto").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("cantidad").value = "";
}

// ==============================
// ACTUALIZA LA SUMA TOTAL EN PANTALLA
// ==============================
function actualizarTotal() {
  document.getElementById("total").textContent = `Suma Total: ${sumaTotal.toFixed(2)} €`;
}

// ==============================
// RESETEA LA LISTA COMPLETA
// ==============================
function reiniciarLista() {
  document.getElementById("lista").innerHTML = ""; // Borra todo el contenido de la lista
  sumaTotal = 0; // Reinicia el total
  actualizarTotal(); // Refresca el total en pantalla
}
