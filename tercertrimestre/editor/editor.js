// Inicializa el editor TinyMCE en el elemento con id 'editorTexto'
tinymce.init({
    selector: '#editorTexto',  // El selector indica sobre qué elemento aplicar el editor (en este caso, el <textarea>)
    language: 'es',            // Establece el idioma del editor a español
    height: 300,               // Altura del área de edición en píxeles
    menubar: false             // Oculta la barra de menús superior (Archivo, Editar, Ver, etc.)
});

// Función que transfiere el contenido del editor TinyMCE a un <div> visible
function pasarADiv() {
    const contenido = tinymce.get("editorTexto").getContent();  // Obtiene el contenido HTML del editor
    document.getElementById("salida").innerHTML = contenido;    // Inserta ese contenido en el div con id "salida"
}

// Función que genera un PDF a partir del contenido HTML dentro del div "salida"
function generarPDF() {
    const elemento = document.getElementById("salida");         // Selecciona el div del cual se extraerá el contenido
    html2pdf().from(elemento).save("documento.pdf");            // Usa la librería html2pdf para generar y descargar el PDF
}
