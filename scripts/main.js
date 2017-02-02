$(function (){
    $('.main-btn').on('click', function () {
        $('.popup-wrap').fadeIn();
    });
    $('.close').on('click', function () {
        $('.popup-wrap').fadeOut();
    });
    $('.popup-wrap:not(.popup)').on('click', function () {
        $('.popup-wrap').fadeOut();
    });
});
