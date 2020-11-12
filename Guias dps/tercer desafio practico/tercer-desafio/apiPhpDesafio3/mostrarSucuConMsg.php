<?php
    include 'bd/BD.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['id'])){
            $query = "SELECT id, nombre, monto, empleados, CASE WHEN monto >= 30000 THEN 'Excelente trabajo' WHEN monto < 30000 THEN 'Buen trabajo' END AS coment FROM ganancia WHERE monto >= 30000";        
            $resultado=metodoGet($query);
            echo json_encode($resultado->fetchAll());
        }else{            
            $query = "SELECT id, nombre, monto, empleados, CASE WHEN monto >= 30000 THEN 'Excelente trabajo' WHEN monto < 30000 THEN 'Buen trabajo' END AS coment FROM ganancia WHERE monto BETWEEN 1000 and 29999";
            $resultado=metodoGet($query);
            echo json_encode($resultado->fetchAll()); 
        }
        
        exit();
    }
    header("HTTP/1.1 400 Bad Request");
?>