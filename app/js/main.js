;(function(){

  var w = $('.slaider__cont').width();
  $('.slaider__items').width(w * $('.slaider__item').length);
  $('.slaider__items').css('left', -w);

  $('.slaider__item:last-child').prependTo('.slaider__items');

  $('#nextSlide').click(function(){
    $('.slaider__items').animate({
      'margin-left': -w
    }, 500, function(){
      $('.slaider__items').css('margin-left', 0);
      $('.slaider__item:first-child').appendTo('.slaider__items');
    });
  });

  $('#prevSlide').click(function(){
    $('.slaider__items').animate({
      'margin-left': w
    }, 500, function(){
      $('.slaider__items').css('margin-left', 0);
      $('.slaider__item:last-child').prependTo('.slaider__items');
    });
  });



}());
