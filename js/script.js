$(document).ready(function () {
    $('.catalog').slick({
        slideToShow: 6,
        slidesToScroll: 1,
        dots: true,
        rows: 2,
        slidesPerRow: 3,
        arrows: true,
        nextArrow: '<button type="button" class="slick-prev"></button>',
        prevArrow: '<button type="button" class="slick-next "></button>',

    })
})