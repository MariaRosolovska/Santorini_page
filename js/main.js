$(function(){

    AOS.init({
        duration: 1400,
    });

    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/slider/prev_btn.png" alt=""></button>',

        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/slider/next_btn.png" alt=""></button>',

        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,

        responsive: [
            {
                breakpoint: 601,
                settings:{
                    arrows: false
                }
            }
        ]
    });


    $('.menu, .our-trip__body').on("click", "a", function (event){

        event.preventDefault();

        let id=$(this).attr('href'),

        top=$(id).offset().top;

        $(`body,html`).animate({ scrollTop: top}, 1500);
    });

    AOS.refresh();
});


