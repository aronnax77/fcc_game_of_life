
// Constructor function for two dimensional grid to hold the cells for the game
// of life simulation
function Grid(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.arr  = Array(rows * cols).fill(0);   // single dimension array starting at 0
}

// Method to convert the index of the grid arr to a position in the visual array
// Please note that grid positions start at [1, 1] and are held in an array of two
Grid.prototype.indexToPos = function(i) {
  var pos = [];
  var r, c;
  r = parseInt(i / this.cols) + 1;
  c = i % this.cols + 1;
  return [r, c];
};

// Method to convert the position in the visual array to the index in the grid arr
// Please note that grid positions start at [1, 1] and are held in an array of two
Grid.prototype.posToIndex = function(pos) {
  var r = pos[0];
  var c = pos[1];
  var index = (r - 1) * this.cols + c - 1;
  return index;
};

// Method to calculate the number of live cells which surround any given cell
// taking the cells position [r, c] as an argument
Grid.prototype.liveCount = function(pos) {
  var res = 0;          // holds the result of the count
  var arrIndex;         // holds the present Grid arr index
  var row = pos[0];
  var col = pos[1];
  var neighbourCells = [[row - 1, col - 1], [row - 1, col], [row - 1, col + 1],
                        [row, col - 1], [row, col + 1],
                        [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]];
  for(var x = 0; x < 8; x++) {
    if(neighbourCells[x][0] !== 0 && neighbourCells[x][1] !== 0 &&
       neighbourCells[x][0] !== this.rows + 1 && neighbourCells[x][1] !== this.cols + 1) {
       arrIndex = this.posToIndex(neighbourCells[x]);
       res += this.arr[arrIndex];
   }
  }
  return res;
};

// Method to determine next generation
Grid.prototype.next = function() {
  var res = [];
  var cellStatus, cellIndex, currentLiveCount;
  for(var i = 1; i < this.rows + 1; i++) {
    for(var j = 1; j < this.cols + 1; j++) {
      cellIndex = this.posToIndex([i, j]);
      cellStatus = this.arr[cellIndex];

      // get current live count
      currentLiveCount = this.liveCount([i, j]);
      if(cellStatus === 0 && currentLiveCount !== 3) {
        res.push(0);
      } else if(cellStatus === 0 && currentLiveCount === 3) {
        res.push(1);
      } else if (cellStatus === 1 && (currentLiveCount === 2 || currentLiveCount === 3)) {
        res.push(1);
      } else if(cellStatus === 1 && currentLiveCount < 2 || currentLiveCount > 3) {
        res.push(0);
      }
    }
  }
  return res;
};
