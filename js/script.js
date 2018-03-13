jQuery(document).ready(function ($) {
    "use strict";
    $(".header-slider").slick({
    autoplay:true, // Enables Autoplay
    rtl:true,
    autoplaySpeed:5000, // Autoplay Speed in milliseconds
    speed:500, // Transition Speed In Milliseconds
//    dots:true, // Enable or Disable Bullets
    arrows:true, // Enable or Disable Arrows
       
     responsive: [ // Responsive Breack Points
            {
                breakpoint: 1030,
                settings: {
                    arrows: false,
                }
            }
    ],
});
    
    
    
    /////////////////////آNews Slider////////
        $(".n-slider").slick({
    autoplay:true, // Enables Autoplay
    rtl:true,
    autoplaySpeed:5000, // Autoplay Speed in milliseconds
    speed:500, // Transition Speed In Milliseconds
//    dots:true, // Enable or Disable Bullets
   // arrows:true, // Enable or Disable Arrows
});
    
    
    // Sticky Header
   $(window).scroll(function(){
       if ($(window).scrollTop() >= 70) {
          $('.navbar').addClass('sticky');
       }
       else {
          $('.navbar').removeClass('sticky');
       }
   });
    
});