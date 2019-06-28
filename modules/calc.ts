import 'smicle-util'
import * as _util from 'smicle-util'
import {TokenType, Node, Operator} from './type'

const num: number[] = []

export const CalcTheTree = (rootnode: Node): number => {
  dfs(rootnode)
  return num.pop()
}

const dfs = (node: Node): void => {
  if (_util.isNumber(node)) {
    num.push(node as number)
    return
  }

  const n = node as Operator
  dfs(n.lchild)
  dfs(n.rchild)
  num.push(calculate(n.operator, num.pop(), num.pop()))
}

// prettier-ignore
const calculate = (t: TokenType, a: number, b: number): number =>
  t == 1 ? b + a :
  t == 2 ? b - a :
  t == 3 ? b * a :
  t == 4 ? b / a :
0
