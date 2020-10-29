<?php 
  
  try{
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $json = file_get_contents('php://input');
 
    $params = json_decode($json);
  
    require("conexion.php");
    $con=retornarConexion();
      
    
    $respuesta=mysqli_query($con,"insert into reparaciones(vehiculo,costo,cliente_id) values
                      ('$params->vehiculo',$params->costo,$params->cliente_id)");

  
    class Result {}
    
    
    if($respuesta == TRUE){
      $response = new Result();
      $response->resultado = 'OK';
      $response->mensaje = 'Reparacion registrada!';
    }else{
      $response = new Result();
      $response->resultado = 'NO';
      $response->mensaje = $params;
    }
  
    header('Content-Type: application/json');
    echo json_encode($response);
  }catch(Exception $e){
    header('Content-Type: application/json');
    echo $e->getMessage();
  }
  
  
    
?>