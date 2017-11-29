import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componente Input
class Input extends Component {
  render() {
    return(
      <div>
        <input
          type={this.props.type}
           id={this.props.id}
         />
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

// Export del componente
export default Input;
