function Grid(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.arr  = Array(rows * cols).fill(0);
}

exports.Grid = Grid;
