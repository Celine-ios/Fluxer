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
<<<<<<< HEAD
		<header className="container-8 flx-gradient-classic" style={{padding: '1% 0%'}}>
		<span className="txt-white">Notificación</span>
		</header>
				<div style={{display: 'flex',flexDirection: 'row',padding: '2%'}}>
					<div style={{display: 'flex',alignItems: 'center',width: '15%'}}>
						<img src="http://www.croop.cl/UI/twitter/images/doug.jpg" alt="etc" className="image-circle" style={{width: '100%'}}/>
					</div>
					<div style={{width: '85%',fontSize: '0.67em',padding: '0% 4%',textAlign: 'left'}}>
						<span>Juan Guzmán ha reaccionado a tu Post<br/>
							<small>Hace una hora</small>
						</span>
					</div>
				</div>
=======
				<h1 style={{margin: '0'}} onClick={this.setting}>{this.state.greet}</h1>
>>>>>>> 5b7c1015c8d036b26482ae5058819864910223d0
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