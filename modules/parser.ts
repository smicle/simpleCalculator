import {TokenType, Token, Node} from './type'

export const Parsing = (tokens: Token[]): Node => {
  let cur: Token = tokens[0]
  let next: Token = tokens[1]
  let pos: number = 2

  const endToken = {type: TokenType.EOF, input: ''}

  const nextToken = (): void => {
    cur = next
    next = tokens.length > pos ? tokens[pos] : endToken
    pos++
  }

  const getNum = (): number => {
    const t: Token = cur
    nextToken()
    return Number(t.input)
  }

  const muldiv = (): Node => {
    let lchild: Node = getNum()

    while (true) {
      const t: Token = cur
      if ([TokenType.MULTIPLE, TokenType.DIVISION].every(v => t.type !== v)) break
      nextToken()
      const rchild: Node = getNum()
      lchild = {operator: t.type, lchild: lchild, rchild: rchild}
    }

    return lchild
  }

  const addsub = (): Node => {
    let lchild: Node = muldiv()

    while (true) {
      const t: Token = cur
      if ([TokenType.PLUS, TokenType.MINUS].every(v => t.type !== v)) break
      nextToken()
      const rchild: Node = muldiv()
      lchild = {operator: t.type, lchild: lchild, rchild: rchild}
    }

    return lchild
  }

  const parse = (): Node => addsub()
  return parse()
}
