import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class AppF extends Component {

    // Datos ficticios predeterminados
    state = {
        users: [
            { name: "Pablo Lopez", age: 18, isEditing: false },
            { name: "Maria Campos", age: 22, isEditing: false },
            { name: "Julio Delgado", age: 21, isEditing: false }          
        ]
    }

    // (newUser) se recibe de AddUser.js
    addUser = (newUser) => {
        let users = [...this.state.users, newUser];
        this.setState({users});
    }

    // cuando se presiona el botón editar, se recibe de Users.js
    pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
    }

    // (i, nombre, edad) se recibe de Users.js
    updateUser = (i, name, age) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].age = age;
        users[i].isEditing = false;

        this.setState({
            users
        });

    }
    // (i) se recibe de Users.js
    pressDelete = (i) => {
        let users = this.state.users.filter((u, index) => {
            return index !== i;
        });
        this.setState({
            users
        });
    }

    render() {
        return (
            <div className="container">
                <h3>CRUD Simple Con React</h3>
                <AddUser addUser={this.addUser} />
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <br></br>
            </div>
        );
    }
}

export default AppF;