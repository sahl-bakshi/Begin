const Card = (props) => {
    const { link, handleClick } = props;
    return (
        <img src={link} onClick={handleClick} style={{width: "150px"}} alt=''/>
    );
}

export default Card;