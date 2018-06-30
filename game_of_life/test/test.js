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
    });

    describe.only("Grid method indexToPos, grid 5 x 5", function() {
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
  });
