import React, {Component} from 'react';
import './App.css';

/* Componentes hijos */
import Image from './components/Image';
import Input from './components/Input';

/* Componente principal */
class App extends Component {
    constructor(){
        super();

        this.state = {
            inputType: 'text'
        };

        this.onClickChild = this.onClickChild.bind(this);
    }

    // Metodo pasado para el hijo
    onClickChild(e) {
        this.setState({ inputType: 'number' });
    }

    // Render
    render() {
        return (<div>
            <Image id={1} src="" onClickChild={this.onClickChild}/>
            <Input id={2} type={this.state.inputType}/>
        </div>);
    }
}

// Export del componente principal de la aplicacion
export default App;
