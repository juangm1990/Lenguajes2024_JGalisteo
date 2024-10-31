<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $color = htmlspecialchars($_POST['color']);
    $sexo = htmlspecialchars($_POST['sexo']);
    $frutas = isset($_POST['frutas']) ? $_POST['frutas'] : [];
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    echo "<h1>Datos Recibidos</h1>";
    echo "<p>Nombre: $nombre</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Teléfono: $telefono</p>";
    echo "<p>Color favorito: $color</p>";
    echo "<p>Sexo: $sexo</p>";
    echo "<p>Frutas que te gustan: " . implode(", ", $frutas) . "</p>";
    echo "<p>Mensaje: $mensaje</p>";


    // Ejecutar en XAMPP: Coloca todos los archivos en la carpeta htdocs de XAMPP 
    // y abrir el navegador para acceder a http://localhost/nombre_de_tu_carpeta/formulario.html.
    echo "Gracias, $nombre. Hemos recibido tu mensaje.";
}
?>



