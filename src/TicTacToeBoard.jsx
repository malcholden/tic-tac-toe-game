import { TurnContext } from "./App";
import { useState, useContext } from "react";
import './App.css'
import Box from "./Box";


export default function TicTacToeBoard(){
    
    const {whoseTurn, setWhoseTurn} = useContext(TurnContext);
    const {boxContent, setBoxContent} = useState("X");

    /**
     *  DO RESEARCH INTO MAPPING. POSSIBLY MAKE BOX BE FUNCITON INSTEAD OF CLASS, AND THEN MAP OUT ARRAY OF USESTATES FOR BOXES DISPLAY?
     */

    function turnMade(){
        setWhoseTurn(prev => (prev === "X" ? "O" : "X"));
        this.className="selectedBox";
    }   

    return(
        <div className="m-10">
            <div>
                <Box/>
                <Box/>
                <Box/>
                {/* <button onClick={turnMade}></button>
                <button onClick={turnMade}></button>
                <button onClick={turnMade}></button> */}
            </div>
            <div>
            <Box/>
            <Box/>
            <Box/>
                {/* <button onClick={turnMade}></button>
                <button onClick={turnMade}></button>
                <button onClick={turnMade}></button> */}
            </div>
            <div>
            <Box/>
            <Box/>
            <Box/>
                {/* <button onClick={turnMade}></button>
                <button onClick={turnMade}></button>
                <button onClick={turnMade}></button> */}
            </div>
            <button className="resetButton">Reset Game</button>
        </div>
        
    )
}