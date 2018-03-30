
	function make_canvas (canvas) {


		   var ctx = canvas.getContext('2d');

		ctx.beginPath();

		ctx.moveTo(75,40);

		ctx.bezierCurveTo(75,37,70,25,50,25);

		ctx.bezierCurveTo(20,25,20,62.5,20,62.5);

		ctx.bezierCurveTo(20,80,40,102,75,120);

		ctx.bezierCurveTo(110,102,130,80,130,62.5);

		ctx.bezierCurveTo(130,62.5,130,25,100,25);

		ctx.bezierCurveTo(85,25,75,37,75,40);

		ctx.fill();

		   canvas.style.visibility='visible';
	}

$(document).ready( function() {

	$('#cajavideo1').mouseover( function() {

		var canvas = document.getElementById('myCanvas');

		   if (canvas.getContext) {


		 	  make_canvas(canvas);


		   }		  
			

	}

		);

	$("#cajavideo2").mouseover( function() {

		var canvas = document.getElementById('myCanvas2');

		   if (canvas.getContext) {

		    make_canvas(canvas);


		   }		  
			

	}

		); 

	$("#cajavideo3").mouseover( function() {

		var canvas = document.getElementById('myCanvas3');

		   if (canvas.getContext) {

		   	  make_canvas(canvas);


		   }		  
			

	}

		); 

	$("#cajavideo4").mouseover( function() {

		var canvas = document.getElementById('myCanvas4');

		   if (canvas.getContext) {

		   	  make_canvas(canvas);

		   }		  
			

	}

		); 

	$("#cajavideo5").mouseover( function() {

		var canvas = document.getElementById('myCanvas5');

		   if (canvas.getContext) {

		   	  make_canvas(canvas);


		   }		  
			

	}

		); 

		$("#cajavideo1,#cajavideo2,#cajavideo3,#cajavideo4,#cajavideo5").mouseout( function() {

		

			$("canvas").css("visibility","hidden");
				  
			

	}

		);

		/*$("canvas").onclick( function() {
				
				$("canvas").css("visibility","hidden");

			}
			);*/

		

	// make a onclick handler that changes the color of the heart to red

    });

