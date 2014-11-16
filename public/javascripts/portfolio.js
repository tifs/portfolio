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


// CODE FOR COOL HOVER - from @er_d0s
// var holder;
// $(document).ready(function(){
//   $(".weirdHover").mousedown(function(e){
//     $(this).stopTime();
//     e.preventDefault();
//     window.location=$(this).attr("href");
//   });
//   $(".weirdHover").hover(function(){
//     holder = $(this).html();
//     var t = holder;
//     var len = t.length;
//     $(this).everyTime(20,function(i){
//       var newstring = "";
//       for (var i=0;i<len;i++)
//       {
//         newstring = newstring + String.fromCharCode(97 + Math.round(Math.random() * 25));
//       }
//       $(this).html(newstring);
//     });
//   },function(){
//     $(this).stopTime();
//     $(this).html(holder);
//   });
// });