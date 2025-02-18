$(function(){
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        infinite: true,
        slidesToScroll: 1,
        swipeToSlide: true, // Дозволяє перетягування будь-якої кількості слайдів
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});