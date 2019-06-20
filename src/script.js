import React, { Component } from 'react';

(document).ready(function () {
  const turn = 'X';
  $('[data-cell]').on('click', function () {
    
    if ($(this).text() === ''){
      $(this).text(turn);
      checkForWin();
      if(turn === 'O'){
        turn = 'X'; 
      } else {
      turn = 'O';
      }
    }
  });



// building the functionality of the game 

// function playGame() {
//     let turn = 'X';
//     document.getElementById('[data-cell]').onclick(function() {
//         if this.text()
//     }
//     })

// }


function checkForWin(){
  if(('[data-cell="0"]').text() === turn && ('[data-cell="1"]').text() === turn && ('[data-cell="2"]').text() === turn) {
    ('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="3"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="5"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="6"]').text() === turn && $('[data-cell="7"]').text() === turn && $('[data-cell="8"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="0"]').text() === turn && $('[data-cell="3"]').text() === turn && $('[data-cell="6"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="1"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="7"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="2"]').text() === turn && $('[data-cell="5"]').text() === turn && $('[data-cell="8"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="0"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="8"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  } else if ($('[data-cell="2"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="6"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  }
}

checkForWin;

// })

class Board extends Component {
    render(){
        return (
            <div>
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
      </div>
        )
    }
}

module.exports = Board