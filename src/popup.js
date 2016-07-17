$(document).ready(function(){

  var target = "";
  var targetBox = "";

  function openBox(){
    target = $(this).attr("data-target");
    targetBox = '.pop-box[data-target = ' + target + ']';
    $(".pop-bg").fadeIn(300);
    $(targetBox).fadeIn(500).addClass('pop-active');
    return false;
  };

  $('a').click(openBox);
});