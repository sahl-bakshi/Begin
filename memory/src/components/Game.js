import React from 'react';
import Score from './Score';
import Grid from './Grid';
import Header from './Header';
import { data } from '../data';
import { shuffle } from '../utils';
import { useState } from 'react';
import '../styles/style.scss';

// NO USE EFFECT NEEDED
// COULD HAVE USED FOR SHUFFLING / HANDLING SCORE

const Game = () => {
    const [curr, setCurr] = useState(0);
    const [best, setBest] = useState(0);
    const [cards, setCards] = useState(data);
    const [clicked, setClicked] = useState([]);

    const handleClick = (event) => {
        if (clicked.includes(event.target.src)) {
            if (best > curr) setBest(curr);
            setCurr(0);
            setClicked([]);
        } else {
            setCurr(curr + 1);
            setClicked((prev) => [...prev, event.target.src]);
        }
        setCards(shuffle(data));
    }

    return (
        <>
            <div className='containerForScoreAndHeader'>
                <Header></Header>
                <Score curr={curr} best={best}></Score>
            </div>
            <Grid links={cards} handleClick={handleClick}></Grid>
        </>
    );
}

export default Game;