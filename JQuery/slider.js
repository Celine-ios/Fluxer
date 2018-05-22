$('#slider').mouseover(function() {

      $('#slider').css('width','25%');
      $('#slider').css('background','-webkit-linear-gradient(left,#22f59d,#0069ff)');
      $('#slider').css('box-shadow','#00000073 20px 0px 100px');
      $('#slider-container').css('visibility','visible');

  });

  $('#slider').mouseout(function() {

    $('#slider').css('width','5%');
      $('#slider').css('background','transparent');
      $('#slider').css('box-shadow','none');
      $('#slider-container').css('visibility','hidden');

  });

