$(function () {
   $(`.header__slider`).slick({
      fade: true,
      arrows: true,
      prevArrow: `<img class="slider-arrows slider-arrows__left" src="../Images/Header-Arrow-Left.svg" alt=""></img>`,
      nextArrow: `<img class="slider-arrows slider-arrows__right" src="../Images/Header-Arrow-Right.svg" alt=""></img>`,
      asNavFor: '.slider-dots'
   });

   $('.slider-dots').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      focusOnSelect: false,
   });

   $('.cards').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: `<img class="slider-arrows slider-arrows__left" src="../Images/Header-Arrow-Left.svg" alt=""></img>`,
      nextArrow: `<img class="slider-arrows slider-arrows__right" src="../Images/Header-Arrow-Right.svg" alt=""></img>`,
      asNavFor: '.slider-map'
   });

   $('.slider-map').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: true,
      asNavFor: '.cards'
   })
   
   $('.slider-travel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: `<img class="slider-arrows slider-arrows__left" src="../Images/Header-Arrow-Left.svg" alt=""></img>`,
      nextArrow: `<img class="slider-arrows slider-arrows__right" src="../Images/Header-Arrow-Right.svg" alt=""></img>`,
   });

   $('.sleep-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: `<img class="slider-arrows slider-arrows__left" src="../Images/Header-Arrow-Left.svg" alt=""></img>`,
      nextArrow: `<img class="slider-arrows slider-arrows__right" src="../Images/Header-Arrow-Right.svg" alt=""></img>`,
   });

})



// Add Value To Booking
