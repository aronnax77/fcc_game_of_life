var Cell = {
  template: "#cell",
  methods: {
    process: function(e) {
      var idthis = e.target.id;
      var len = idthis.length;
      var index = idthis.slice(4, len);
      this.$emit('select', index);
    }
  }
};

var main = new Vue({
  el: "#app",
  data: {
    grid: {},
    timer: undefined
  },
  components: {
    "gol-cell": Cell
  },
  methods: {
    // Method which runs when the cell is left mouse clicked.  Cell is either
    // activated (turned blue) or deactivated (turned white).
    selectCell: function(i) {
      if(this.grid.arr[i] === 0) {
        this.$set(this.grid.arr, i, 1);
      } else {
        this.$set(this.grid.arr, i, 0);
      }
    },
    // Method to call the next generation at regular intervals
    startGenerations: function() {
      this.timer = setInterval(function() {
        main.goNext();
      }, 600);
    },
    // Method to stop the animation
    stopGenerations: function() {
      clearInterval(this.timer);
    },
    clear: function() {
      var newArr = Array(this.grid.rows * this.grid.cols).fill(0);
      this.grid.arr = newArr;
    },
    // Method to calculate and apply the next generation
    goNext: function() {
      var nextGeneration = this.grid.next();
      this.grid.arr = nextGeneration;
    }
  },
  created: function() {
    var newGrid = new Grid(10, 10);
    this.grid = newGrid;
    //this.grid.arr = start;

  }
});
