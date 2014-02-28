describe('horizontalAttackTest', function(){
  it('is true that a queen can attack across a row', function(){
    horizontalAttack([1,1], [1,8]).should.equal(true);
  });

  it('is false that a queen can attack nondiagonally to a row below it ', function(){
    horizontalAttack([1,1], [2,8]).should.equal(false);
  });
});

describe('verticalAttackTest', function(){
  it('is true that a queen can attack within a column', function(){
    verticalAttack([1,4], [3,4]).should.equal(true);
  });
});

describe('diagonalAttackTest', function(){
  it('is true that a queen can equidistantly across rows and columns', function(){
    diagonalAttack([1,3], [3,5]).should.equal(true);
  });

  it('is true that a queen can upwards and to the left', function(){
    diagonalAttack([7,7], [3,3]).should.equal(true);
  });

  it('is true that a queen can upwards to the right', function(){
    diagonalAttack([2,3], [1,4]).should.equal(true);
  });
});

describe('queenAttack', function() {
  it('is true that a queen can attack horizontally', function() {
    queenAttack([1, 1], [1,7]).should.equal(true);
  });

  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([1, 1], [2, 3]).should.equal(false);
  });
});