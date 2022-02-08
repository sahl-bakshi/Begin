import React from 'react';
import Score from './Score';
import Grid from './Grid';
import { data } from '../data';
import { shuffle } from '../utils';
import { useState } from 'react';

// NO USE EFFECT NEEDED
// COULD HAVE USED IT FOR SHUFFLING OR HANDLING SCORE

const Main = () => {
    const [curr, setCurr] = useState(0);
    const [best, setBest] = useState(0);
    const [cards, setCards] = useState(data);
    const [clicked, setClicked] = useState([]);

    const handleClick = (event) => {
        if (clicked.includes(event.target.src)) {
            setBest(curr);
            setCurr(0);
            setClicked([]);
        } else {
            setCurr(curr + 1);
            setClicked((prev) => [...prev, event.target.src]);
        }
        setCards(shuffle(data));
    }

    return (
        <div>
            <Score curr={curr} best={best}></Score>
            <Grid links={cards} handleClick={handleClick}></Grid>
        </div>
    );
}

export default Main;