import sadcatgif from './assets/sadcat.gif';

import { useContext } from 'react';

import { TurnContext } from './App';

export default function CatPic(props){
    console.log("made it.", props.winner)
    if(props.winner == "TIE! Nobody won."){
        return <img src={sadcatgif}></img>
    }
}