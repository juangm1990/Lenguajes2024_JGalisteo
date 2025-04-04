let resultado = document.getElementById("resultado");

function agregarNumero(num) {
  resultado.value += num;
}

function limpiar() {
  resultado.value = "";
}

function borrar() {
  resultado.value = resultado.value.slice(0, -1);
}

function operar(op) {
  let valor;
  try {
    valor = eval(resultado.value);
  } catch (error) {
    resultado.value = "Error";
    return;
  }

  switch (op) {
    case "raiz":
      try {
        resultado.value = Math.sqrt(valor);
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    case "cuadrado":
      try {
        resultado.value = Math.pow(valor, 2);
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    case "inverso":
      try {
        resultado.value = 1 / valor;
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    case "bin":
      try {
        resultado.value = valor.toString(2);
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    case "hex":
      try {
        resultado.value = valor.toString(16).toUpperCase();
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    default:
      try {
        resultado.value += op;
      } catch (error) {
        resultado.value = "Error";
      }
      break;
  }
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Error";
  }
}

