<?php
header("Access-Control-Allow-Origin: *");
include_once('frutas.php');
include_once('pessoas.php');

$tipo = $_GET['tipo'];

switch ($tipo) {
  case 'pessoas':
    echo json_encode($pessoas);
    break;
  case 'frutas':
    echo json_encode($frutas);
    break;
  default:
    echo json_encode([]);
    break;
}
?>