<?php 
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");
$con=retornarConexion();

$registros=mysqli_query($con,"select reparaciones.id,reparaciones.vehiculo,reparaciones.costo,reparaciones.cliente_id,clientes.apellidos, clientes.nombres,clientes.dui from clientes inner join reparaciones  ON clientes.id = reparaciones.cliente_id");
$vec=[];  gistr
if($registros!=FALSE){
    while ($reg=mysqli_fetch_array($reos))  
    {
        $vec[]=$reg;
    }
    $cad=json_encode($vec);
    echo $cad;
    //header('Content-Type: application/json');
}else{
    $cad=json_encode(null);
    echo $cad;
}

?>