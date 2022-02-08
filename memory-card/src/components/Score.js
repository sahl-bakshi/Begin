const Score = (props) => {
    const { curr, best } = props;
    return (
        <div>
            <div>curr: {curr}</div>
            <div>best: {best}</div>
        </div>
    );
}

export default Score;