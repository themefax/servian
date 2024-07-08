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










});
