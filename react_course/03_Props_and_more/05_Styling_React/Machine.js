class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const colors = { fontSize: '35px', backgroundColor: 'purple', padding: '5px' };
        const winner = (s1 === s2) && (s2 === s3);
        return (
            <div className="Machine" >
                <p style={colors} >
                    SLOT: {s1} {s2} {s3}
                </p>
                <h3 className={winner ? 'win' : 'lose'} >
                {winner ? 'Winner!' : 'Loser!'}
                </h3>
            </div>
        );
    }
}