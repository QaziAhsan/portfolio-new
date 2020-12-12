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

$(document).ready(function () {
  $('.gallery li:lt(4)').css("display","inline-block");
  $('.less').hide();
  var items =  9;
  var shown =  4;
  $('.more').click(function () {
      $('.less').css("display","inline-block");
      shown = $('.gallery li:visible').length+4;
      if(shown< items) {
        $('.gallery li:lt('+shown+')').css("display","inline-block");
      } else {
        $('.gallery li:lt('+items+')').css("display","inline-block");
        $('.more').hide();
      }
  });
  $('.less').click(function () {
      $('.gallery li').not(':lt(4)').hide(300);
      $('.more').css("display","inline-block");
      $('.less').hide();
  });
});

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


