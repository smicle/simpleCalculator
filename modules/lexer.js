"use strict";
exports.__esModule = true;
require("smicle-util");
var _util = require("smicle-util");
var type_1 = require("./type");
var OPERATOR = {
    '+': type_1.TokenType.PLUS,
    '-': type_1.TokenType.MINUS,
    '*': type_1.TokenType.MULTIPLE,
    '/': type_1.TokenType.DIVISION
};
exports.LexicalAnalyzer = function (contents) {
    var tokens = [];
    var tmp = '';
    contents.split('').forEach(function (c) {
        if (_util.isNumber(c._num())) {
            tmp += c;
            return;
        }
        if (tmp !== '') {
            tokens.push(numberToken(tmp));
            tmp = '';
        }
        tokens.push(operatorToken(c));
    });
    tokens.push(numberToken(tmp));
    return tokens;
};
var numberToken = function (c) { return ({
    type: type_1.TokenType.NUMBER,
    input: c
}); };
var operatorToken = function (c) { return ({
    type: OPERATOR[c],
    input: c
}); };
exports.ConvertFormat = function (tokens) {
    return tokens.map(function (t) { return "Type->" + type_1.TokenType[t.type] + "\tInput->" + t.input; });
};
