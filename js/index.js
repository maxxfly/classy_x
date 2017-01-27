$(function() {
//  window.alert('test');

  animate_paragraphe();
});

var position = 0;

function animate_paragraphe()
{
  $('.paragraphe').eq(0).addClass('displayed');

  setInterval(function() {
    if(position == 2)
    {
      position = 0;
    }
    else
    {
      position += 1;
    }

    $('.paragraphe').eq(position).addClass('displayed');
    $("#carousel").css('margin-left', (-1000*position) +'px');
  }, 8000)
}
