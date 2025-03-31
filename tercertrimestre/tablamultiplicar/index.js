function generarTablas() {
    var numero = document.getElementById("numero").value;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    for (var i = 1; i <= numero; i++) {
        var tabla = '<h3>Tabla del ' + i + '</h3>';
        for (var j = 0; j <= 10; j++) {
            tabla += '<p>' + i + ' x ' + j + ' = ' + (i * j) + '</p>';
        }
        resultadoDiv.innerHTML += tabla;
    }
}
