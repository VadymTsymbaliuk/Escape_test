$('.catalog').slick({
    slideToShow: 6,
    slidesToScroll: 3,
    dots: true,
    rows: 2,
    slidesPerRow: 3,
    arrows: true,
    nextArrow: '<button type="button" class="slick-prev"></button>',
    prevArrow: '<button type="button" class="slick-next "></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            slidesPerRow: 2,
            rows: 2,
            // infinite: true,
            // dots: true
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1,

        }
    }]
});

const formInput = document.querySelectorAll('.form-control')

formInput.forEach(function (el) {
    el.addEventListener("input", function (e) {
        if (el.value) {
            if (el.validity.typeMismatch) {
                el.setCustomValidity("Я очікую дані!");
            } else {
                el.setCustomValidity("")
            }
        } else {
            el.classList.toggle('error-value')
        }
    })
})
