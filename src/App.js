import React, {Component} from 'react';
import './App.css';

/* Componentes hijos */
import Children from './components/Children';

/* Componente principal */
class App extends Component {
    constructor() {
        super();
        this.state ={
            inputChildvalue: '10'
        }
        this.comunicaHijo = this.comunicaHijo.bind(this);
    }

    // Action para comunicar el hijo
    comunicaHijo(e) {
        //this.refs.children.escribeHola();
        this.setState({
            inputChildvalue: '20'
        });
    }

    // Render
    render() {
        return (
            <div>
                <button onClick={this.comunicaHijo}>Comunica al hijo</button>
                <Children
                    ref="children"
                    inputValue={this.state.inputChildvalue}/>
            </div>
        );
    }
}

// Export del componente principal de la aplicacion
export default App;
