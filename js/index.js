$(function() {
//  window.alert('test');

  animate_paragraphe($(".paragraphe:first"));
});

var position = 0;

function animate_paragraphe(e)
{
  console.log(e);
  e.children().each(function(i, p)
    {
//      console.log("index ; " + i);
//      console.log("Paragraphe : " + p);
    }
  );

  setInterval(function() {
    if(position == 2)
    {
      position = 0;
    }
    else
    {
      position += 1;
    }

    $("#carousel").css('margin-left', (-1000*position) +'px')
  }, 8000)
}
