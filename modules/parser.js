"use strict";
exports.__esModule = true;
var type_1 = require("./type");
exports.Parsing = function (tokens) {
    var cur = tokens[0];
    var next = tokens[1];
    var pos = 2;
    var nextToken = function () {
        cur = next;
        next = tokens.length > pos ? tokens[pos] : { type: type_1.TokenType.EOF, input: '' };
        pos++;
    };
    var getNum = function () {
        var t = cur;
        nextToken();
        return Number(t.input);
    };
    var muldiv = function () {
        var lchild = getNum();
        var _loop_1 = function () {
            var t = cur;
            if ([type_1.TokenType.MULTIPLE, type_1.TokenType.DIVISION].every(function (v) { return t.type !== v; }))
                return "break";
            nextToken();
            var rchild = getNum();
            lchild = {
                operator: t.type,
                lchild: lchild,
                rchild: rchild
            };
        };
        while (true) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        return lchild;
    };
    var addsub = function () {
        var lchild = muldiv();
        var _loop_2 = function () {
            var t = cur;
            if ([type_1.TokenType.PLUS, type_1.TokenType.MINUS].every(function (v) { return t.type !== v; }))
                return "break";
            nextToken();
            var rchild = muldiv();
            lchild = {
                operator: t.type,
                lchild: lchild,
                rchild: rchild
            };
        };
        while (true) {
            var state_2 = _loop_2();
            if (state_2 === "break")
                break;
        }
        return lchild;
    };
    var parse = function () { return addsub(); };
    return parse();
};
