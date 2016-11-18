import React, { Component } from 'react';
import './Square.css';

import Upbutton from './Upbutton';

class Square extends Component {
  constructor(props) {
    super(props);
      this._up=this._up.bind(this);
      this._down=this._down.bind(this);
      this.state={
        margin: this.props.startMargin
      }
  }

  _up(e){
    var curMarg=this.state.margin;
    curMarg--
    this.setState({
      margin: curMarg
    });

    console.log("Up!")
  }

  _down(e){
    var curMarg=this.state.margin;
    curMarg++
    this.setState({
      margin: curMarg
    });

    console.log("Down!")
  }

  render() {
    const divStyle = {
      marginTop: `${this.state.margin}vw`
    }
    return (
      <div className="Square">
        
        <h3>Click on the square to move down<br/><br/>Click the button to move up</h3>
        
        <Upbutton
          _up={this._up}
        />
        
        <div className="basic"
          style={divStyle}
          onClick={this._down}
        >
        </div>

      </div>
    );
  }
}

export default Square;