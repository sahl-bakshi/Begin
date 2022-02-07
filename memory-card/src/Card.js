const Card = (props) => {
    const { link, handleClick, id} = props;
    return (
        <img id={id} src={link} onClick={handleClick} alt=''/>
    );
}

export default Card;