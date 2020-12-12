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

/********carousel**********/

        $('#carousel01').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          center:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })
      
      $('#carousel02').owlCarousel({
        loop:false,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

      new WOW().init();
