class TimelineContent extends React.Component {

	render() {

		const post = this.props.activity;

		return(

	<div className="notificationsFrame">
			<div className="panel">
	
	<div className="header flx-classic-gradient">
					<div className="menuIcon">
				<div className="dashTop"></div>
			<div className="dashBottom"></div>
		<div className="circle"></div>
		 			</div>

		<span className="title">{post.title}</span>
	
<input type="text" className="searchInput" placeholder="Search ..." />

		<div className="fa fa-search searchIcon"></div>

	</div>

		<div className="content">
		<div className="item">
			<div className="avatar">
 			<img alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
			</div>
		<span className="time">Hace una hora</span>
		<p>Hola</p>
		</div>
		<article className="article container-8">
			<img src="http://127.0.0.1/dashboard/Fluxer/Perfil/images/juanpablo/logo-og.png" className="container-8"/>
		</article>
		<section className="container">
			<div className="container" id="reactions-hub">
			<div className="likes">
				<i className="far fa-hand-peace"></i>
				<p>{post.likes}</p>					
			</div>

			<div className="comment">
				<i className="far fa-comment"></i>
				<p>{post.comments}</p>					
					</div>
				</div>
		</section>
		<hr />
		<footer className="item">
		<div className="container">
		<div className="avatar">
 			<img alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
			</div>
			<div className="container" style={{paddingTop: '2%',paddingLeft: '2%',display: 'flex'}}>
			<input type="text" name="comment" className="input input-comment" placeholder="Sé Importante" style={{width: '70%',paddingBottom: '1%'}}/>
			</div>
			</div>
		</footer>				
	  </div>
	  </div>
	</div>
		)
	}

}

export default TimelineContent;