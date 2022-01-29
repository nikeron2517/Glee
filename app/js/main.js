$ (function(){
   $('.slider-top__items').slick({
      arrows: false,
      dots:true,
      fade:true,
     });
     $('').rateyo({
      // rating: 3.6,onlyjs
      // html data-rateyo-rating="3.6"
      starWidth: "17px",
      normalFill: "#",
      ratedFill: "#",
      readOnly: true //disabled changing
     });
});