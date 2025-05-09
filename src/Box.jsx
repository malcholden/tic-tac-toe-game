export default class Box extends React.Component{

    constructor(isSelected){
        isSelected = false;
    }
    render()
    {
        return(
            <button 
            
            onClick={turnMade}
            className="selectedBox"
            
            >{boxContent}</button>

        );


    }
    
}