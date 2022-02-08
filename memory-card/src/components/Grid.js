import Card from './Card';

const Grid = (props) => {
    const { links, handleClick } = props;
    return (
        <div>
            {links.map((link, index) => {
               return <Card key={index} link={link} handleClick={handleClick}></Card>
            })}
        </div>
    );
}

export default Grid;