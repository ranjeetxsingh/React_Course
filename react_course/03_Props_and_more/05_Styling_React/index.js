class App extends React.Component {
    render() {
        return (
            <div> 
                <Machine
                    s1="X"
                    s2="X"
                    s3="Y"
                />
                <Machine
                    s1="X"
                    s2="X"
                    s3="X"
                />
                <Machine
                    s1="X"
                    s2="Y"
                    s3="Y"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));