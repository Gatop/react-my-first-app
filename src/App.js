import React, {Component} from 'react';
import './App.css';
import PubSub from 'pubsub-js';

/* Componentes hijos */
import Form from './components/Form';

/* Componente principal */
class App extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        PubSub.publish('MY_EVENT', 'hola');
    }

    // Render
    render() {
        return (
            <div>
                <h4>Componente 1</h4>
                <button onClick={this.onClick}>Lanzar evento</button>
                <Form />
            </div>
        );
    }
}

// Export del componente principal de la aplicacion
export default App;
