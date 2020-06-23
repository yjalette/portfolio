
$(document).ready(function () {
    $("#about, #projects, #contact, #nav__home-btn").hide();
    $("nav ul li").css("color", "#e0cfc3");
})

$("#nav__home-btn").click(() => {
    $("header, #nav__logo").show();
    $("#about, #projects, #contact, #nav__home-btn").hide();
    $("nav ul li").css("color", "#e0cfc3");
})

$("#nav__about-btn").click(function () {
    $("#about, #nav__home-btn").show();
    $("header, #projects, #contact, #nav__logo").hide();
    $("nav ul li").css("color", "#3d7786");
});

$("#nav__projects-btn").click(function () {
    $("#projects, #nav__home-btn").show();
    $("header, #about, #contact, #nav__logo").hide();
    $("nav ul li").css("color", "#3d7786");
});

$("#nav__contact-btn").click(function () {
    $("#contact, #nav__home-btn").show();
    $("header, #about, #projects, #nav__logo").hide();
    $("nav ul li").css("color", "#3d7786");
});

$("#nav__about-btn").click(function () {
    $('html,body').animate({
        scrollTop: $("#about").offset().top
    },
        'slow');
});

$("#nav__projects-btn").click(function () {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top
    },
        'slow');
});

$("#nav__contact-btn").click(function () {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top
    },
        'slow');
});

$("#nav__home-btn").click(function () {
    $('html,body').animate({
        scrollTop: $("header").offset().top
    },
        'slow');
});
