$(document).ready(function() {
var stickyNavTop = $('.nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.nav').addClass('sticky');
} else {
    $('.nav').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});

$(document).ready(function()
{
  $('#pollSlider-button').click(function() {
    if($(this).css("margin-right") == "200px")
    {
        $('.pollSlider').animate({"margin-right": '-=200'});
        $('#pollSlider-button').animate({"margin-right": '-=200'});
    }
    else
    {
        $('.pollSlider').animate({"margin-right": '+=200'});
        $('#pollSlider-button').animate({"margin-right": '+=200'});
    }


  });
 });     