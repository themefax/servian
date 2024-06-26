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



});
