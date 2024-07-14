// Появдение кнопки при скроле страницы
$(window).scroll(function () { // начало прокрутки
    let scrolled = $(window).scrollTop(); // Считаети сколько было прокручено

    if(scrolled > 200) { // Если высота прокрутки больше ... , значит показать кнопку
        $('#back_to_top').addClass('active');
    } else {
        $('#back_to_top').removeClass('active');
    }
});

// активация кнопки при нажатии
$('#back_to_top').click(function () {
    $('body,html').animate({scrollTop: 0}, 900); // 900 милисекунд скоргость анимации
});
  