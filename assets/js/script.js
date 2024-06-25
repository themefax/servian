$(function () {

    "use strict";










    //MENU SEARCH
    $(".search").on("click", function () {
        $(".menu_search").addClass("show_search");
    });

    $(".close_search").on("click", function () {
        $(".menu_search").removeClass("show_search");
    });


    // NICE SELECT
    $('.select_js').niceSelect();





});
