import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {name:'John', age: 20},
            {name:'Aohn', age: 30},
            {name:'Vohn', age: 40},
        ],
        title: "Users List 2",
        name: 'afen'
    };
    
    makeMeYounger = () => {
        
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -=10;
            return tempUser;
        });
        this.setState({
            newState
        });
    }
    changeName = (newName) => {
        this.setState({
            name: newName
        })
    }
    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        return (
            <div>
               <h1>{this.props.title}</h1>
                <User age="20">John</User>
                <User>Jill</User>
                <User age="40">Jake</User>
                <br/>
                <h1>{this.state.title}</h1>
                <br/>
                <button onClick={this.makeMeYounger}>Make Us 10 years younger</button>
                <br/><br/>
                <button onClick={() => this.changeName('Awesome lel afen :c')}>Change state using anon Function</button>
                <button onClick={this.changeName.bind(this, 'awesom lel 22 :)')}>change 2</button>
                <br/>
                <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
                <br/>
                <div>{this.state.name}</div><br/>
                <br/><br/><br/>
                {
                this.state.users.map((user)=>{
            return <User age={user.age}>{user.name}</User>
        })
            }
        </div>
        )
    }
}

export default Users;