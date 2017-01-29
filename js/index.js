var setIntervalCarousel;
var position_paragraphe = 0;

$(function() {
  animate_paragraphe();
  animate_carousel();

  $('.ia-container').bind('click touch', function() {
    clearInterval(setIntervalCarousel);
  });
});


function animate_carousel()
{
  setIntervalCarousel = setInterval(function() {
    $('.ia-container INPUT:checked ~ FIGURE > INPUT').prop( "checked", true );
  }, 8000);
}

function animate_paragraphe()
{
  $('.paragraphe').eq(0).addClass('displayed');

  setInterval(function() {
    position_paragraphe = (position_paragraphe == 2) ? 0 : position_paragraphe += 1;
    $('.paragraphe').eq(position_paragraphe).addClass('displayed');

    // TODO: se baser sur la largeur du block et non une valeur fixée
    $("#carousel").css('margin-left', (-800*position_paragraphe) +'px');
  }, 8000);
}
