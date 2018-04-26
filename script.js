$(document).ready(function(){
  $('#float').on('touchstart click',(function(){
    $('#content').toggleClass("hide show"); 
    $('#toggle').toggleClass("fa-list-ul fa-times");
  }))
  $('#content a').on('touchstart click',function(){
    $('#content').toggleClass("show hide"); 
    $('#toggle').toggleClass("fa-times fa-list-ul");
  })
});
