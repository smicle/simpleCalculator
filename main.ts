import 'smicle-util'
import * as _util from 'smicle-util'
import {Token, Node} from './modules/type'
import {LexicalAnalyzer, ConvertFormat} from './modules/lexer'
import {Parsing} from './modules/parser'
import {CalcTheTree} from './modules/calc'

// prettier-ignore
const argumentToFormula = (): string =>
  _util.range(2, process.argv.length)
    .map(i => process.argv[i])
    .join('')

const contents: string = argumentToFormula()
const tokens: Token[] = LexicalAnalyzer(contents)
const rootnode: Node = Parsing(tokens)
const result: number = CalcTheTree(rootnode)

console.log('\n--------input---------')
console.log(`Formula to calculate\n'${contents}'`)
console.log('\n--------tokens--------')
ConvertFormat(tokens)._each(console.log)
console.log('\n--------result--------')
console.log(result)
