import sadcatgif from './assets/sadcat.gif';

export default function CatPic(props){
    console.log("made it.", props.winner)
    if(props.winner == "TIE! Nobody won."){
        return <img src={sadcatgif}></img>
    }
}