import React, { Component } from 'react';
import Square from './square.js'

class Board extends Component {
  render() {
    return (
    <div className="board">
    <div className="row1">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="row2">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="row3">
        <Square />
        <Square />
        <Square />
    </div>
    </div>
    );
  }
}

export default Board;
