import React, { Component } from 'react';
import './Upbutton.css';

class Upbutton extends Component {
  render() {
    return (
      <div className="Upbutton">
        
        <button
          type='button'
          onClick={this.props._up}
        >Up</button>

      </div>
    );
  }
}

export default Upbutton;