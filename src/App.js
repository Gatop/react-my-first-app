import React, { Component } from 'react';
import './App.css';

/* Componentes hijos */
import Image from './components/Image';
import Input from './components/Input';

/*Componente principal*/
class App extends Component {
  // Render
  render() {
    return(
      <div>
        <Image id={1} src="https://www.feelcats.com/blog/wp-content/uploads/2015/11/maine-coon-gato.jpg"/>
        <Input id={1} type="text"/>
      </div>
    );
  }
}

export default App;
