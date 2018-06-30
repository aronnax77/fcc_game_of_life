function Grid(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.arr  = Array(rows * cols).fill(0);
}

Grid.prototype.indexToPos = function(i) {
  var pos = [];
  var r, c;
  r = parseInt(i / this.cols) + 1;
  c = i % this.cols + 1;
  return [r, c];
};

Grid.prototype.posToIndex = function(pos) {
  var r = pos[0];
  var c = pos[1];
  var index = (r - 1) * this.rows + c - 1;
  return index;
};

exports.Grid = Grid;


var grid = new Grid(5, 5);
console.log(grid.indexToPos(6));
