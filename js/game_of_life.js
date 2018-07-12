/*   Author: Richard Myatt
     Date: 11 July 2018

     An exercise in data visualization.
*/

// cell component
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

// title component
var Title = {
  template: "#logo",
  props: ["running"]
};

// main vue application
var main = new Vue({
  el: "#app",
  data: {
    show: false,    // show/hide button to log pattern to console
    rows: 16,
    cols: 20,
    running: false, // flag to indicate whether or not the application is running
    count: 0,       // provides a count of the life generations
    pattern: [oscillators, gliders, spaceShip, pulsar],
    grid: {},
    timer: undefined
  },
  components: {
    "gol-cell": Cell,
    "title-bar": Title
  },
  methods: {
    // Method which runs when the cell is left mouse clicked.  Cell is either
    // activated (turned blue) or deactivated (turned white).
    selectCell: function(i) {
      if(!this.running) {
        if(this.grid.arr[i] === 0) {
          this.$set(this.grid.arr, i, 1);
        } else {
          this.$set(this.grid.arr, i, 0);
        }
      }
    },
    // Method to start and stop the generation of life
    startStop: function() {
      console.log("in startStop");
      if(!this.running) {
        this.running = true;
        this.startGenerations();
      } else {
        this.running = false;
        this.stopGenerations();
      }
    },
    // Method to call the next generation at regular intervals
    startGenerations: function() {
      this.timer = setInterval(function() {
        main.goNext();
        main.count += 1;
      }, 600);
    },
    // Method to stop the animation
    stopGenerations: function() {
      clearInterval(this.timer);
    },
    // clear the grid
    clear: function() {
      if(!this.running) {
        var newArr = Array(this.grid.rows * this.grid.cols).fill(0);
        this.grid.arr = newArr;
        this.count = 0;
      }
    },
    // Method to calculate and apply the next generation
    goNext: function() {
      var nextGeneration = this.grid.next();
      this.grid.arr = nextGeneration;
    },
    // method only available when show = true.  Prints pattern to console
    printPattern: function() {
      var res = [];
      for(var x = 0; x < this.grid.arr.length; x++) {
        if(this.grid.arr[x] === 1) {
          res.push(x);
        }
      }
      console.log(res);
    },
    // method to add a selected pattern to the grid
    addPatternToGrid: function(pat) {
      if(!this.running) {
        this.clear();
        for(var x = 0; x < pat.length; x++) {
          this.$set(this.grid.arr, pat[x], 1);
        }
      }
    },
    // create a random pattern
    randomise: function() {
      var randNum;
      if(!this.running) {
        for(var x = 0; x < this.grid.arr.length; x++) {
          randNum = Math.floor(Math.random() * 2);
          this.$set(this.grid.arr, x, randNum);
        }
      }
    }
  },
  // initialize the app
  created: function() {
    var newGrid = new Grid(this.rows, this.cols);
    this.grid = newGrid;
    this.randomise();
    this.startGenerations();
    this.running = true;
  }
});

// dropddown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  });

  // initialize the materialize sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

// initialize the materialize model(document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});
