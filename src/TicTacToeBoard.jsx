import { TurnContext } from "./App";
import { useContext } from "react";
import Square from "./Square";

export default function TicTacToeBoard(){
    
    const {whoseTurn, setWhoseTurn} = useContext(TurnContext);
    
    function turnMade(){
        setWhoseTurn(prev => (prev === "X" ? "O" : "X"));

        
    }   

    

    return(
        // <div className="m-10">
        //     <div>
        //         <button onClick={turnMade}></button>
        //         <button onClick={turnMade}></button>
        //         <button onClick={turnMade}></button>
               
        //     </div>
        //     <div>
        //         <button onClick={turnMade}></button>
        //         <button onClick={turnMade}></button>
        //         <button onClick={turnMade}></button>
        //     </div>
        //     <div>
        //         <button onClick={turnMade}></button>
        //         <button onClick={turnMade}></button>
        //         <button onClick={turnMade}></button>
        //     </div>
        // </div>

        <div className="m-10">
            <div>
                <Square/>
                <Square/>
                <Square/>               
            </div>
            <div>
                <Square/>
                <Square/>
                <Square/>               
            </div>
            <div>
                <Square/>
                <Square/>
                <Square/>               
            </div>
        </div>
        
    )
}