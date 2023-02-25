$(document).ready(function () {

    $('.menu_toggler, .menu-close').click(function () {
        $(".header_bottom").toggleClass("active");
        $("body").toggleClass("active");
    });
    var swiper = new Swiper('.slider_blogs', {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
        loop: true,
        speed: 800,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }
        autoplay: false
    });



    const mainAlpha = $('.main-alphabet');
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (let index = 0; index < alphabet.length; index++) {
        $(mainAlpha).append(`<a href="#" class="alphabet-item">${alphabet[index]}</a>`);
        $('.alphabet-item').first().addClass("active");
    }
    $('.alphabet-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });


    $(".coupon-details").click(function (e) {
        e.preventDefault();
        $(this).parents(".card-store").siblings(".details-hide").slideToggle()
        $(this).children('.fa-solid').toggleClass('active')
    });


    $('.star').click(function () {
        $(this).prevAll().addBack().css('color', '#ffcc00');
        $(this).nextAll().css('color', '#ccc');
    });







}) 