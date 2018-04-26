$(document).ready(function(){
  $('#float').on('touchstart click',(function(){
    $('#content').toggleClass("hide show"); 
    $('#toggle').toggleClass("fa-list-ul fa-times");
  }))
});
