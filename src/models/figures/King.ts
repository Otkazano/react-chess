import Cell from '../Cell'
import Colors from '../Colors'
import Figure, { FigureNames } from './Figure'
//@ts-ignore
import blackLogo from '../../images/kingBlack.png'
//@ts-ignore
import whiteLogo from '../../images/kingWhite.png'

export class King extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
