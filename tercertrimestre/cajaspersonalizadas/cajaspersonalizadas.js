function calcular() {
    // Obtenemos el tipo de forma seleccionada: caja o cilindro (aunque por ahora solo usamos caja)
    const tipo = document.getElementById("tipo").value;
  
    // Obtenemos las dimensiones introducidas por el usuario
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const largo = parseFloat(document.getElementById("largo").value);
  
    // Obtenemos el tipo de material seleccionado: plástico, cartón o madera
    const material = document.getElementById("material").value;
  
    // Seleccionamos el elemento HTML donde mostraremos el resultado
    const info = document.getElementById("info");
  
    // Comprobamos si alguno de los campos no es un número válido
    if (isNaN(ancho) || isNaN(alto) || isNaN(largo)) {
      info.textContent = "Debes introducir todas las dimensiones correctamente.";
      return;
    }
  
    // Validación 1: Ninguna dimensión puede ser menor de 5 cm
    if (ancho < 5 || alto < 5 || largo < 5) {
      info.textContent = "Ninguna dimensión puede ser menor de 5 cm.";
      return;
    }
  
    // Validación 2: Ninguna dimensión puede ser mayor de 100 cm
    if (ancho > 100 || alto > 100 || largo > 100) {
      info.textContent = "Ninguna dimensión puede superar los 100 cm.";
      return;
    }
  
    // Validación 3: La proporción entre la dimensión mayor y la menor no puede superar un factor de 5
    const max = Math.max(ancho, alto, largo);
    const min = Math.min(ancho, alto, largo);
    if (max / min > 5) {
      info.textContent = "La dimensión mayor no puede superar en más de 5 veces a la menor.";
      return;
    }
  
    // Cálculo del volumen en centímetros cúbicos (cm³)
    const volumen = ancho * alto * largo;
  
    // Cálculo de la superficie externa (en cm²) de una caja rectangular
    const superficie = 2 * (ancho * alto + ancho * largo + alto * largo);
  
    // Definimos el precio base por cm² (50€/m² convertido a cm² = 0.005 €/cm²)
    const basePrecio = 0.005;
  
    // Definimos el porcentaje de incremento según el material seleccionado
    let incremento = 0;
  
    // Aplicamos el incremento correspondiente al material
    if (material === "plastico") {
      incremento = 0.10; // 10% adicional para plástico
    } else if (material === "carton") {
      incremento = 0.20; // 20% adicional para cartón
    } else if (material === "madera") {
      incremento = 0.50; // 50% adicional para madera
    }
  
    // Cálculo del precio sin IVA: superficie x precio base x (1 + incremento del material)
    const precioSinIVA = superficie * basePrecio * (1 + incremento);
  
    // Cálculo del precio final con IVA (21%)
    const precioConIVA = precioSinIVA * 1.21;
  
    // Mostramos el resultado en el elemento HTML con los valores formateados
    info.innerHTML = `
      Tipo de elemento: <b>${tipo}</b><br>
      Material seleccionado: <b>${material}</b><br>
      Dimensiones: ${ancho} x ${alto} x ${largo} cm<br>
      Volumen: <b>${volumen.toFixed(2)} cm³</b><br>
      Superficie externa: <b>${superficie.toFixed(2)} cm²</b><br>
      Precio sin IVA: <b>${precioSinIVA.toFixed(2)} €</b><br>
      Precio con IVA (21%): <b>${precioConIVA.toFixed(2)} €</b>
    `;
  }
  