
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
      rating: 3.6, //onlyjs
      // html data-rateyo-rating="3.6" 
      spacing: "8px",
     starWidth: "11px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true //disabled changing
    });

   $('.slider-top__items').slick({
      arrows: false,
      dots:true,
      fade:true,
     });

     var mixer = mixitup('.products__all');
     var mixer = mixitup('.design__all');

      
     
    


});