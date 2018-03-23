import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import './App.css';
import './components/hello.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    }
  }
  
  clickHandler = () => {
    this.setState({
      text: 'aasdas' 
    })
  }
 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello text={this.state.text}/>
        <button className="textButton" onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}


export default App;
