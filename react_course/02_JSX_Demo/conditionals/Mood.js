function getMood() {
	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}

class Mood extends React.Component {
	render() {
		return (
			// <div >
			// 	<h1 > My Image </h1>
			// 		<img src="https://images.unsplash.com/photo-1662752384818-3d51ef2e6a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
			// </div >
			<div>
				<h1>My Current Mood is: { getMood() }</h1>
			</div>
		);
	}
}
