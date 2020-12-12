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

/********Top-Slider**********/

$(document).ready(function() {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    $progressBar.css('background-size','30% 100%')
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount+-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
    });
    
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      infinite: false,
  
    });  
  });
  


/********Scroller**********/
  
  $(".scrollTo").on('click', function(e) {
       e.preventDefault();
       var target = $(this).attr('href');
       $('html, body').animate({
         scrollTop: ($(target).offset().top)
       }, 2000);
    });

/********Testimonial-carousel**********/
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
