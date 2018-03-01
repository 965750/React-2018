import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './users/Users';
import './App.css';
import Parent from './users/parent';

function SayHello(){
    return <h1>hello!!</h1>
}

class App extends Component {
  state = {
     title: "placeholder title" 
  }
  changeTheWorld = (newTitle) => {
      this.setState({title:newTitle});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to App</h1>
        </header>
        <SayHello/>
            <Parent title={this.state.title} doWhatever={this.changeTheWorld.bind(this, 'new World')} changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} keepTheWorldEvent={this.changeTheWorld.bind(this, 'same world')}/>
            <Users title="Users List"/>
      </div>
    );
  }
}

export default App;
