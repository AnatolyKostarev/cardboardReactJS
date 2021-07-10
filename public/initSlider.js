/* jshint ignore:start*/

$(document).ready(function(){
    $('.products-slider__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.products-slider__bottom',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    prevArrow:'<div class="slider-arrow slider-arrow_left"></div>',
                    nextArrow:'<div class="slider-arrow slider-arrow_right"></div>'
                }
            }
        ]          
    });
    $('.products-slider__bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<div class="slider-arrow slider-arrow_left"></div>',
        nextArrow:'<div class="slider-arrow slider-arrow_right"></div>',
        asNavFor: '.products-slider__top',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1    
                }
            }
        ]
    });

    // подключение слайдера с отзывами

    $('.feedback-slider').slick({
        infinite: true,
        arrows: true,
        focusOnSelect: true,
        prevArrow:'<div class="slider-feedback-arrow slider-feedback-arrow_left"></div>',
        nextArrow:'<div class="slider-feedback-arrow slider-feedback-arrow_right"></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1
                }
            }
        ]       
    });


    
  });

  $(document).ready(function() {
    $('.header-text__button, .contacts-button').click(function() {
    $('.overlay').slideDown(400); 
      });
  });
  $(document).ready(function() {
    $('.popup-cross').click(function() {
    $('.overlay').slideUp(400);
      });
  });

  jQuery(function($){
    $('.main-text__inputphone, .order-text__inputphone, .popup__inputphone').mask('+7 (999) 999-99-99');
 });

//  $('form').submit(function(event) {
//     event.preventDefault();
//     if ($('.overlay').css("display", "block"))
//         $(".overlay").css("display", "none");
//     $.ajax({
//         type: "POST",
//         url: "../public/mailer/smart.php",
//         data: $(this).serialize()
//         }).done(function() {
//             $(this).find("input").val("");
//             alert("Заявка успешно подана");
//             $("form").trigger("reset");
//         });
//         return false;
// });

    $(document).ready(function() {
        $('.menu-btn__dec').click(function(event) {
        $('.menu-btn__dec, .menu-mobile').toggleClass('active');
        $('body').toggleClass('lock')
    });
});
    $(document).ready(function() {
        $('.menu-mobile__item__wrapper').click(function(event) {
        $('.menu-btn__dec, .menu-mobile').removeClass('active');
        $('body').removeClass('lock')
    });
});

  /* jshint ignore:end*/