	
	
	class Timeline extends React.Component {

		render() {

			return (

		<div className="notificationsFrame">

			<div className="panel">
				<div className="header flx-classic-gradient">
					<div className="menuIcon">
				<div className="dashTop"></div>
			<div className="dashBottom"></div>
		<div className="circle"></div>
		 			</div>

		<span className="title" style={{paddingTop:'4%'}}>@juanpablo</span>
	
<input type="text" className="searchInput" placeholder="Search ..." />

		<div className="fa fa-search searchIcon"></div>

	</div>

		<div className="content">
		<div className="item">
			<div className="avatar">
 			<img alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
			</div>
		<span className="time">Hace una hora</span>
		<p>Hello World!</p>
		</div>
		<article className="article container-8">
			<img src="http://127.0.0.1/dashboard/Fluxer/Perfil/images/juanpablo/logo-og.png" className="container-8"/>
		</article>
		<section className="container">
			<div className="container">
				
			</div>
		</section>
		<footer className="item">
		<div className="container">
		<div className="avatar">
 			<img alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
			</div>
			<div className="container" style={{paddingTop: '2%',paddingLeft: '2%',display: 'flex'}}>
			<input type="text" name="comment" className="input input-comment" placeholder="Coméntalo" style={{width: '70%',paddingBottom: '1%'}}/>

				<div className="container" style={{display: 'flex',paddingTop: '2%'}}>
				<div id="hand-hub">
					<i className="far fa-hand-peace" id="icon-hand" style={{color: '#8A8888'}}></i> 
					</div>
					<div id="comment-hub" style={{paddingLeft: '15%'}}>
						<i className="far fa-comment" id="icon-comment" style={{color: '#8A8888'}}></i> 
					</div>
				</div>
			</div>
			</div>
		</footer>				
	  </div>
	</div>
	</div>
)
}
}

 var timeline_element = document.getElementById('timeline');

   ReactDOM.render(<Timeline/>,timeline_element);

  

   