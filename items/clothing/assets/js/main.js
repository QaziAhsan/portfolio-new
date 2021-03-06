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

$('#carousel-1').owlCarousel({
  loop:false,
  margin:20,
  items:3,
  nav:true,
  dots:false,
  center:false,

  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
  }
})


$('#carousel-2').owlCarousel({
  loop:false,
  margin:20,
  items:3,
  nav:false,
  dots:false,
  center:false,

  responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      },
      1200:{
          items:6
      }
  }
})
/********Scroller**********/
  
  $(".scrollTo").on('click', function(e) {
       e.preventDefault();
       var target = $(this).attr('href');
       $('html, body').animate({
         scrollTop: ($(target).offset().top)
       }, 1000);
    });

/********Scroller**********/

new WOW().init();


/********Scroller**********/

const translate = document.querySelectorAll(".translate")
window.addEventListener('scroll',() => {
  let scroll = window.pageYOffset;
  translate.forEach(element => {
    let speed = element.dataset.speed;
    let speedfast = 0.5;
    element.style.backgroundPosition = `${scroll * speedfast}px ${scroll * speedfast}px `   ;
  })
});