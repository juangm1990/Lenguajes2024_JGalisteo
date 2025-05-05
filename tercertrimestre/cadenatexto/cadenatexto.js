// Cuando se hace clic en el botón con id "procesarBtn", se ejecuta esta función
document.getElementById("procesarBtn").addEventListener("click", () => {

    // Obtiene el texto ingresado por el usuario en el input con id "entradaTexto"
    const texto = document.getElementById("entradaTexto").value;

    // Elimina espacios extras y divide el texto en palabras usando cualquier espacio como separador
    const palabras = texto.trim().split(/\s+/);

    // Capitaliza cada palabra (primera letra en mayúscula, el resto en minúscula)
    const capitalizado = texto
        .toLowerCase()                                // Convierte todo a minúsculas
        .split(" ")                                   // Divide en palabras
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)) // Capitaliza la primera letra de cada palabra
        .join(" ");                                   // Une las palabras nuevamente

    // 🔽 A continuación se rellenan todos los campos de salida:

    document.getElementById("original").textContent = texto;              // Texto original
    document.getElementById("longitud").textContent = texto.length;      // Longitud total
    document.getElementById("palabras").textContent = palabras.length;   // Número de palabras
    document.getElementById("mayusculas").textContent = texto.toUpperCase(); // Todo en mayúsculas
    document.getElementById("minusculas").textContent = texto.toLowerCase(); // Todo en minúsculas
    document.getElementById("capitalizado").textContent = capitalizado;  // Capitalizado

    document.getElementById("primero").textContent = texto.charAt(0);    // Primer carácter
    document.getElementById("ultimo").textContent = texto.charAt(texto.length - 1); // Último carácter

    document.getElementById("concat").textContent = texto + " JS";       // Concatenado con " JS"
    document.getElementById("contieneA").textContent = texto.includes("a") ? "Sí" : "No"; // Contiene letra "a"
    document.getElementById("reemplazo").textContent = texto.replaceAll("a", "@");       // Reemplaza "a" por "@"
    document.getElementById("subcadena").textContent = texto.slice(0, 6); // Subcadena de los primeros 6 caracteres
});
