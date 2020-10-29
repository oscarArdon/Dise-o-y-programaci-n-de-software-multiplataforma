<?php 
try{
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  $respuesta=mysqli_query($con,"update clientes set nombres='$params->nombres',
                                          apellidos='$params->apellidos',
                                          dui='$params->dui'
                                          where id=$params->id");
    
  class Result {}
  
  
  if($respuesta==TRUE){
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Cliente modificado!';
  }else{
    $response = new Result();
    $response->resultado = 'NO';
    $response->mensaje = 'Error, cliente no modificado!';
  }
  
  header('Content-Type: application/json');
  echo json_encode($response);    
}catch(Exception $e){
  header('Content-Type: application/json');
  echo $e->getMessage();
}
?>