var setIntervalCarousel;
var setIntervalParagraphe;
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

  setIntervalParagraphe = setInterval(function() {
    change_paragraphe();
  }, 8000);
}

function replay()
{
  $('.paragraphe A').hide();
  position_paragraphe = 0;
  $("#carousel").css('margin-left', '0px');

  clearInterval(setIntervalParagraphe);

  setIntervalParagraphe = setInterval(function() {
    change_paragraphe();
  }, 8000);
}

function change_paragraphe()
{
  if(position_paragraphe == 2)
  {
    $('.paragraphe A').show();
  }
  else
  {
    position_paragraphe = position_paragraphe += 1;
    $('.paragraphe').eq(position_paragraphe).addClass('displayed');

    // TODO: se baser sur la largeur du block et non une valeur fixée
    $("#carousel").css('margin-left', (-800*position_paragraphe) +'px');
  }
}
