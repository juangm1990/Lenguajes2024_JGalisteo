// =============================
// PARTE 1: Contar <div>s
// =============================

// Esta función cuenta cuántos <div class="caja"> hay,
// cuántos están vacíos y cuántos tienen contenido
function contarDivs() {
    // Seleccionamos todos los divs dentro de la zona
    const todos = document.querySelectorAll(".zona-divs .caja");
  
    // Contador para los divs con contenido
    let conContenido = 0;
  
    // Recorremos cada div y comprobamos si tiene texto
    todos.forEach(div => {
      if (div.textContent.trim() !== "") {
        conContenido++;
      }
    });
  
    // Mostramos el resultado en pantalla
    const resultado = document.getElementById("resultadoDivs");
    resultado.innerHTML = `
      <strong>Total de divs:</strong> ${todos.length}<br>
      <strong>Con contenido:</strong> ${conContenido}<br>
      <strong>Vacíos:</strong> ${todos.length - conContenido}
    `;
  }
  
  
  
  // =============================
  // PARTE 2: Modificar estilos
  // =============================
  
  // Seleccionamos el div que queremos modificar
  const tarjeta = document.getElementById("tarjeta");
  
  // Esta función alterna el color de fondo con una clase
  function cambiarFondo() {
    tarjeta.classList.toggle("fondo-color");
  }
  
  // Esta función activa o desactiva un borde punteado
  function bordesPunteados() {
    tarjeta.classList.toggle("borde-punteado");
  }
  
  // Esta función redondea las esquinas de la tarjeta
  function bordesRedondeados() {
    tarjeta.classList.toggle("borde-redondeado");
  }
  
  // Esta función agranda el tamaño de la tarjeta
  function agrandar() {
    tarjeta.classList.add("grande");      // Le damos clase grande
    tarjeta.classList.remove("chico");    // Quitamos la clase chico por si la tenía
  }
  
  // También puedes agrandar con otro botón específico
  function tamanoGrande() {
    tarjeta.classList.add("grande");
    tarjeta.classList.remove("chico");
  }
  
  // Esta función hace la tarjeta más pequeña
  function tamanoChico() {
    tarjeta.classList.add("chico");
    tarjeta.classList.remove("grande");
  }
  
  // Esta función oculta o muestra la tarjeta
  function desaparecer() {
    tarjeta.classList.toggle("oculto");
  }
  