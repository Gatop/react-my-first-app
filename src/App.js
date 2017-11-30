import React, {Component} from 'react';
import './App.css';

/* Componentes hijos */
import Image from './components/Image';
import Input from './components/Input';

/* Componente principal */
class App extends Component {

    // Contructor method
    constructor(){
        super();

        // Variables de estado
        this.state = {
            legend:       0,
            inputValue:   "",
            inputLegend:  "",
            selectValue:  "",
            selectLegend: ""
        }

        // metodos bind
        this.onClickButton  = this.onClickButton.bind(this);
        this.onChangeInput  = this.onChangeInput.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
    }

    // Metodo para cambiar el estado
    onClickButton(event){
        let legend = "";
        if (event.target.id === "boton1") {
            legend = "Boton 1 Click";
        } else if (event.target.id === "boton2") {
            legend = "Boton 2 Click";
        } else if (event.target.id === "boton3") {
            legend = "Boton 3 Click";
        }
        this.setState({ legend: legend});
    }

    // Metodo para el input
    onChangeInput(e){
        this.setState({
            inputValue: e.target.value,
            inputLegend: e.target.value
        });
    }

    // Metodo para el select
    onChangeSelect(e){
        this.setState({
            selectValue: e.target.value,
            selectLegend: "Pais seleccionado: ".concat(e.target.value)
        });
    }

    // Render
    render() {
        return (
            <div>
                <div className="App-block">
                    <button id="boton1" onClick={this.onClickButton}>Boton 1</button>
                    <button id="boton2" onClick={this.onClickButton}>Boton 2</button>
                    <button id="boton3" onClick={this.onClickButton}>Boton 3</button>
                    <label className="App-legend">{this.state.legend}</label>
                </div>
                <div className="App-block">
                    <input
                        type="text"
                        id="input1"
                        value={this.state.inputValue}
                        onChange={this.onChangeInput}>
                    </input>
                    <label className="App-legend">{this.state.inputLegend}</label>
                </div>
                <div className="App-block">
                    <select onChange={this.onChangeSelect} value={this.state.selectValue}>
                        <option value="Mexico">Mexico</option>
                        <option value="USA">USA</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                    <label className="App-legend">{this.state.selectLegend}</label>
                </div>
            </div>
        );
    }
}

// Export del componente principal de la aplicacion
export default App;
