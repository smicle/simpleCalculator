"use strict";
exports.__esModule = true;
require("smicle-util");
var _util = require("smicle-util");
var lexer_1 = require("./modules/lexer");
var parser_1 = require("./modules/parser");
var calc_1 = require("./modules/calc");
// prettier-ignore
var argumentToFormula = function () {
    return _util.range(2, process.argv.length)
        .map(function (i) { return process.argv[i]; })
        .join('');
};
var contents = argumentToFormula();
var tokens = lexer_1.LexicalAnalyzer(contents);
var rootnode = parser_1.Parsing(tokens);
var result = calc_1.CalcTheTree(rootnode);
console.log('\n--------input---------');
console.log("Formula to calculate\n'" + contents + "'");
console.log('\n--------tokens--------');
lexer_1.ConvertFormat(tokens)._each(console.log);
console.log('\n--------result--------');
console.log(result);
