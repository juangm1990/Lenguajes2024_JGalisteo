let jugador = 1; // La variable jugador controla controla el turno y se guarda en el tablero cuadno hace click
let casillas = document.querySelectorAll(".casilla");
let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let ganador = false;
const mensajeTurno = document.getElementById("mensajeTurno");
const modal = document.getElementById("modal");
const mensajeVentana = document.getElementById("mensajeVentana");
const botonAceptar = document.getElementById("cerrarModal");
let puntosJ1 = 0;
let puntosJ2 = 0;
const marcadorJ1 = document.getElementById("puntosJ1");
const marcadorJ2 = document.getElementById("puntosJ2");
const botonResetear = document.getElementById("btnReset");
const botonOtra = document.getElementById("btnOtra");
let combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function jugada(num) {
    if (!ganador && tablero[num - 1] === 0) {
        tablero[num - 1] = jugador;
        casillas[num - 1].classList.add("jugador" + jugador);
        if (comprobarGanador()) {
            mensajeVentana.textContent = "Gana jugador " + jugador;
            modal.classList.remove("oculto");
            if (jugador === 1) {
                puntosJ1++;
                marcadorJ1.textContent = puntosJ1;
            } else{
                puntosJ2++
                marcadorJ2.textContent = puntosJ2;
            }
            ganador = true;
        } else if (comprobarEmpate()) {
            alert("Empate");
            ganador = true;
        } else {
            cambiarJugador();   
        }
    }
}

function cambiarJugador() {
    jugador = jugador === 1 ? 2 : 1;
    mensajeTurno.textContent = `Turno de: Jugador ${jugador}`;
}


function comprobarGanador() {
    for (let i = 0; i < combinaciones.length; i++) {
        const combinacion = combinaciones[i];
        let ganador = true;
        for (let j = 0; j < combinacion.length; j++) {
            const casilla = combinacion[j];
            if (tablero[casilla] !== jugador) {
                ganador = false;
                break;
            }
        }
        if (ganador) {
            for (let j = 0; j < combinacion.length; j++) {
                casillas[combinacion[j]].classList.add("amarilla");
            }
            return true;
        }
    }
    return false;
}

function comprobarEmpate() {
    return !tablero.includes(0);
}

botonAceptar.addEventListener("click", function () {
    modal.classList.add("oculto");
});

botonResetear.addEventListener("click", function () {
    puntosJ1 = 0; 
    puntosJ2 = 0;
    marcadorJ1.textContent = "0";
    marcadorJ2.textContent = "0";
});

botonOtra.addEventListener("click", function () {
    tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    casillas.forEach(c => {
        c.classList.remove("jugador1");
        c.classList.remove("jugador2");
        c.classList.remove("amarilla");
    }); 
    ganador = false;
    jugador = 1;
    mensajeTurno.textContent = "Turno de: Jugador 1";
    modal.classList.add("oculto");
});
