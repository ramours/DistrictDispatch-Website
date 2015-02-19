// Let's get rid of this code and put it in the css as soon as it works
$(document).ready(function() {
    $('.viewport').mouseenter(function(e) {
        // $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(this).children('a').children('span').fadeIn(300);
    }).mouseleave(function(e) {
        // $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).children('a').children('span').fadeOut(300);
    });
    
    function centerImage() {
      var container = $('#aboutwrap');
      var height = container.outerHeight();
      container.children(".overlay").css("min-height", height);
    }

    $(window).on("load resize", centerImage);
     
    var el = document.getElementById('aboutwrap');
    if (el.addEventListener) {  
        el.addEventListener("webkitTransitionEnd", centerImage, false); // Webkit event
        el.addEventListener("transitionend", centerImage, false); // FF event
        el.addEventListener("oTransitionEnd", centerImage, false); // Opera event
    }
});

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
    var offsetY = 600;
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
