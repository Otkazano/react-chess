import Cell from '../Cell'
import Colors from '../Colors'
// @ts-ignore
import icon from '../../images/rookBlack.png'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон'
}

export default class Figure {
  color: Colors
  logo: typeof icon | null
  cell: Cell
  name: FigureNames
  id: number

  constructor (color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove (target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false
    }
    if (target.figure?.name === FigureNames.KING) {
      return false
    }
    return true
  }

  moveFigure (target: Cell) {}
}
