$(function (){
    $('.main-btn').on('click', function () {
        $('.popup-wrap').fadeIn();
    });
    $('.close').on('click', function () {
        $('.popup-wrap').fadeOut();
    });
    $('.popup-wrap').on('click', function (e) {
        if (this === e.target) {
            $(this).fadeOut();
        }
    });

    var flag = true;
    $('.mobile-menu').on('click',function () {
        if(flag) {
            flag = false;

            $('.main-nav').slideToggle(function () {
                flag = true;
            });
        }
    });
});
