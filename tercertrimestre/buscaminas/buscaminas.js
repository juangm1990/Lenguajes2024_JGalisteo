// ===============================================
// CONFIGURACIÓN DEL JUEGO (valores base)
// ===============================================

// Número de filas y columnas del tablero (8x8)
const filas = 8;
const columnas = 8;

// Número total de minas que se colocarán
const minasTotales = 10;

// Variable para mostrar minas restantes (se puede usar más adelante)
let minasRestantes = minasTotales;

// Matriz que contendrá los datos de cada celda (mina, revelado, etc.)
let tablero = [];

// Variable para controlar si el juego ha terminado
let juegoTerminado = false;

// ===============================================
// FUNCIÓN PRINCIPAL: CREAR EL TABLERO
// ===============================================

function crearTablero() {
  // Obtenemos el div contenedor del tablero desde el HTML
  const contenedor = document.getElementById("tablero");

  // Limpiamos el contenido anterior por si se reinicia el juego
  contenedor.innerHTML = "";

  // Reiniciamos los valores globales
  tablero = [];
  minasRestantes = minasTotales;
  juegoTerminado = false;

  // Mostramos el número de minas en pantalla
  document.getElementById("contador-minas").textContent = `Minas restantes: ${minasRestantes}`;

  // Creamos la estructura de celdas
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      // Creamos una celda visual (<div>) y configuramos sus datos
      const celda = document.createElement("div");
      celda.classList.add("celda");
      celda.dataset.fila = i;
      celda.dataset.columna = j;

      // Le damos funcionalidad: cuando hagas clic, se revelará
      celda.addEventListener("click", revelarCelda);

      // Añadimos la celda al HTML
      contenedor.appendChild(celda);

      // Guardamos la celda en nuestra estructura lógica (JS)
      fila.push({
        mina: false,          // ¿Tiene mina?
        revelada: false,      // ¿Ya se ha mostrado?
        celda: celda          // Referencia al elemento del DOM
      });
    }
    tablero.push(fila); // Añadimos la fila completa al tablero
  }

  // Después de crear el tablero, colocamos las minas
  colocarMinas();
}

// ===============================================
// FUNCIÓN: COLOCAR MINAS DE FORMA ALEATORIA
// ===============================================

function colocarMinas() {
  let colocadas = 0;

  while (colocadas < minasTotales) {
    // Elegimos una posición aleatoria
    const i = Math.floor(Math.random() * filas);
    const j = Math.floor(Math.random() * columnas);

    // Si en esa celda no hay mina, la colocamos
    if (!tablero[i][j].mina) {
      tablero[i][j].mina = true;
      colocadas++; // Aumentamos el contador
    }
  }
}

// ===============================================
// FUNCIÓN: REVELAR UNA CELDA AL HACER CLIC
// ===============================================

function revelarCelda(e) {
  // Si el juego ya ha terminado, ignoramos los clics
  if (juegoTerminado) return;

  // Obtenemos la posición (fila y columna) desde los atributos HTML
  const i = parseInt(this.dataset.fila);
  const j = parseInt(this.dataset.columna);

  // Accedemos a la celda correspondiente en la matriz
  const celda = tablero[i][j];

  // Si ya estaba revelada, no hacemos nada
  if (celda.revelada) return;

  // Marcamos como revelada y aplicamos estilo CSS
  celda.revelada = true;
  celda.celda.classList.add("revelada");

  // Si es una mina, perdemos
  if (celda.mina) {
    celda.celda.classList.add("mina");
    celda.celda.textContent = "💣";
    terminarJuego("¡BOOM! Has perdido.");
  } else {
    // Si no es mina, contamos cuántas hay cerca
    const minasCerca = contarMinasCercanas(i, j);

    // Si hay alguna, mostramos el número
    if (minasCerca > 0) {
      celda.celda.textContent = minasCerca;
    } else {
      // Si no hay minas cerca, revelamos las celdas vecinas automáticamente
      revelarVecinos(i, j);
    }
  }
}

// ===============================================
// FUNCIÓN: CONTAR MINAS CERCANAS A UNA CELDA
// ===============================================

function contarMinasCercanas(i, j) {
  let total = 0;

  // Recorremos las 8 celdas vecinas (incluso diagonales)
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      // Comprobamos que no nos salgamos del tablero
      if (x >= 0 && x < filas && y >= 0 && y < columnas) {
        if (tablero[x][y].mina) {
          total++; // Si hay mina, sumamos
        }
      }
    }
  }

  return total;
}

// ===============================================
// FUNCIÓN: REVELAR CELDAS VECINAS AUTOMÁTICAMENTE
// ===============================================

function revelarVecinos(i, j) {
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      // Nos aseguramos de no salir del tablero
      if (x >= 0 && x < filas && y >= 0 && y < columnas) {
        const vecino = tablero[x][y];

        // Si aún no se ha revelado y no es mina
        if (!vecino.revelada && !vecino.mina) {
          vecino.revelada = true;
          vecino.celda.classList.add("revelada");

          const minas = contarMinasCercanas(x, y);

          if (minas > 0) {
            vecino.celda.textContent = minas;
          } else {
            // Si tampoco hay minas cerca, seguimos revelando más vecinos
            revelarVecinos(x, y);
          }
        }
      }
    }
  }
}

// ===============================================
// FUNCIÓN: TERMINAR EL JUEGO (por perder)
// ===============================================

function terminarJuego(mensaje) {
  juegoTerminado = true; // Ya no se puede seguir jugando
  document.getElementById("mensaje").textContent = mensaje;
}

// ===============================================
// FUNCIÓN: REINICIAR EL JUEGO COMPLETAMENTE
// ===============================================

function reiniciarJuego() {
  // Limpiamos el mensaje y reiniciamos el tablero
  document.getElementById("mensaje").textContent = "";
  crearTablero();
}

// ===============================================
// 🚀 INICIO AUTOMÁTICO DEL JUEGO AL CARGAR PÁGINA
// ===============================================

window.onload = crearTablero;
