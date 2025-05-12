import { useContext, createContext, useState } from 'react'

import './App.css'
import TicTacToeBoard from './TicTacToeBoard'

export const TurnContext = createContext();

function MySquare(){
  const {whoseTurn, setWhoseTurn} = useContext(TurnContext);
  const [squareVal, setSquareVal] = useState(null);
  const [beenPlayed, setBeenPlayed] = useState(false);
  
  
  function handleClick(){

      setSquareVal(whoseTurn);
      setWhoseTurn(prev => (prev === "X" ? "O" : "X"));
      setBeenPlayed(true);
      console.log("Square was clicked: ",whoseTurn,squareVal,beenPlayed)

  }

  return(
    <button 
      onClick={handleClick}
      disabled={beenPlayed}
    >{squareVal}</button>  );
}

function App() {
  const [whoseTurn, setWhoseTurn] = useState("X");

  return (
    <TurnContext.Provider value={{whoseTurn,setWhoseTurn}}>
      <div>
        <h1>Tic-Tac-Toe Game</h1>
      </div>
      <div>
        
        {/* trying this */}
         <div className="m-10">
             <div>
              <MySquare />
              <MySquare />
              <MySquare />
             </div>
             <div>
              <MySquare />
              <MySquare />
              <MySquare />
             </div>
             <div>
              <MySquare />
              <MySquare />
              <MySquare />
             </div>
         </div>

      </div>
      <div>
        <h2>It is now {whoseTurn}'s turn</h2>
      </div>
    </TurnContext.Provider>
  )
}

export default App
