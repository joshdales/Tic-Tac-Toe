document.addEventListener('DOMContentLoaded', function() {
  var board = document.querySelector('.board');
  var squares = document.querySelectorAll('.square');
  var turn = 1;

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

  var winstates = [row1]



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
    turn ++;
    e.target.removeEventListener('click', makeMark);
};

board.addEventListener('click', makeMark)

function playerwins(player) {
  winstates.forEach( function(winstate) {
    if (winstate[0].innerText === player && winstate[1].innerText === player && winstate[2].innerText === player){

    }
  })
}

})
