export enum TokenType {
  NUMBER,
  PLUS,
  MINUS,
  MULTIPLE,
  DIVISION,
  EOF,
}

export type Token = {
  type: TokenType
  input: string
}

export interface Operator {
  operator: TokenType
  lchild: Node
  rchild: Node
}

export type Node = Operator | number
