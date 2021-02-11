(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });


    $('.dropdown').on('click', function() {
        $(this).toggleClass('open')
    });

    $('.minimize_btn').on('click', function() {
        $('.page_wrapper').toggleClass('minimize')
    });
    //Progress Bar Animation
    // $('.progress-bar').appear(function() {
    //     var element = $(this);
    //     var delay = 500;
    //     element.each(function(i) {
    //         $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

    //         $(this.span).prop('Counter', 0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: delay,
    //             easing: 'swing',
    //             step: function(now) {
    //                 $(this).text(Math.ceil(now) + '%');
    //             }
    //         });
    //     });
    // });



    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    var nice = $(".sidebar").niceScroll(); // The document page (body)


})(jQuery);