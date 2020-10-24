import React, { Component } from 'react';

class Users extends Component {
    
    handleUpdate = () =>{
        this.props.updateUser(this.indexNum, this.name.value, this.age.value);
    }

    render() { 
        const {allUsers, pressEditBtn, pressDelete} = this.props;
        const usersList = allUsers.map((user, index)=>{
            return user.isEditing === true ? (
                <tr key={index}>
                    <td>
                        <input type="text" ref={(val)=>{this.name = val}} required defaultValue={user.name}/>
                    </td>
                    <td>
                        <input type="number" ref={(val)=>{this.age = val}} required defaultValue={user.age}/>
                    </td>
                    <td>
                        <input type="button" value="Update" onClick={this.handleUpdate} ref={()=>{this.indexNum = index}} className="btn btn-success" />
                    </td>                    
                </tr>
            ) : (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td><button className="btn btn-info" onClick={()=>pressEditBtn(index)}>Editar</button> | 
                        <button className="btn btn-danger" onClick={()=>pressDelete(index)}>Eliminar</button>
                    </td>
                </tr>
            );
        });

        return (
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}
 
export default Users;