<?php
header("Access-Control-Allow-Origin: *");

$frutas = [
    'maça',
    'banana',
    'abacaxi',
    'melão',
    'mamão',
];

$pessoas = [
  array("nome"=>'joao', "idade"=>35,),
  array("nome"=>'maria', "idade"=>30,),
  array("nome"=>'pedro', "idade"=>22,),
];

// echo json_encode($frutas);
echo json_encode($pessoas);
?>