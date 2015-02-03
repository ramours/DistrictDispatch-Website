//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var isVisible = false;
$(window).scroll(function(){
    //jQuery to collapse the navbar on scroll
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    var firstElementPos = $('.gallery:first').position().top;
    var lastElementPos = $('.gallery:last').position().top;
    var offsetY = 800;
    var shouldBeVisible = $(window).scrollTop() > (firstElementPos - offsetY) && $(window).scrollTop() < lastElementPos;
    if (shouldBeVisible && !isVisible) {
      isVisible = true;
        
      //$(".gallery").addClass("come-in");
      $('.gallery').animate({top: "-=40", opacity: "1"}, "slow");
      //$('.gallery').fadeTo("slow", 1);
    } 
    else if (isVisible && !shouldBeVisible) {
      isVisible = false;
      //$(".gallery").removeClass("come-in");
      $('.gallery').animate({top: "+=40", opacity: "0"}, "slow");
      //$('.gallery').fadeTo("slow", 0);
    }
});
