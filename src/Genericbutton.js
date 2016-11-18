import React, { Component } from 'react';
import './Genericbutton.css';

class Genericbutton extends Component {
  render() {
    return (
      <div className="Genericbutton">
        
        <button
          type='button'
          onClick={this.props.click}
        >{this.props.purpose}</button>

      </div>
    );
  }
}

export default Genericbutton;