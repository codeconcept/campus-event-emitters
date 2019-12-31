const EventEmitter = require("events").EventEmitter;
const util = require("util");

function Programmer(name, fields = []) {
  this.name = name;
  this.fields = fields;
}

Programmer.prototype.study = function(field) {
  this.fields.push(field);
};

// Make Programmer extend EventEmitter
util.inherits(Programmer, EventEmitter);

// what is returned by this module is Programmer
module.exports = Programmer;
