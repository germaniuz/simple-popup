$(document).ready(function(){

  var target = "";
  var targetBox = "";
  var activeBox = "";

  function openBox(){
    target = $(this).attr("data-target");
    targetBox = '.pop-box[data-target = ' + target + ']';
    $(".pop-bg").fadeIn(300);
    $(targetBox).fadeIn(600).addClass('pop-active');
    return false;
  };

  function closeBox(){
    activeBox = $('.pop-box.pop-active');
    $('.pop-bg').fadeOut(600);
    $(activeBox).fadeOut(300);
  }

  $('a').click(openBox);
  $('.pop-close-btn, .pop-bg').click(closeBox);
});