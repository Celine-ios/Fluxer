class NBox extends React.Component {
	state = {
			greet: 'Hello'
		}
	setting = () => {
			this.setState({
				greet: 'Bye'
			});
		}
	render() {
		return(
		<div className="white container-8" style={{textAlign: 'center', marginBottom: '4%'}}>
				<h1 style={{margin: '0'}} onClick={this.setting}>{this.state.greet}</h1>
			</div>	
			)
	}
}
class Notifications extends React.Component {
	render() {
		return(
		<div className="container-8" style={{textAling: 'center'}}>
			<NBox/>
			<NBox/>
			<NBox/>
			<NBox/>
		</div>
			)
	}
}
var notif = document.getElementById('notifications');
ReactDOM.render(<Notifications/>, notif);