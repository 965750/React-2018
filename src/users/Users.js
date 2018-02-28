import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render(){
        return (
            <div>
               <h1>{this.props.title}</h1>
                <User age="20">John</User>
                <User>Jill</User>
                <User age="40">Jake</User>
        </div>
        )
    }
}

export default Users;