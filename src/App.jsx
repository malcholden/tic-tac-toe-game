import { useEffect } from 'react';
import { useContext, createContext, useState } from 'react'

import './App.css'
import TicTacToeBoard from './TicTacToeBoard'

export const TurnContext = createContext();
export const xContext = createContext();
export const oContext = createContext();

function MySquare(props){
  const {whoseTurn, setWhoseTurn} = useContext(TurnContext);
  const {xSquares, setXSquares} = useContext(xContext);
  const {oSquares, setOSquares} = useContext(oContext);
  const [squareVal, setSquareVal] = useState(null);
  const [beenPlayed, setBeenPlayed] = useState(false);
  let id = props.id;

  function handleClick(){

      setSquareVal(whoseTurn);
      
      setBeenPlayed(true);
      if(whoseTurn=="X"){
        setXSquares([...xSquares,props.id])
      }else{
        setOSquares([...oSquares,props.id])
      }
      setWhoseTurn(prev => (prev === "X" ? "O" : "X"));
      
      
  }

  return(
    <button 
      onClick={handleClick}
      disabled={beenPlayed}
    >{squareVal}</button>  );
}

function App() {
  const [whoseTurn, setWhoseTurn] = useState("X");
  const [xSquares, setXSquares] = useState([]);
  const [oSquares, setOSquares] = useState([]);
  useEffect(()=>{

    console.log("X-Squares: ", xSquares, " // O-Squares: ", oSquares);

  });
  return (
    <TurnContext.Provider value={{whoseTurn,setWhoseTurn}}>
    <xContext.Provider value={{xSquares,setXSquares}}>  
    <oContext.Provider value={{oSquares,setOSquares}}>
      <div>
        <h1>Tic-Tac-Toe Game</h1>
      </div>
      <div>
        
        {/* trying this */}
         <div className="m-10">
             <div>
              <MySquare id={1}/>
              <MySquare id={2}/>
              <MySquare id={3}/>
             </div>
             <div>
              <MySquare id={4}/>
              <MySquare id={5}/>
              <MySquare id={6}/>
             </div>
             <div>
              <MySquare id={7}/>
              <MySquare id={8}/>
              <MySquare id={9}/>
             </div>
         </div>

      </div>
      <div>
        <h2>It is now {whoseTurn}'s turn</h2>
      </div>
    </oContext.Provider>
    </xContext.Provider>
    </TurnContext.Provider>
  )
}

export default App
