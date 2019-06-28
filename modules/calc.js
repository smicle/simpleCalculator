"use strict";
exports.__esModule = true;
require("smicle-util");
var _util = require("smicle-util");
var num = [];
exports.CalcTheTree = function (rootnode) {
    dfs(rootnode);
    return num.pop();
};
var dfs = function (node) {
    if (_util.isNumber(node)) {
        num.push(node);
        return;
    }
    var n = node;
    dfs(n.lchild);
    dfs(n.rchild);
    num.push(calculate(n.operator, num.pop(), num.pop()));
};
// prettier-ignore
var calculate = function (t, a, b) {
    return t == 1 ? b + a :
        t == 2 ? b - a :
            t == 3 ? b * a :
                t == 4 ? b / a :
                    0;
};
