
class PostContainer extends React.Component {


		render() {


			return (

<textarea className="container-7" cols="60" rows="4" style={{margin: '2% 10% 5% 5%',padding: '1%',fontFamily: '"Open Sans",sans-serif'}} placeholder="Sé Importante">
</textarea>

			)
		}

}

class App extends React.Component {


	  render() {

	  	  return (
	  	  	
	  	  	<div>
            <PostContainer />
            </div>
			
	  	  )
	  }

}
ReactDOM.render(<App/>,document.getElementById('root'));

 function SetPickOnPhoto() {

  
 	const elements = (<div>
     <div className="tt-pick" style={{top:'34.6%',zIndex:'1'}}></div>
	<PostContainer />
	</div>);

 	ReactDOM.render(elements,document.getElementById('root'));

 }


 function SetPickOnVideo() {

  
 	const elements = (<div>
     <div className="tt-pick" style={{top:'36.7%',zIndex:'1'}}></div>
	<PostContainer />
	</div>);

 	ReactDOM.render(elements,document.getElementById('root'));

 }

  function SetPickOnText() {

  
 	const elements = (<div>
     <div className="tt-pick" style={{top:'39.3%',zIndex:'1'}}></div>
	<PostContainer />
	</div>);

 	ReactDOM.render(elements,document.getElementById('root'));

 }


