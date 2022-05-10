// Generated from Property.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PropertyParser.

function PropertyVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PropertyVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PropertyVisitor.prototype.constructor = PropertyVisitor;

// Visit a parse tree produced by PropertyParser#check.
PropertyVisitor.prototype.visitCheck = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PropertyVisitor = PropertyVisitor;