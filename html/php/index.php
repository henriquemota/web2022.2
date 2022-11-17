<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primeiro exemplo PHP</title>
</head>
<body>
  <h1>Calculadora</h1>
  <form action="" method="get">
    <label for="valor1">Valor1</label>
    <input type="number" name="valor1" id="valor1" />
    <label for="valor2">Valor2</label>
    <input type="number" name="valor2" id="valor2" />
    <input type="submit" value="somar">
  </form>
  <?php 
    $valor1 = $_GET['valor1'];
    $valor2 = $_GET['valor2'];
    $soma = $valor1 + $valor2;
    echo ('a soma de ' . $valor1 . ' e ' . $valor2 . ' é ' . $soma);
  ?>
</body>
</html>