import React from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import Board from './models/Board'
import Player from './models/Player'
import Colors from './models/Colors'
import LostFigures from './components/LostFigures'

function App () {
  const [board, setBoard] = React.useState(new Board())
  const [whitePlayer, setWhitePlayer] = React.useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = React.useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null)

  function restart () {
    const newBoard = new Board()
    newBoard.initCell()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer () {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    )
  }

  React.useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  return (
    <div className='app'>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div className='lostBox'>
        <LostFigures title='Чёрные фигуры' figures={board.lostBlackFigures} />
        <LostFigures title='Белые фигуры' figures={board.lostWhiteFigures} />
      </div>
    </div>
  )
}

export default App
