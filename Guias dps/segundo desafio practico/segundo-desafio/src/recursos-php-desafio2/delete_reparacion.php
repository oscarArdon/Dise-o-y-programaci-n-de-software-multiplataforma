<?php 
try{
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    require("conexion.php");
    $con = retornarConexion();
    
    $respuesta=mysqli_query($con, "delete from reparaciones where id=$_GET[codigo]");
    
    class Result { }
    
    
    if($respuesta==TRUE){
        $response = new Result();
        $response -> resultado = 'OK';
        $response -> mensaje = 'Reparacion eliminada!';
    }else{
        $response = new Result();
        $response -> resultado = 'NO';
        $response -> mensaje = 'Error, reparacion no eliminada!';
    }
    
    header('Content-Type: application/json');
    echo json_encode($response);  
    
}catch(Exception $e){
    header('Content-Type: application/json');
    echo $e->getMessage();
}


?>