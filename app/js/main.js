
$ (function(){

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

   $('.filter-recent__star').rateYo({
      //onlyjs
      // html data-rateyo-rating="3.6" 
      spacing: "8px",
     starWidth: "11px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true //disabled changing
    });
    $('.product-list__all-rating').rateYo({
      spacing: "8px",
     starWidth: "19px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true 
    });

   $('.slider-top__items').slick({
      arrows: false,
      dots:true,
      fade:true,
     });

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

     var mixer = mixitup('.products__all');
     var mixer = mixitup('.design__all');

});