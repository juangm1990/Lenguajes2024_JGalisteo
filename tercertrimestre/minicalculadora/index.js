// Función para sumar los dos números
function sumar() {
    // Obtener los valores de los inputs con id "num1" y "num2"
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificamos si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Si alguno de los valores no es un número válido, mostrar un mensaje de error
        document.getElementById("resultado").innerText = "Por favor ingresa dos números válidos";
        return;  // Salir de la función si los números no son válidos
    }

    // Realizar la suma
    var resultado = num1 + num2;

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = resultado;
}

// Función para multiplicar los dos números
function multiplicar() {
    // Obtener los valores de los inputs con id "num1" y "num2"
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificamos si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Si alguno de los valores no es un número válido, mostrar un mensaje de error
        document.getElementById("resultado").innerText = "Por favor ingresa dos números válidos";
        return;  // Salir de la función si los números no son válidos
    }

    // Realizar la multiplicación
    var resultado = num1 * num2;

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = resultado;
}

// Función para encontrar el mayor de los dos números
function numeroMayor() {
    // Obtener los valores de los inputs con id "num1" y "num2"
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificamos si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Si alguno de los valores no es un número válido, mostrar un mensaje de error
        document.getElementById("resultado").innerText = "Por favor ingresa dos números válidos";
        return;  // Salir de la función si los números no son válidos
    }

    // Comparar los dos números y obtener el mayor
    var resultado = num1 > num2 ? num1 : num2;

    // Mostrar el número mayor en el elemento con id "resultado"
    document.getElementById("resultado").innerText = resultado;
}
