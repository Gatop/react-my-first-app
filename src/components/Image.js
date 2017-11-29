import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componente Image
class Image extends Component {
  render() {
    return(
      <div>
        <p>{"Id: " + this.props.id}</p>
        <img src={this.props.src}/>
      </div>
    );
  }
}

// Propiedades del componente
Image.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

// Export del componente
export default Image;
