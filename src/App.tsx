import React from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import Board from './models/Board'

function App () {
  const [board, setBoard] = React.useState(new Board())

  function restart () {
    const newBoard = new Board()
    newBoard.initCell()
    setBoard(newBoard)
  }

  React.useEffect(() => {
    restart()
  }, [])

  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App
