<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select * from clientes where id=$_GET[codigo]");
    
  if ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
    $cad=json_encode($vec);
    echo $cad;
  }else{
    $cad=json_encode(null);
    echo $cad;
  }
  
  
  //header('Content-Type: application/json');
?>