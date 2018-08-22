
	class Config extends React.Component {
		state = {
			greet: "Hola"
		};
		changeSt = () => {
			this.setState({
				greet: "H"
			});
		};
		render() {
			return(
				<h1 onClick={this.changeSt}>{this.state.greet}</h1>
				)
		}
	}
	let root = document.getElementById('root');
	ReactDOM.render( <Config/>, root);