// Función para generar las tablas de multiplicar
function generarTablas() {
    // Obtener el valor del número ingresado en el input con id "numero"
    var numero = document.getElementById("numero").value;

    // Obtener el div donde se mostrarán los resultados (con id "resultado")
    var resultadoDiv = document.getElementById("resultado");

    // Limpiar los resultados anteriores (si los hubiera) para mostrar los nuevos
    resultadoDiv.innerHTML = '';

    // Bucle externo que va desde 1 hasta el número ingresado (incluido)
    for (var i = 1; i <= numero; i++) {

        // Crear un encabezado con la tabla del número i
        var tabla = '<h3>Tabla del ' + i + '</h3>';

        // Bucle interno que va de 0 a 10 para multiplicar el número i por cada valor de 0 a 10
        for (var j = 0; j <= 10; j++) {
            
            // Crear una línea que muestra el resultado de la multiplicación i * j
            tabla += '<p>' + i + ' x ' + j + ' = ' + (i * j) + '</p>';
        }

        // Añadir la tabla generada al div "resultado"
        resultadoDiv.innerHTML += tabla;
    }
}
