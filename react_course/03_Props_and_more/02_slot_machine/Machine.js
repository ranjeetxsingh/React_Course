class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        let msg = "Cannot display msg";
        if (s1 == s2 && s2 == s3) {
             msg = "YOU WIN !!!";
        }
        else {
             msg = "YOU LOSE !!!";
        }
        return (
            <div>
                <p>SLOT: {s1} {s2} {s3}</p>
                <h3> {msg} </h3>
            </div>
        );
    }
}