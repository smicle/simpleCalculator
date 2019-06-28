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

export type Node = Operator | number

export type Operator = {
  operator: TokenType
  lchild: Node
  rchild: Node
}
