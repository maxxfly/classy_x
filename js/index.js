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
    position += 1;
    $("#carousel").css('margin-left', (-1000*position) +'px')
  }, 8000)
}
