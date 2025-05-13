import { useEffect } from 'react';
import { useContext, createContext, useState } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import './App.css'

// contexts for whose turn it is as well as the x's and o's
export const TurnContext = createContext();
export const xContext = createContext();
export const oContext = createContext();

// these are combos needed to win the game
export const winningCombos=[
                    [1,2,3], [4,5,6], [7,8,9],
                    [1,4,7], [2,5,8], [3,6,9],
                    [1,5,9], [3,5,7]]



/**
 * Function to draw a clickable button square.
 * @param {*} props - the ID of the square
 * @returns button square
 */
function MySquare(props){

  // variables set up for whose turn it is, which selected squares are X, which selected squares are O,
  //  what the value of the square is (x or o), whether a square has been played already, and the ID of the square (1-9)
  const {whoseTurn, setWhoseTurn} = useContext(TurnContext);
  const {xSquares, setXSquares} = useContext(xContext);
  const {oSquares, setOSquares} = useContext(oContext);
  const [squareVal, setSquareVal] = useState(null);
  const [beenPlayed, setBeenPlayed] = useState(false);
  let id = props.id;




  /**
   * Function for handling when a button square is clicked.
   */
  function handleClick(){
      // claims square ownership for whose turn it is
      setSquareVal(whoseTurn);

      // marks that square has been played
      setBeenPlayed(true);

      // determines who the owner is and who gains the square to add to array
      if(whoseTurn=="X"){
        setXSquares([...xSquares,props.id]);
        // if(didIWin(xSquares)){
        //   console.log("GAME OVER");
        // }
      }else{
        setOSquares([...oSquares,props.id])
        // if(didIWin(oSquares)){
        //   console.log("GAME OVER");
        // }
      }

      // sets next player up
      setWhoseTurn(prev => (prev === "X" ? "O" : "X"));

      
  }

  return(
    <button
      className="TTbutton" 
      onClick={handleClick}
      disabled={beenPlayed}
    >{squareVal}</button>  );
}

/**
 * The overall game default export function
 * @returns tic-tac-toe game
 */
function App() {

  // initial variables for whose turn it is, x square list and o square list.
  const [whoseTurn, setWhoseTurn] = useState("X");
  const [xSquares, setXSquares] = useState([]);
  const [oSquares, setOSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWinner, setGameWinner] = useState();


/**
   * Function for determining if a player won, i.e. does their array of squares match one of the winning combos?
   *
   */
  function didIWin(pSquares){
    let player = pSquares.sort();
   
    
    // just for printing / debugging
    let sS = JSON.stringify(player);
    let bS = JSON.stringify(winningCombos);
    console.log("player: ",sS);
    console.log("winning: ",bS);


    return winningCombos.some(subarray =>
      subarray.every(value => player.includes(value))
    );
    
  }


  // when a square is clicked, log what the current state of x-squares and o-squares is
  useEffect(()=>{

    console.log("X-Squares: ", xSquares, " // O-Squares: ", oSquares);
    if(oSquares.length > 0 && xSquares.length > 0){
      if(didIWin(oSquares)){
          // alert("GAME OVER, O WINS");
          setGameWinner("O");
          setGameOver(true);
        }
      if(didIWin(xSquares)){
        // alert("GAME OVER, X WINS");
        setGameWinner("X");
        setGameOver(true);
      }
    }
      
  });
  
  function cleanUpGame(){
    setGameOver(false);
    setGameWinner("");
    setOSquares([]);
    setXSquares([]);
    setWhoseTurn("X");
  }


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
      <Dialog open={gameOver} onClose={() => setGameOver(false)} className="relative z-50">
          <div className="gameOverScreen">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">GAME OVER</DialogTitle>
              <Description>Player {gameWinner} has won the game.</Description>
              <div className="flex gap-4">
                <button onClick={() => cleanUpGame()}>Play Again</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
    </oContext.Provider>
    </xContext.Provider>
    </TurnContext.Provider>
  )
}

export default App
