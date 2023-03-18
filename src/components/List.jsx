import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Fab } from '@mui/material';

/**
 * List
 * Component that displays list with details about selected technology
 * 
 * 
 * @param {setShowList, title, description, instructions} props 
 * @returns List that displays info from props it gets passed
 */
function List(props){

    /*
    * Handler for exit button
    */
    function handleClick(){

        props.setShowList(false);
    }


    //Maps the instcutions to the list
    const instructions = (props.instructions).map((instr, index) => 
        
            <li key={index}> {instr} </li>
    );
    
    

    return (

        <div id='list' style={props.showList ? {display:'inline'} : {display:"none"} }>
            
            <Fab className='exit-button' onClick={handleClick}> <ClearIcon className='mui-icon' /> </Fab>
            
            <h1> {props.title} </h1>
            <p className='description'> {props.description} </p>

            <ol>{instructions}</ol>
        </div>
    );
}

export default List;