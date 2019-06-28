import 'smicle-util'
import * as _util from 'smicle-util'
import {Token, TokenType} from './type'

const OPERATOR = {
  '+': TokenType.PLUS,
  '-': TokenType.MINUS,
  '*': TokenType.MULTIPLE,
  '/': TokenType.DIVISION,
}

export const LexicalAnalyzer = (contents: string): Token[] => {
  const tokens: Token[] = []
  let tmp: string = ''

  contents.split('').forEach(c => {
    if (_util.isNumber(c._num())) {
      tmp += c
      return
    }
    if (tmp !== '') {
      tokens.push(numberToken(tmp))
      tmp = ''
    }
    tokens.push(operatorToken(c))
  })
  tokens.push(numberToken(tmp))

  return tokens
}

const numberToken = (c: string): Token => ({
  type: TokenType.NUMBER,
  input: c,
})

const operatorToken = (c: string): Token => ({
  type: OPERATOR[c],
  input: c,
})

export const ConvertFormat = (tokens: Token[]): string[] =>
  tokens.map(t => `Type->${TokenType[t.type]}\tInput->${t.input}`)
