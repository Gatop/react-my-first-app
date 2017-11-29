import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Componente Image
class Image extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }

    // Metodo que accede al metodo del parent
    onClick(e){
        this.props.onClickChild();
    }

    render() {
        return (
        <div onClick={this.onClick}>
            <p>{"Id: " + this.props.id}</p>
            <img src={this.props.src}/>
        </div>);
    }
}

// Propiedades del componente
Image.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    onClickChild: PropTypes.func.isRequired
};

// Export del componente
export default Image;
