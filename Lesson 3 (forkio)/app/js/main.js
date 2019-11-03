$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    //$('.menu-nav').toggleClass('menu-nav_active');
    $('.nav-wrap').toggleClass('.nav-wrap_active');
    $('.nav-element').toggleClass('.nav-element_active');
});