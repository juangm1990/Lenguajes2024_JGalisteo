// Función principal que se ejecuta al pulsar el botón "Calcular"
function calcular() {
    // Obtener valores de entrada desde los campos del formulario
    const ancho = parseFloat(document.getElementById("ancho").value);           // Ancho en cm
    const alto = parseFloat(document.getElementById("alto").value);             // Alto en cm
    const profundidad = parseFloat(document.getElementById("profundidad").value); // Profundidad en cm
    const material = document.getElementById("material").value;                 // Material seleccionado
  
    // Obtener valores de configuración
    const precioBase = parseFloat(document.getElementById("precioBase").value);      // Precio base por m³
    const incPlastico = parseFloat(document.getElementById("incPlastico").value);    // Incremento para plástico
    const incCarton = parseFloat(document.getElementById("incCarton").value);        // Incremento para cartón
    const incMadera = parseFloat(document.getElementById("incMadera").value);        // Incremento para madera
    const iva = parseFloat(document.getElementById("iva").value);                    // Porcentaje de IVA
  
    const resultado = document.getElementById("resultado"); // Contenedor donde se mostrará el resultado
  
    // -------------------------------
    // VALIDACIONES DE LAS DIMENSIONES
    // -------------------------------
  
    const dimensiones = [ancho, alto, profundidad];
  
    // Comprobar si alguna dimensión está fuera del rango permitido
    if (dimensiones.some(d => d < 5 || d > 100)) {
      resultado.innerHTML = "Las dimensiones deben estar entre 5 cm y 100 cm.";
      return; // Detiene la función si no se cumple
    }
  
    // Comprobar que la relación entre la mayor y la menor no supere el factor 5
    const max = Math.max(...dimensiones);
    const min = Math.min(...dimensiones);
    if (max / min > 5) {
      resultado.innerHTML = "No se permite que una dimensión supere en más de 5 veces a otra.";
      return;
    }
  
    // -------------------------------
    // CÁLCULOS
    // -------------------------------
  
    const volumen = (ancho * alto * profundidad) / 1000; // Se calcula volumen en litros (opcional)
    const superficie = ancho * alto; // Superficie visible (por ejemplo, frontal)
  
    let incremento = 0;
  
    // Asignar el porcentaje de incremento según el material seleccionado
    switch (material) {
      case "plastico":
        incremento = incPlastico;
        break;
      case "carton":
        incremento = incCarton;
        break;
      case "madera":
        incremento = incMadera;
        break;
    }
  
    // Calcular el precio sin IVA:
    // volumen en m³ * precio base * (1 + incremento en %)
    const precioSinIVA = (volumen / 1000) * precioBase * (1 + incremento / 100);
  
    // Calcular precio final con IVA
    const precioConIVA = precioSinIVA * (1 + iva / 100);
  
    // -------------------------------
    // MOSTRAR RESULTADO
    // -------------------------------
    resultado.innerHTML = `
      <strong>Dimensiones de la caja:</strong> ${ancho} x ${alto} x ${profundidad} cm<br>
      <strong>Volumen en cm³:</strong> ${(ancho * alto * profundidad).toFixed(2)}<br>
      <strong>Superficie en cm²:</strong> ${superficie.toFixed(2)}<br>
      <strong>Material seleccionado:</strong> ${material.charAt(0).toUpperCase() + material.slice(1)}<br>
      <strong>Precio sin IVA:</strong> ${precioSinIVA.toFixed(2)} €<br>
      <strong>Precio con IVA:</strong> ${precioConIVA.toFixed(2)} €
    `;
  }
  