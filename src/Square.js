import React, { Component } from 'react';
import './Square.css';

import Genericbutton from './Genericbutton';

class Square extends Component {
  constructor(props) {
    super(props);
      this._changeColor=this._changeColor.bind(this);
      this._down=this._down.bind(this);
      this._up=this._up.bind(this);
      document.addEventListener("keydown", (e)=>{
        if (e.keyCode===38){
          this._up();
        }
      })
      this.state={
        margin: this.props.startMargin,
        color: this.props.startColor
      }
  }

  componentWillMount(){
    document.addEventListener("keydown", (e)=>{
      if (e.keyCode === 40){ //down arrow
        this._down();
      }
        //console.log(e.keyCode)
    });

  }

  _changeColor(e){
    var curColor=this.state.color;
    var colors = ['#000000', '#ff0000', '#800000', '#ffff00', '#00ff00', '#008000', '#008080',];
    curColor = colors[Math.floor(Math.random()*colors.length)];
    this.setState({
      color: curColor
    });
  }

  _down(e){
    var curMarg=this.state.margin;
    curMarg++
    this.setState({
      margin: curMarg
    });

    console.log("Down!")
  }

  _up(e){
    var curMarg=this.state.margin;
    curMarg--
    this.setState({
      margin: curMarg
    });

    console.log("Up!")
  }

  render() {
    const divStyle = {
      marginTop: `${this.state.margin}vw`,
      backgroundColor: `${this.state.color}`
    }
    return (
      <div className="Square" >
        
        <h3>Click on the square to move down<br/><br/>Click the button to move up</h3><h4>(Up &amp; Down buttons also work)</h4>
        
        <Genericbutton
          purpose='Up'
          click={this._up}
        />

        <Genericbutton
          purpose='Change color'
          click={this._changeColor}
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