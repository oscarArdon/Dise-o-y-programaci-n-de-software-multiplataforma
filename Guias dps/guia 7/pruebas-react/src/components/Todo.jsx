//Importando componente de React
import React from 'react'

//Nombre del componente y declarando atributo(props) "todo, index, deleteTodo"
const Todo = ({todo, index, deleteTodo})=>{
    //retornando vista
    return (
        <> 
            <div className="list">
                <h3>{todo}</h3> <button className="btn-delete" onClick={()=>deleteTodo(index)}>X</button>
            </div>
        </>        
    );
}
//directiva para utilizar el componente <Todo/>
export default Todo