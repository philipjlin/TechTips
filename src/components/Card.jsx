import React from 'react';

/**
 * Card
 * Component that displays a techonolgy name and logo in a card  
 * 
 * 
 * @param {setShowList, setList, title, imgPath, description, instructions} props 
 * @returns Card that acts as a button, that brings up List component when clicked 
 */
function Card(props){

    //Hook for tracking mouse over state
    const [isMouseOver, setIsMouseOver] = React.useState(false);



    /*
     * Handler for click event
     */
    function handleClick(){

        //Scroll to top of window
        window.scrollTo({top:0, behavior: 'smooth'});

        //Use prop from App to set showList hook (which shows List and blurs background)
        props.setShowList(!props.showList);

        //Sets the list associated with this particular card
        props.setList({

            title: props.title,
            description: props.description,
            instructions: props.instructions
        });
    }
    


    /*
     * Handler for mouse over event
     */
    function handleMouseOver(){
    
        setIsMouseOver(true);
    }



    /* 
     * Handler for mouse out event
     */
    function handleMouseOut(){

        setIsMouseOver(false);
    }



    return (
    
        <button id='card' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor:isMouseOver?"green":"gray"}}>
            <div>
                <h1> {props.title} </h1>
                <br />
                
                <img className='logo' src={props.imgPath} alt="img" />
            </div>
        </button>
    );
}

export default Card;