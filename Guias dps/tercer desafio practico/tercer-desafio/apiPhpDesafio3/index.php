<?php

include 'bd/BD.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="select * from ganancia where id=".$_GET['id'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from ganancia";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $nombre=$_POST['nombre'];
    $monto=$_POST['monto'];
    $empleados=$_POST['empleados'];
    $query="insert into ganancia(nombre, monto, empleados) values ('$nombre', $monto, '$empleados')";
    $queryAutoIncrement="select MAX(id) as id from ganancia";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $nombre=$_POST['nombre'];
    $monto=$_POST['monto'];
    $empleados=$_POST['empleados'];
    $query="UPDATE ganancia SET nombre='$nombre', monto=$monto, empleados='$empleados' WHERE id='$id'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $query="DELETE FROM ganancia WHERE id='$id'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>