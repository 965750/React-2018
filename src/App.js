import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './users/Users';
import './App.css';

function SayHello(){
    return <h1>hello</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to App</h1>
        </header>
        <p className="App-intro">
            <SayHello></SayHello>
            <Users title="Users List"/>
        </p>
      </div>
    );
  }
}

export default App;
