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
		<header className="container-8 flx-gradient-classic" style={{padding: '1% 0%'}}>
		<span className="txt-white">Notificación</span>
		</header>
				<div>
					<div></div>
					<div></div>
				</div>
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