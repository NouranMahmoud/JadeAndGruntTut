$(document).foundation();

var main = function(){
  $('.description').hide();
  $(".title").on("click", function(){
    var currentDescription = $(this).closest(".sub-container").children('.description'); 
    $('.description').not(currentDescription).slideUp("slow");
    currentDescription.slideDown("slow");

  });
}
$(document).ready(main);