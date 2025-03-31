// Función que calcula la suma, el producto y el número mayor
function calcular() {
    // Obtener los valores de los inputs y convertirlos en números
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    // Verificar si los valores ingresados son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresa números válidos.");
        return; // Detener la ejecución si los valores no son válidos
    }

    // Calcular la suma y el producto
    const suma = numero1 + numero2;
    const producto = numero1 * numero2;

    // Determinar el número mayor
    let mayor;
    if (numero1 > numero2) {
        mayor = numero1;
    } else if (numero2 > numero1) {
        mayor = numero2;
    } else {
        mayor = "Los números son iguales";
    }

    // Mostrar los resultados en la página
    document.getElementById("suma").textContent = suma;
    document.getElementById("producto").textContent = producto;
    document.getElementById("mayor").textContent = mayor;
}
