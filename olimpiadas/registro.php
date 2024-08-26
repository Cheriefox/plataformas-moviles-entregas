<?php

require 'config/database.php';
require 'config/config.php';
require 'clases/clienteFunciones.php';
$db = new Database();
$con = $db->conectar();

$errors = [];

if(!empty($_POST)){

    $nombres = trim($_POST['nombres']);
    $apellidos = trim($_POST['apellidos']);
    $email = trim($_POST['email']);
    $telefono = trim($_POST['telefono']);
    $dni = trim($_POST['dni']);
    $usuario = trim($_POST['usuario']);
    $password = trim($_POST['password']);
    $repassword = trim($_POST['repassword']);

    if ($password !== $repassword) {
        $errors[] = "Las contraseñas no coinciden.";
    }

    $id = registraCliente([$nombres, $apellidos, $email, $telefono, $dni], $con);

    if($id > 0){
        $pass_hash = password_hash($password, PASSWORD_DEFAULT);
        $token = generarToken();
        $password_request = ''; // Valor predeterminado para password_request
        if(!registraUsuario([$usuario, $pass_hash, $token, $id, $password_request], $con)) {
            $errors[] = "error al registrar usuario";
        }        
    } else {
        $errors[] = "error al registrar";
    }

    if(count($errors) == 0){
        echo "Registro exitoso";
    } else {
        print_r($errors);
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Online</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossorigin="anonymous">
    <link href="estilos.css" rel="stylesheet">
</head>
<body>
    
<header data-bs-theme="dark">
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a href="#" class="navbar-brand">
        <strong>Tienda Online</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarHeader">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#" class="nav-link active">Catálogo</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contacto</a>
          </li>
        </ul>
        <a href="carrito.php" class="btn btn-primary">Carrito</a>    
      </div>
    </div>
  </div>
</header>

<main>
  <div class="container">
    <h2>Datos del cliente</h2>

    <form class="row g-3" action="registro.php" method="post" autocomplete="off">
        <div class="col-md-6">
            <label for="nombres"><span class="text-danger">*</span>Nombres</label>
            <input type="text" name="nombres" id="nombres" class="form-control" required>
        </div>

        <div class="col-md-6">
            <label for="apellidos"><span class="text-danger">*</span>Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" class="form-control" required>
        </div>

        <div class="col-md-6">
            <label for="email"><span class="text-danger">*</span>Email/Correo Electronico</label>
            <input type="email" name="email" id="email" class="form-control" required>
        </div>

        <div class="col-md-6">
            <label for="telefono"><span class="text-danger">*</span>Telefono</label>
            <input type="tel" name="telefono" id="telefono" class="form-control" required>
        </div>
        
        <div class="col-md-6">
            <label for="dni"><span class="text-danger">*</span>DNI</label>
            <input type="text" name="dni" id="dni" class="form-control" required>
        </div>

        <div class="col-md-6">
            <label for="usuario"><span class="text-danger">*</span>Usuario</label>
            <input type="text" name="usuario" id="usuario" class="form-control" required>
        </div>

        <div class="col-md-6">
            <label for="password"><span class="text-danger">*</span>Contraseña</label>
            <input type="password" name="password" id="password" class="form-control" required>
        </div>

        <div class="col-md-6">
            <label for="repassword"><span class="text-danger">*</span>Repetir contraseña</label>
            <input type="password" name="repassword" id="repassword" class="form-control" required>
        </div>

        <i><b>Nota: </b>Los campos con asterico son obligatorios</i>

        <div class="col-12">
            <button type="submit" class="btn btn-primary">Registrar</button>
        </div>

    </form>
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossorigin="anonymous"></script>
</body>
</html>
