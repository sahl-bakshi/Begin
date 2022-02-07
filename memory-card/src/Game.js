import Score from './Score';
import Grid from './Grid';
import React from 'react';
import { useEffect, useState } from 'react';
import { data } from './data';


const Main = () => {

    const [curr, setCurr] = useState(0);
    const [best, setBest] = useState(0);
    const [clicked, setClicked] = useState([]);

    const handleClick = (event) => {
        console.log(event);
    }

    // CHNAGE WAY OF HANDLING THE CARDS
    // YOUR WAY ISNOT CORRECTWHENRANDOMIZINF
    

    return (
        <div>
            <Score curr={curr} best={best}></Score>
            <Grid links={data} handleClick={handleClick}></Grid>
        </div>
    );
}

export default Main;