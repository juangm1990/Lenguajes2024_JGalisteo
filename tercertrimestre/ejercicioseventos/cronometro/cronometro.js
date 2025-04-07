let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;

// FUNCIONALIDAD DEL CRONÓMETRO
function actualizarPantalla() {
    let textoMinutos;
    let textoSegundos;
    let textoMilisegundos;

    // Si los minutos son menores que 10 (por ejemplo, 4), les añadimos un "0" delante → "04". Si no, los dejamos tal como están (por ejemplo, "12")
    if (minutos < 10) {
        textoMinutos = "0" + minutos;
    } else {
        textoMinutos = minutos;
    }

    // Hacemos lo mismo con los segundos: si son menores que 10, les añadimos un "0". Así el reloj se verá como "01:09" en lugar de "1:9"
    if (segundos < 10) {
        textoSegundos = "0" + segundos;
    } else {
        textoSegundos = segundos;
    }

    // Para los milisegundos queremos que siempre tengan **3 cifras**:

        //Si son menores que 10 (por ejemplo, 7), les ponemos dos ceros → "007"

    if (milisegundos < 10) {
        textoMilisegundos = "00" + milisegundos;
        // Si son menores que 100 (por ejemplo, 53), les ponemos un cero → "053"

    } else if (milisegundos < 100) {
        textoMilisegundos = "0" + milisegundos;
        // Si ya tienen 3 cifras (por ejemplo, 125), los dejamos tal cual → "125"
    } else {
        textoMilisegundos = milisegundos;
    }

    // Para mostrar todos los valores en la pantalla
    document.getElementById("minutos").textContent = textoMinutos;
    document.getElementById("segundos").textContent = textoSegundos;
    document.getElementById("milisegundos").textContent = textoMilisegundos;
}

// FUNCIÓN PARA INICIAR EL CRONÓMETRO
function iniciar() {
    if (!intervalo) {
        intervalo = setInterval(function () {
            milisegundos = milisegundos + 10;

            if (milisegundos >= 1000) {
                milisegundos = 0;
                segundos = segundos + 1;
            }

            if (segundos >= 60) {
                segundos = 0;
                minutos = minutos + 1;
            }

            actualizarPantalla();
        }, 10);
    }
}

// FUNCIÓN PARA DETENER EL CRONÓMETRO
function detener() {
    clearInterval(intervalo);
    intervalo = null;
}

// FUNCIÓN PARA REINICIAR EL CRONÓMETRO
function reiniciar() {
    detener();
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    actualizarPantalla();
}
