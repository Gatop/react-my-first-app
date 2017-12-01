import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Children extends Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.inputValue
        };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.inputValue != this.state.inputValue) {
            this.setState({
                inputValue: nextProps.inputValue
            });
        }
    }

    // Metodo activado por el parent
    escribeHola(){
        this.setState({ inputValue: "Hola, accionado desde el padre"});
    }

    // Render method
    render() {
        return(
            <div>
                <input
                    value={ this.state.inputValue }
                    placeholder="input children"
                    onChange={(e) => this.setState({ inputValue: e.target.value })}/>
            </div>
        );
    }
}

Children.propTypes = {
    inputValue: PropTypes.string
}

export default Children;
