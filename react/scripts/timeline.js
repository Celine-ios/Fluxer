
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
				<i class="far fa-hand-peace"></i>
				<p>{post.likes}</p>					
			</div>

			<div className="comment">
				<i className="far fa-comment"></i>
				<p>{post.comments}</p>					
					</div>
				</div>
		</section>
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


	class Timeline extends React.Component {

	/*	state = {

			default: 'Hola'

		};

		changeState = () => {

				this.setState({

					default: 'Juan'
			
			});
}*/


		render() {

			const activities = this.props.activity;
			

			return (

		<div>

			{activities.map((activity) => (
				
				<TimelineContent activity={activity}/>

		))}
			
	</div>
	


)
}
}

 var timeline_element = document.getElementById('timeline');

   var ajax = new XMLHttpRequest();

   ajax.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

     	alert(ajax.responseText);
    }

  };

  ajax.open('get','../php/ajax/searchposts.php',true);
  ajax.send();

  const posts = [{

  	title: '@juan',
  	comments: 23,
  	likes: 12

  	}, {

  	title: '@zuck',
  	comments: 23,
  	likes: 12

  	}];

   ReactDOM.render(<Timeline activity={posts}/>,timeline_element);

  

   