$(function() {
    // Menu
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });

    // add class to body when scroll
    $(document).ready(function(){

        // Add class to body when scrolling to add white background
        var targetDiv = $('body');

        $(window).scroll(function() {

             var windowpos = $(window).scrollTop();

             // change amount here to choose distance from top to add class
             if( windowpos >= 200 ) {
                  targetDiv.addClass('fixed');
             } else {
                  targetDiv.removeClass('fixed');
             }

        });
    });


    // link hashtag
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        // event.preventDefault();
    });

});