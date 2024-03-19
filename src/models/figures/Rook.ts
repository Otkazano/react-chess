import Cell from '../Cell'
import Colors from '../Colors'
import Figure, { FigureNames } from './Figure'
//@ts-ignore
import blackLogo from '../../images/rookBlack.png'
//@ts-ignore
import whiteLogo from '../../images/rookWhite.png'

export class Rook extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyVertical(target)) {
      return true
    }

    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }
    return false
  }
}
