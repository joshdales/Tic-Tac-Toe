document.addEventListener('DOMContentLoaded', function() {

var board = document.querySelector('.board');
var squares = document.querySelectorAll('.square');
var turn = 1;


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
};



})
