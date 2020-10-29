//Importando componente de React
import React from 'react'
import { useState } from 'react'
//importando componente Todo
import Todo from './Todo'

//Nombrando componente
const Form = () => {
    //inicializa un nuevo estado para agregar una nueva tarea
    const [todo, setTodo] = useState();
    //declarando estado dentro del componente con useState para declarar una lista de tareas
    const [todos, setTodos] = useState([
        //index:value
        { todo: 'todo1' },
        { todo: 'todo2' },
        { todo: 'todo3' },
    ])

    //capturando evento change en el input y obteniendo sus parametros..
    //por medio de la propiedad target
    const handleChange = e => setTodo({ [e.target.name]: e.target.value })
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice =>{
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        //preventDefault evita la recarga de la pagina despues del submit
        <>            
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name="todo" onChange={handleChange} />
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                /*accediendo al arreglo "todos" con la propiedad map, value son los elementos del array
                 e index su indice en el arreglo, luego, se hace un llamado al componente "Todo"
                 y su atributo "todo" al cual se le asigna el value del elemento "todo" en el arreglo
                 de "todos"*/
                todos.map((value, index) => (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />))
            }
        </>
    )
}
//directiva para utilizar componente <Form/>
export default Form