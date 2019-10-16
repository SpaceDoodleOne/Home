$(document).ready(function(){
   $('.login_panel').hide();
   $('.register_panel').hide();
  $("#login").click(function(){
    $('.login_panel').fadeToggle();
    $('.register_panel').hide();
  });
  $("#register").click(function(){
    $('.register_panel').fadeToggle();
    $('.login_panel').hide();
  });

});
