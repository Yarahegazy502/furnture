$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center:true,
        loop: true,
        margin: 10,
        dots:false,
        responsiveClass: true,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 4,
            },
        }
    });
});