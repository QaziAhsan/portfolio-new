/*******PreLoader********/

(function ($) {
  'use strict';

$(window).on('load', function () {
  $('.loader_wrapper')
    .delay(2000)
    .fadeOut('slow', function () {
      $(this).remove();
    });
});
})(window.jQuery);


/********Scroller**********/
  
  $(".scrollTo").on('click', function(e) {
       e.preventDefault();
       var target = $(this).attr('href');
       $('html, body').animate({
         scrollTop: ($(target).offset().top)
       }, 1000);
    });

/********Testimonial-carousel**********/

function changeImage(){
  $('#active-item').attr('src',$(".carousel-indicators .active").children().attr("src"));
}
changeImage();

        $(".carousel").bind('slide.bs.carousel', function (e) {
            setTimeout(function(){
                changeImage();
            }, 100);
        });



        new WOW().init();
