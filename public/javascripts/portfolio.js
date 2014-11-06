$(window).scroll(function(e) {
    if(window.scrollY > 130) {
      $('.fixed-nav').css('top', '0px');
} else {
      $('.fixed-nav').css('top', '-65px');
    }
  });
       
