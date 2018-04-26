$(document).ready(function(){
  $('#float').on('touchstart click',(function(){
    $('#content').toggleClass("hide show"); 
    $('#toggle').toggleClass("fa-list-ul fa-times");
  }))
  $('#content a').on('touchstart click',function(){
    $('#content').removeClass("show").addClass('hide');
    $('#toggle').removeClass("fa-times").addClass('fa-list-ul');
  })
});
