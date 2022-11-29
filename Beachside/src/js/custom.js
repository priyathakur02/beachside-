$('.toggle').click(function(){
  $('.mobile-menu').show(300);
  $(this).hide();
  $('.close').show(300);
});

$('.close').click(function(){
  $('.mobile-menu').hide(300);
  $(this).hide();
      $('.toggle').show(300);

});