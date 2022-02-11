const Score = (props) => {
    const { curr, best } = props;
    return (
        <div>
            <div>Curr: {curr}</div>
            <div>Best: {best}</div>
        </div>
    );
}

export default Score;