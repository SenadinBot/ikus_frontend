$(function () {

    // Image Gallery
    $('.filtr-container').filterizr({
        animationDuration: 0.3,
        delayMode: 'progressive',
        easing: 'ease-out',
        filter: 'all',
    });

    $('.filter-nav li').on('click', function () {
        $('.filter-nav li').removeClass('active');
        $(this).addClass('active');
        var filter = $(this).data('fltr');
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Scroll To Top
    $('#toTopBtn').fadeOut();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 40) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 10);
        return false;
    });

})

$(".counter").counter();
