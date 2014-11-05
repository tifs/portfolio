$(document).ready(function() {  
	var stickyNavTop = $('.columnz').offset().top;  
  
	var stickyNav = function(){  
	var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
  $('.columnz').addClass('sticky');  
	} else {  
  $('.columnz').removeClass('sticky');   
	}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
  stickyNav();  
	});  
});  

// $(document).ready(function() {
//   $('.header').scrollToFixed();
//   });