document.addEventListener('DOMContentLoaded', function() {

var board = document.querySelector('.board');
var squares = document.querySelectorAll('.square');

board.addEventListener('click', function(e) {
  e.target.innerText = 'x'
})


})
