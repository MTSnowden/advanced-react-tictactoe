import React, { Component } from "react";
import Board from "./script"
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create the state of 
    };
  }
  render() {
    return (
      // <div id="board">
      //   <div className="cell"></div>
      //   <div id="announce-winner"></div>
      // </div>
      
      <div className='container'>
        <Board />
      </div>
    );
  }
}
export default App;

// ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
