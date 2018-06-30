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
    isAlive: []
  },
  components: {
    "gol-cell": Cell
  },
  methods: {
    selectCell: function(i) {
      if(this.isAlive[i] === 0) {
        this.$set(this.isAlive, i, 1);
      } else {
        this.$set(this.isAlive, i, 0);
      }
    }
  },
  mounted: function() {
    //for(var i = 0; i < 25; i++) {
      //this.isAlive.push(0);
      this.isAlive = start;
    //}
  }
});
