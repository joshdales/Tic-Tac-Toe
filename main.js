document.addEventListener('DOMContentLoaded', function() {

var board = document.querySelector('.board');
var squares = document.querySelectorAll('.square');
var turn = 1;

function checkTurn(){
  if (turn % 2 === 0) {
    return 'O';
  } else {
    return 'X';
  }
}

board.addEventListener('click', function(e) {

  e.target.innerText = checkTurn();
  turn ++;
})




})
