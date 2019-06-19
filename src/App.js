import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      // <div id="board">
      //   <div className="cell"></div>
      //   <div id="announce-winner"></div>
      // </div>
      <div id="board">
        <div className="row">
          <div data-cell="0"></div>
          <div data-cell="1"></div>
          <div data-cell="2"></div>
        </div>
        <div className="row">
          <div data-cell="3"></div>
          <div data-cell="4"></div>
          <div data-cell="5"></div>
        </div>
        <div className="row">
          <div data-cell="6"></div>
          <div data-cell="7"></div>
          <div data-cell="8"></div>
        </div>
        <button id="clear">Clear Board</button>

    </div>
    );
  }
}
export default App;
