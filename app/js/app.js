$(".ancla").on("click" , function (e) {
    var anchor = $(this).attr("href");

    $('html,body').animate({
        scrollTop: $(anchor).offset().top
    }, 5000);
    e.preventDefault();
});