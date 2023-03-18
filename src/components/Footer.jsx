import React from 'react';

//Time variables
const date = (new Date()).toLocaleTimeString();
const year = (new Date()).getFullYear();



/**
 * Footer
 * Component for bottom of site 
 * 
 * 
 * @returns Footer with site infodynamic time
 */
function Footer(){

    //Hook that tracks and sets the time function
    const [time, setTime] = React.useState(date);



    //Function used to update time and hook state using setTime
    function updateTime(){

        const newTime = (new Date()).toLocaleTimeString();
        return setTime(newTime);
    }
    setInterval( updateTime, 1000 ); //Update time every second (1000 ms)



    return (
        
        <footer id='footer'>
            <p> {time} </p>
            <p> @philipjlin {year} </p> 
        </footer>
    );
}

export default Footer;