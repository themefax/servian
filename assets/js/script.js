$(function () {

    "use strict";


    // MENU FIX
    $(window).scroll(function () {
        const mainMenu = $('.main_menu');
        if (mainMenu.offset() != undefined) {
            if ($(window).scrollTop() > 1) {
                mainMenu.addClass('menu_fix');
            } else {
                mainMenu.removeClass('menu_fix');
            }
        }
    });


    // MENU SEARCH
    $(".search").on("click", function () {
        $(".menu_search").addClass("show_search");
    });

    $(".close_search").on("click", function () {
        $(".menu_search").removeClass("show_search");
    });


    // NICE SELECT
    $('.select_js').niceSelect();


    // VENIBOX JS
    $('.venobox').venobox();


    // PORTFOLIO SLIDER
    $('.portfolio_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // COUNTER UP
    $('.count').countUp();


    // TESTIMONIAL SLIDER
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });



    //=======BANNER 2 JS======
    $('.banner_two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

    });


    //======marquee js=======
    $('.marquee_animi').marquee({
        speed: 100,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });



    // TESTIMONISL 2 SLIDER
    $('.testimonial_2_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(".progress-bar").loading();
    $('input').on('click', function () {
        $(".progress-bar").loading();
    });




    // RANGE SLIDER
    $('.basic').alRangeSlider();
    const options = {
        range: { min: 10, max: 1000, step: 1 },
        initialSelectedValues: { from: 200, to: 800 },
        grid: { minTicksStep: 1, marksStep: 5 },
        theme: "dark",
    };

    $('.range_slider').alRangeSlider(options);
    const options2 = {
        orientation: "vertical"
    };


    // SELECT 2 JS
    $(document).ready(function () {
        $('.select_2').select2();
    });


    // STICKY SIDEBAR 
    $(".sticky_sidebar").stickit({
        top: 70,
    })




    // START RATING JS
    const stars = document.querySelectorAll(".select_rating i");

    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });


    // CALENDAR JS 
    // $(function () {
    //     $('#calendar_js').calendar({
    //         months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //         days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //     });
    // });




















});
