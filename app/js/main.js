
$ (function(){

//----------------tabs------------------//

$('.product-details__item').on('click', function(e){
  e.preventDefault();
  $('.product-details__item').removeClass('product-details__item--active');
  $(this).addClass('product-details__item--active');

  $('.product-details__content-item').removeClass('product-details__content-item--active');
  $($(this).attr('href')).addClass('product-details__content-item--active');

});



 //----------------filter-price------------------//

   $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
      //   <input type="text"
      //   data-min="0">
      //   data-max="999"
      //   data-from="200"
      //   data-to="500"
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
     },
     
   });

    //----------------rateYo------------------//

   $('.filter-recent__star').rateYo({
      //onlyjs
      // html data-rateyo-rating="3.6" 
      spacing: "8px",
     starWidth: "11px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true //disabled changing
    });
    $('.product-list__all-rating, .product-details__rating').rateYo({
      spacing: "8px",
     starWidth: "19px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true 
    });


    //----------------slider------------------//

   $('.slider-top__items').slick({
      arrows: false,
      dots:true,
      fade:true,
     });

     $('.slider-thumb').slick({
      asNavFor: '.slider-big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
    });
    $('.slider-big').slick({
      asNavFor: '.slider-thumb',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    });

    
    $('.related__products').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      variableWidth: true,
      prevArrow: '<button class="slick-prev" type="button"><img src="images/slider/arrow-left.svg"><img></button>',
      nextArrow: '<button class="slick-next" type="button"><img src="images/slider/arrow-right.svg"><img></button>',

    });

    //----------------foorm-styler------------------//


$('.product-details__input').styler();




//----------------buttons------------------//

  $('.product-list__btn').on('click', function(){
    $('.product-list__btn').removeClass('product-list__btn--active');
    $(this).addClass('product-list__btn--active');
  });

$('.button-list').on('click', function(){
  $('.product-list__all-item').addClass('product-list__all-item--line');
});

$('.button-grid').on('click', function(){
   $('.product-list__all-item').removeClass('product-list__all-item--line');
});


 //----------------mixitup------------------//


     var mixer = mixitup('.products__all');
     var mixer = mixitup('.design__all');

});