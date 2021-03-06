var gol = require("../gol.js");
var assert = require("assert");
var _ = require('lodash');


  describe("Game of Life logic", function() {
    describe("Grid constructor", function() {
      it("3 by 3 grid compare rows", function() {
        var grid = new gol.Grid(3, 3);
        assert.equal(3, grid.rows);
      });
      it("3 by 3 grid compare cols", function() {
        var grid = new gol.Grid(3, 3);
        assert.equal(3, grid.cols);
      });
      it("3 by 3 grid compare array values", function() {
        var grid = new gol.Grid(3, 3);
        var testArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert(_.isEqual(testArr, grid.arr));
      });

      it("5 by 6 grid compare rows", function() {
        var grid = new gol.Grid(5, 6);
        assert.equal(5, grid.rows);
      });
      it("5 by 6 grid compare cols", function() {
        var grid = new gol.Grid(5, 6);
        assert.equal(6, grid.cols);
      });
      it("5 by 6 grid compare array values", function() {
        var grid = new gol.Grid(5, 6);
        var testArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert(_.isEqual(testArr, grid.arr));
      });
    });

    describe("Grid method posToIndex, grid 5 x 5", function() {
      it("Grid pos[2, 2] should equal index 6", function() {
        var grid = new gol.Grid(5, 5);
        var pos = [2, 2];
        assert.equal(6, grid.posToIndex(pos));
      });
      it("Grid pos[1, 1] should equal index 0", function() {
        var grid = new gol.Grid(5, 5);
        var pos = [1, 1];
        assert.equal(0, grid.posToIndex(pos));
      });
      it("Grid pos[5, 5] should equal index 24", function() {
        var grid = new gol.Grid(5, 5);
        var pos = [5, 5];
        assert.equal(24, grid.posToIndex(pos));
      });
      it("Grid pos[3, 2] should equal index 1", function() {
        var grid = new gol.Grid(5, 5);
        var pos = [3, 2];
        assert.equal(11, grid.posToIndex(pos));
      });
    });

    describe("Grid method posToIndex, grid 5 x 6", function() {
      it("Grid pos[2, 2] should equal index 7", function() {
        var grid = new gol.Grid(5, 6);
        var pos = [2, 2];
        assert.equal(7, grid.posToIndex(pos));
      });
      it("Grid pos[1, 1] should equal index 0", function() {
        var grid = new gol.Grid(5, 6);
        var pos = [1, 1];
        assert.equal(0, grid.posToIndex(pos));
      });
      it("Grid pos[5, 6] should equal index 29", function() {
        var grid = new gol.Grid(5, 6);
        var pos = [5, 6];
        assert.equal(29, grid.posToIndex(pos));
      });
      it("Grid pos[3, 2] should equal index 13", function() {
        var grid = new gol.Grid(5, 6);
        var pos = [3, 2];
        assert.equal(13, grid.posToIndex(pos));
      });
    });

    describe("Grid method indexToPos, grid 5 x 5", function() {
      it("Index 6 should equal pos [2, 2]", function() {
        var grid = new gol.Grid(5, 5);
        var i = 6;
        assert.equal(true, _.isEqual([2, 2], grid.indexToPos(i)));
      });
      it("Index 0 should equal pos [1, 1]", function() {
        var grid = new gol.Grid(5, 5);
        var i = 0;
        assert.equal(true, _.isEqual([1, 1], grid.indexToPos(i)));
      });
      it("Index 24 should equal pos [5, 5]", function() {
        var grid = new gol.Grid(5, 5);
        var i = 24;
        assert.equal(true, _.isEqual([5, 5], grid.indexToPos(i)));
      });
    });

    describe("Grid method indexToPos, grid 5 x 6", function() {
      it("Index 7 should equal pos [2, 2]", function() {
        var grid = new gol.Grid(5, 6);
        var i = 7;
        assert.equal(true, _.isEqual([2, 2], grid.indexToPos(i)));
      });
      it("Index 0 should equal pos [1, 1]", function() {
        var grid = new gol.Grid(5, 6);
        var i = 0;
        assert.equal(true, _.isEqual([1, 1], grid.indexToPos(i)));
      });
      it("Index 29 should equal pos [5, 6]", function() {
        var grid = new gol.Grid(5, 6);
        var i = 29;
        assert.equal(true, _.isEqual([5, 6], grid.indexToPos(i)));
      });
    });

    describe("Assess the live count for a cell in a 5 x 5 grid", function() {
      it("live count for cell [1, 1] should equal 0", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(0, grid.liveCount([1, 1]));
      });
      it("live count for cell [1, 3] should equal 0", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(0, grid.liveCount([1, 3]));
      });
      it("live count for cell [1, 5] should equal 0", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(0, grid.liveCount([1, 5]));
      });
      it("live count for cell [5, 1] should equal 0", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(0, grid.liveCount([5, 1]));
      });
      it("live count for cell [5, 3] should equal 0", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(0, grid.liveCount([5, 3]));
      });
      it("live count for cell [5, 5] should equal 0", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(0, grid.liveCount([5, 5]));
      });
      it("live count for cell [3, 1] should equal 1", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(1, grid.liveCount([3, 1]));
      });
      it("live count for cell [3, 5] should equal 1", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(1, grid.liveCount([3, 5]));
      });
      it("live count for cell [2, 2] should equal 2", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(2, grid.liveCount([2, 2]));
      });
      it("live count for cell [2, 3] should equal 3", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(3, grid.liveCount([2, 3]));
      });
      it("live count for cell [3, 2] should equal 1", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(1, grid.liveCount([3, 2]));
      });
      it("live count for cell [3, 3] should equal 2", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(2, grid.liveCount([3, 3]));
      });
      it("live count for cell [3, 4] should equal 1", function() {
        var grid = new gol.Grid(5, 5);
        grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        assert.equal(1, grid.liveCount([3, 4]));
      });
    });

    describe("Assess the live count for a cell in a 5 x 6 grid", function() {
      it("live count for cell [1, 1] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        //grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([1, 1]));
      });
      it("live count for cell [1, 3] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([1, 3]));
      });
      it("live count for cell [1, 6] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([1, 6]));
      });
      it("live count for cell [5, 1] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([5, 1]));
      });
      it("live count for cell [5, 4] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([5, 4]));
      });
      it("live count for cell [5, 6] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([5, 6]));
      });
      it("live count for cell [3, 1] should equal 1", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(1, grid.liveCount([3, 1]));
      });
      it("live count for cell [3, 5] should equal 1", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(1, grid.liveCount([3, 5]));
      });
      it("live count for cell [3, 6] should equal 0", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(0, grid.liveCount([3, 6]));
      });
      it("live count for cell [2, 2] should equal 2", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(2, grid.liveCount([2, 2]));
      });
      it("live count for cell [2, 3] should equal 3", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(3, grid.liveCount([2, 3]));
      });
      it("live count for cell [2, 4] should equal 2", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(2, grid.liveCount([2, 4]));
      });
      it("live count for cell [3, 2] should equal 1", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(1, grid.liveCount([3, 2]));
      });
      it("live count for cell [3, 3] should equal 2", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(2, grid.liveCount([3, 3]));
      });
      it("live count for cell [3, 4] should equal 1", function() {
        var grid = new gol.Grid(5, 6);
        grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(1, grid.liveCount([3, 4]));
      });
    });


    describe("Calculate the next generation of the cells for a 5 x 5 grid", function() {
      describe("Use three cell oscilator", function() {
        it("5 x 5 grid with three cell oscilator", function() {
          var grid = new gol.Grid(5, 5);
          grid.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var expected = [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ];
          assert.equal(true, _.isEqual(expected, grid.next()));
        });
      });
    });

    describe("Calculate the next generation of the cells for a 5 x 6 grid", function() {
      describe("Use three cell oscilator", function() {
        it("5 x 6 grid with three cell oscilator", function() {
          var grid = new gol.Grid(5, 6);
          grid.arr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
          var expected = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
          assert.equal(true, _.isEqual(expected, grid.next()));
        });
      });
    });
  });
