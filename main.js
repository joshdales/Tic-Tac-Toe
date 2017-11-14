document.addEventListener('DOMContentLoaded', function() {
  var turn = 1;

  var board = document.querySelector('.board');
  var squares = document.querySelectorAll('.square');

  var winner = document.createElement('h1');
  document.querySelector('body').appendChild(winner);

  var position11 = document.querySelector('.position1-1');
  var position12 = document.querySelector('.position1-2');
  var position13 = document.querySelector('.position1-3');
  var position21 = document.querySelector('.position2-1');
  var position22 = document.querySelector('.position2-2');
  var position23 = document.querySelector('.position2-3');
  var position31 = document.querySelector('.position3-1');
  var position32 = document.querySelector('.position3-2');
  var position33 = document.querySelector('.position3-3');

  var row1 = [position11, position12, position13];
  var row2 = [position21, position22, position23];
  var row3 = [position31, position32, position33];

  var col1 = [position11, position21, position31];
  var col2 = [position12, position22, position32];
  var col3 = [position13, position23, position33];

  var dia1 = [position11, position22, position33];
  var dia2 = [position13, position22, position31];


  var winStates = [row1, row2, row3, col1, col2, col3, dia1, dia2];

  function checkTurn() {
    if (turn % 2 === 0) {
      return 'O';
    } else {
      return 'X';
    }
  };

  function makeMark(e) {
    if (e.target.innerText != "" ) return
      e.target.innerText = checkTurn();
      playerWins(checkTurn());
      turn ++;
  };

  board.addEventListener('click', makeMark)

  var allSquares = Array.from(squares).map(square => square.length === 1);
  function checkIfTrue(square) {
    square === true
  }

  function playerWins(player) {
    winStates.forEach( function(winstate)  {
      if (winstate[0].innerText === player &&
          winstate[1].innerText === player &&
          winstate[2].innerText === player) {

        board.removeEventListener('click', makeMark);
        winner.innerText = 'Player ' + player + ' Wins!!!';

      } if (allSquares.every(checkIfTrue)) {
        winner.innerText = "Draw!"
      }
    })
  }


})
