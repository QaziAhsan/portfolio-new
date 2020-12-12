
/********PreLoader**********/
        
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

/********Portfolio-carousel**********/
$('.owl-carousel').owlCarousel({
  loop:true,
  items:2,
  nav:false,
  center:true,
  margin:10,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1200:{
          items:4
      }
  }
})



        new WOW().init();

