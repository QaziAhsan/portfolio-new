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

/********Portfolio-carousel**********/
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:2500,
  autoplayHoverPause:true,
  smartSpeed: 1500,
  animateIn: 'linear',
  animateOut: 'linear',
  items:3,
  nav:false,
  dots:false,
  center:false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1200:{
          items:5
      }
  }
})



        new WOW().init();



        function changeImage(){
          $('#active-item').attr('src',$(".carousel-indicators .active").children().attr("src"));
        }
        changeImage();
        
                $(".carousel").bind('slide.bs.carousel', function (e) {
                    setTimeout(function(){
                        changeImage();
                    }, 1);
                });
        
        
        
                new WOW().init();