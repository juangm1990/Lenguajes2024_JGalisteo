<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $sitioweb = $_POST['sitioweb'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Ejecutar en XAMPP: Coloca todos los archivos en la carpeta htdocs de XAMPP 
    // y abrir el navegador para acceder a http://localhost/nombre_de_tu_carpeta/formulario.html.
    echo "Gracias, $nombre. Hemos recibido tu mensaje.";
}
?>



