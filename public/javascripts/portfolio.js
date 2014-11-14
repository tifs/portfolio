$(window).scroll(function(e) {
    if(window.scrollY > 130) {
      $('.fixed-nav').css('top', '0px');
} else {
      $('.fixed-nav').css('top', '-65px');
    }
  });
       

function kimonoCallback(data) {
    // do something with the data
    // please make sure the scope of this function is global
  }

  $.ajax({
    "url":"https://www.kimonolabs.com/api/alnefw9q?apikey=eEQAr4JifJfWjFfbzUIIAFnWC3Sh6uLT&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});


  // LEMEME!

  // $('#masthead h1 a').hover(
  //   function () {
  //     $('body').addClass('hover');
  //     $(this).addClass('hover');
  //   },
  //   function () {
  //     $('body').removeClass('hover');
  //     $(this).removeClass('hover');
  //   }
  // );