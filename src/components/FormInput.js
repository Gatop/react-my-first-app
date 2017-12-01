import React, {Component} from 'react';
import PubSub from 'pubsub-js';

/* Componente Form */
class FormInput extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    // Suscribiendose al evento apenas se crea el componente
    componentWillMount() {
        this.myEvent = PubSub.subscribe('MY_EVENT', (topic, value) => {
            console.log(topic, value);
            this.setState({inputValue: value});
        });
    }

    // Si estoy suscrito a un evento tengo que desubscribirme
    componentWillUnmount() {
        PubSub.unsubscribe(this.myEvent);
    }

    // Render
    render() {
        return (
            <div>
                <input
                    value = {this.state.inputValue}
                    onChange = {(e) => {this.setState({inputValue: e.target.value})}}/>
            </div>
        );
    }
}

// Export del componente principal de la aplicacion
export default FormInput;
