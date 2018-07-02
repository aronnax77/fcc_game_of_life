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
    grid: {}
  },
  components: {
    "gol-cell": Cell
  },
  methods: {
    selectCell: function(i) {
      if(this.grid.arr[i] === 0) {
        this.$set(this.grid.arr, i, 1);
      } else {
        this.$set(this.grid.arr, i, 0);
      }
    }
  },
  created: function() {
    var newGrid = new Grid(5, 5);
    this.grid = newGrid;
    this.grid.arr = start;

  }
});
