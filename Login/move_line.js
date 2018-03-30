 
	function maker_music() {
	

	 	 	var line_object = new move_n_width();

	 	 	    line_object.line.style.left="68%";
                line_object.line.style.background="rgb(0, 112, 255)";
	}

	function maker_video() {
		
		var line_object = new move_n_width();

		   line_object.line.style.left="34%";
           line_object.line.style.background="limegreen"; 
	}

     function maker_image() {
     	
     	   var line_object = new move_n_width();

     	       line_object.line.style.left="0%";
               line_object.line.style.background="rgb(0, 65, 255)";

     }


    function move_n_width() {

    	    this.line = document.getElementsByTagName('span')[0];

    	      var image_link = document.getElementById('images_link');
    	      	var video_link = document.getElementById('videos_link');
    	      	 var music_link = document.getElementById('music_link');


    	         image_link.addEventListener('click',maker_image,false);
    	         video_link.addEventListener('click',maker_video,false);
    	         music_link.addEventListener('click',maker_music,false);


    	      
    }

    window.addEventListener('load',move_n_width,false);