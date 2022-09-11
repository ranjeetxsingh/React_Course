class App extends React.Component {
    render() { 
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                    data={[1, 2, 3, 4, 5]}
                    isFunny // or isFunny = {true}   // both work the same way
                    // img = "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                />
                <Hello
                    to="Rambo"
                    bangs={8}
                    data={[1, 2, 3, 4, 5]}
                    isFunny // or isFunny = {true}   // both work the same way
                    // img = "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                />
                <Hello
                    to="Linda"
                    data={[1, 2, 3, 4, 5]}
                    isFunny // or isFunny = {true}   // both work the same way
                    // img = "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));