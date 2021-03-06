var Dissolve = require("dissolve");

var parser = Dissolve().tap(function() {

  this.string('rec_type', 4);
  this.string('prod_name', 60);
  this.int32('layout_code');
  this.int32('nominal_case_size');
  this.int32('compressed');
  this.int32('weight_index');
  this.int32('ncases');
  this.doublele('bias');
  this.string('creation_date', 9);
  this.string('creation_time', 8);
  this.string('file_label', 64);
  this.buffer('padding', 3);
  });

module.exports = parser;
