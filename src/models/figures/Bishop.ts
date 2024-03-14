import Cell from '../Cell'
import Colors from '../Colors'
import Figure, { FigureNames } from './Figure'
//@ts-ignore
import blackLogo from '../../images/bishopBlack.png'
//@ts-ignore
import whiteLogo from '../../images/bishopWhite.png'

export class Bishop extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color = Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.BISHOP
  }
}
