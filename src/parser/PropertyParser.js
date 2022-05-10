// Generated from Property.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PropertyListener = require('./PropertyListener').PropertyListener;
var PropertyVisitor = require('./PropertyVisitor').PropertyVisitor;

var grammarFileName = "Property.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000f\u0013\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0006\u0002\f",
    "\n\u0002\r\u0002\u000e\u0002\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0003\u0003\u0002\t\u000e\u0002",
    "\u0012\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002",
    "\u0002\u0005\u0006\u0007\u0007\u0002\u0002\u0006\u0007\u0007\u0004\u0002",
    "\u0002\u0007\b\u0007\b\u0002\u0002\b\t\u0007\u0005\u0002\u0002\t\u000b",
    "\u0007\b\u0002\u0002\n\f\t\u0002\u0002\u0002\u000b\n\u0003\u0002\u0002",
    "\u0002\f\r\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\r",
    "\u000e\u0003\u0002\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0007\u0007\u0002\u0002\u0010\u0011\u0007\u0006\u0002\u0002\u0011",
    "\u0003\u0003\u0002\u0002\u0002\u0003\r"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'After'", "'days'", "'.'", "'%'" ];

var symbolicNames = [ null, null, null, null, null, "INT", "ID", "EQUALS", 
                      "NOT_EQUALS", "LESS_THAN", "LESS_OR_EQUALS", "GREATER_THAN", 
                      "GREATER_OR_EQUALS", "WS" ];

var ruleNames =  [ "check" ];

function PropertyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PropertyParser.prototype = Object.create(antlr4.Parser.prototype);
PropertyParser.prototype.constructor = PropertyParser;

Object.defineProperty(PropertyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PropertyParser.EOF = antlr4.Token.EOF;
PropertyParser.T__0 = 1;
PropertyParser.T__1 = 2;
PropertyParser.T__2 = 3;
PropertyParser.T__3 = 4;
PropertyParser.INT = 5;
PropertyParser.ID = 6;
PropertyParser.EQUALS = 7;
PropertyParser.NOT_EQUALS = 8;
PropertyParser.LESS_THAN = 9;
PropertyParser.LESS_OR_EQUALS = 10;
PropertyParser.GREATER_THAN = 11;
PropertyParser.GREATER_OR_EQUALS = 12;
PropertyParser.WS = 13;

PropertyParser.RULE_check = 0;


function CheckContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PropertyParser.RULE_check;
    return this;
}

CheckContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CheckContext.prototype.constructor = CheckContext;

CheckContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.INT);
    } else {
        return this.getToken(PropertyParser.INT, i);
    }
};


CheckContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.ID);
    } else {
        return this.getToken(PropertyParser.ID, i);
    }
};


CheckContext.prototype.EQUALS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.EQUALS);
    } else {
        return this.getToken(PropertyParser.EQUALS, i);
    }
};


CheckContext.prototype.NOT_EQUALS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.NOT_EQUALS);
    } else {
        return this.getToken(PropertyParser.NOT_EQUALS, i);
    }
};


CheckContext.prototype.LESS_THAN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.LESS_THAN);
    } else {
        return this.getToken(PropertyParser.LESS_THAN, i);
    }
};


CheckContext.prototype.LESS_OR_EQUALS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.LESS_OR_EQUALS);
    } else {
        return this.getToken(PropertyParser.LESS_OR_EQUALS, i);
    }
};


CheckContext.prototype.GREATER_THAN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.GREATER_THAN);
    } else {
        return this.getToken(PropertyParser.GREATER_THAN, i);
    }
};


CheckContext.prototype.GREATER_OR_EQUALS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PropertyParser.GREATER_OR_EQUALS);
    } else {
        return this.getToken(PropertyParser.GREATER_OR_EQUALS, i);
    }
};


CheckContext.prototype.enterRule = function(listener) {
    if(listener instanceof PropertyListener ) {
        listener.enterCheck(this);
	}
};

CheckContext.prototype.exitRule = function(listener) {
    if(listener instanceof PropertyListener ) {
        listener.exitCheck(this);
	}
};

CheckContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PropertyVisitor ) {
        return visitor.visitCheck(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PropertyParser.CheckContext = CheckContext;

PropertyParser.prototype.check = function() {

    var localctx = new CheckContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PropertyParser.RULE_check);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(PropertyParser.T__0);
        this.state = 3;
        this.match(PropertyParser.INT);
        this.state = 4;
        this.match(PropertyParser.T__1);
        this.state = 5;
        this.match(PropertyParser.ID);
        this.state = 6;
        this.match(PropertyParser.T__2);
        this.state = 7;
        this.match(PropertyParser.ID);
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PropertyParser.EQUALS) | (1 << PropertyParser.NOT_EQUALS) | (1 << PropertyParser.LESS_THAN) | (1 << PropertyParser.LESS_OR_EQUALS) | (1 << PropertyParser.GREATER_THAN) | (1 << PropertyParser.GREATER_OR_EQUALS))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PropertyParser.EQUALS) | (1 << PropertyParser.NOT_EQUALS) | (1 << PropertyParser.LESS_THAN) | (1 << PropertyParser.LESS_OR_EQUALS) | (1 << PropertyParser.GREATER_THAN) | (1 << PropertyParser.GREATER_OR_EQUALS))) !== 0));
        this.state = 13;
        this.match(PropertyParser.INT);
        this.state = 14;
        this.match(PropertyParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.PropertyParser = PropertyParser;
exports.CheckContext = CheckContext;
PropertyParser.CheckContext = CheckContext;
