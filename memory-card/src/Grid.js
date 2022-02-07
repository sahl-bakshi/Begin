import Card from './Card';
import { shuffle } from './utils';

const Grid = (props) => {
    const { links, handleClick } = props;
    return (
        <div>
            {shuffle(links).map((link, index) => {
               return <Card id={index} key={index} link={link} handleClick={handleClick}></Card>
            })}
        </div>
    );
}

export default Grid;