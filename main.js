$(document).ready(function(){
  $('.first-square').on('click', function() {
    var displayCheck = $('.black-square').css('display');
    if (displayCheck === 'inline-block'){
      $('.black-square').css('display','none');
    } else {
      $('.black-square').css('display','inline-block');
    }

  });
})
