import { useContext, createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToeBoard from './TicTacToeBoard'

export const TurnContext = createContext();

function App() {
  const [whoseTurn, setWhoseTurn] = useState("X");
  
  return (
    <TurnContext.Provider value={{whoseTurn,setWhoseTurn}}>
      <div>
        <h1>Tic-Tac-Toe Game</h1>
      </div>
      <div>
        <TicTacToeBoard/>
      </div>
      <div>
        <h2>It is now {whoseTurn}'s turn</h2>
      </div>
    </TurnContext.Provider>
  )
}

export default App
