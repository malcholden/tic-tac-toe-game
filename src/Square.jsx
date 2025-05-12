import { TurnContext } from "./App";
import { useContext } from "react";
  
export default function Square(){

    const {whoseTurn, setWhoseTurn} = useContext(TurnContext);


    function turnMade(){
        setWhoseTurn(prev => (prev === "X" ? "O" : "X"));
    
    } 
    const squareIndiv = () => <button>X</button>

    const squares= [];

    for(let i = 0; i < 8; i++){
        squares.push(squareIndiv);
    }
    console.log(squares);

    return(
        <button onClick={turnMade()}>{whoseTurn}</button>

    );
}