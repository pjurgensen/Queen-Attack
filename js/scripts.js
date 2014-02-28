var horizontalAttack = function(queenPosition, targetPosition){
  // being able to horizontally attack is simple being in the same row. 
  return queenPosition[0] === targetPosition[0];
};

var verticalAttack = function(queenPosition, targetPosition){
  // being able to vertically attack is simple being in the same column. 
  return queenPosition[1] === targetPosition[1];
};

var diagonalAttack = function(queenPosition, targetPosition){
  //determine the difference between the rows.
  var rowDifference = Math.abs(queenPosition[0] - targetPosition[0]);
  //determin the difference between the columns.
  var colDifference = Math.abs(queenPosition[1] - targetPosition[1]);
  //if both differences are the same, the slope is 1 and this is a diag. line. 
  if (rowDifference === colDifference) {
    return true;
  } else {
    return false;
  } 
};

var queenAttack = function(queenPosition, targetPosition) {
  //determine that the queen can attack horizontally 
  var horizontal = horizontalAttack(queenPosition, targetPosition);
  //determine that the queen can attack vertically 
  var vertical = verticalAttack(queenPosition, targetPosition);
  //determine that the queen can attack diagonally 
  var diagonal = diagonalAttack(queenPosition, targetPosition);
  // if any of the above are true, the queen can kill the target
  return horizontal || vertical || diagonal;
}

$(document).ready(function() {
  $('form#queen-attack').submit(function(event) {

    var queenRowPosition = parseInt($('input#queen-row-position').val());
    var queenColPosition = parseInt($('input#queen-col-position').val());
    var queenPosition = [queenRowPosition, queenColPosition];

    var targetRowPosition = parseInt($('input#target-row-position').val());
    var targetColPosition = parseInt($('input#target-col-position').val());
    var targetPosition = [targetRowPosition, targetColPosition];

    var result = queenAttack(queenPosition, targetPosition);

    if (result) {
      $('#result p').text('The queen attacked you!'); 
    } else {
      $('#result p').text('You live to see another day.');
    }
    

    event.preventDefault();
  })
});
