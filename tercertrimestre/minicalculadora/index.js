// Función para sumar los dos números
function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificamos si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor ingresa dos números válidos";
        return;
    }

    var resultado = num1 + num2;
    document.getElementById("resultado").innerText = resultado;
}

// Función para multiplicar los dos números
function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificamos si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor ingresa dos números válidos";
        return;
    }

    var resultado = num1 * num2;
    document.getElementById("resultado").innerText = resultado;
}

// Función para encontrar el mayor de los dos números
function numeroMayor() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificamos si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor ingresa dos números válidos";
        return;
    }

    var resultado = num1 > num2 ? num1 : num2;
    document.getElementById("resultado").innerText = resultado;
}
