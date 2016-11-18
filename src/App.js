import React, { Component } from 'react';
import './App.css';

import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square startMargin={10} />
      </div>
    );
  }
}

export default App;
