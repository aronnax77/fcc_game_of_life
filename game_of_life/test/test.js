var gol = require("../gol.js");
var assert = require("assert");
var _ = require('lodash');


  describe("Game of Life logic", function() {
    describe("Grid constructor", function() {
      it("3 by 3 grid compare rows", function() {
        var grid = new gol.Grid(3, 3);
        assert.equal(3, grid.rows);
        assert.equal(3, grid.cols);
      });
      it("3 by 3 grid compare cols", function() {
        var grid = new gol.Grid(3, 3);
        assert.equal(3, grid.rows);
        assert.equal(3, grid.cols);
      });
      it("3 by 3 grid compare array values", function() {
        var grid = new gol.Grid(3, 3);
        var testArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        assert.equal(true, _.isEqual(testArr, grid.arr));
      });
    });
  });
