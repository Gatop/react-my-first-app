import React, {Component} from 'react';
import './App.css';

/* Componentes hijos */
import Image from './components/Image';
import Input from './components/Input';

/* Componente principal */
class App extends Component {
    /* Metodo will mount */
    componentWillMount(){
        console.log("Hola estoy ejecutando el metodo will mount");
    }

    /* Metodo did mount */
    componentDidMount(){
        console.log("Hola estoy ejecutando el metodo did mount");
    }

    /* Metodo will unmount */
    componentWillUnmount(){
        console.log("Hola estoy ejecutando el metodo will unmount");
    }

    /* Metodo will unmount */
    componentWillReceiveProps(){
        console.log("Hola estoy ejecutando el metodo will Recieve Props");
    }

    // Render
    render() {
        return (<div>
            <Image id={1} src=""/>
            <Input id={1} type="text"/>
        </div>);
    }
}

// Export del componente principal de la aplicacion
export default App;
