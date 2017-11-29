import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {
      text: "Hola Mundo",
      text2: "Estoy aprendiendo react.js"
    };

    this.onClickTitle = this.onClickTitle.bind(this);
  }

  //
  onClickTitle(e){
    this.setState({ text2:"Ups, el estado ha sido actualizado" });
  }

  // Metodo Render
  render() {
    return(
      <div>
        <h2 onClick={this.onClickTitle}> { this.state.text } </h2>
        <h4> { this.state.text2 } </h4>
      </div>
    );
  }
}

export default App;
