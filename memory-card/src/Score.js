const Score = (props) => {
    const { curr, best } = props;
    return (
        <div>
            <div>{curr}</div>
            <div>{best}</div>
        </div>
    );
}

export default Score;