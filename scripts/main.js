$(function () {

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

})

$(".counter").counter();
