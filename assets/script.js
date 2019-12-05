$(function () {
    $('[data-toggle="popover"]').popover()
  })

$('.popover-dismiss').popover({
    trigger: 'focus'
})

$(".weather").on("click", function(){
  $("#port-desk").hide();
  $("#port-more").removeAttr("hidden");
  $("#port-more").show(); 
})

$("#back").on("click", function(){
  $("#port-desk").show();
  $("#port-more").hide(); 
})