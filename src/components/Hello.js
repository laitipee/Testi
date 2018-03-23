import React, { Component } from 'react';


class Hello extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Hello;