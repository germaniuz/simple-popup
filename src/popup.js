$(document).ready(function(){

  var targetAttr = "data-popup-target";
  var activeClass = "pop-active";
  var target = "";
  var targetBox = "";
  var activeBox = "";

  function openBox(){
    target = $(this).attr(targetAttr);
    targetBox = '.pop-box[' + targetAttr + '=' + target + ']';
    $(".pop-bg").fadeIn(300);
    $(targetBox).fadeIn(600).addClass(activeClass);
    return false;
  };

  function closeBox(){
    activeBox = $('.pop-box.' + activeClass);
    $('.pop-bg').fadeOut(600);
    $(activeBox).fadeOut(300);
  }

  $('a[data-popup-target]').click(openBox);
  $('.pop-close-btn, .pop-bg').click(closeBox);
});