
$(function(){


    //Banner Slider 

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:1000,
        arrows:true,
        speed:800,
        dots:false,
        prevArrow:'.leftArow',
        nextArrow:'.rightArow',
        fade:true,
      });
   

// Protfoliyo vanuBox
$('.venobox').venobox(); 

 //Protfoliuyto Slider 

 $('.prot-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:1000,
  speed:800,
  arrows:false,

  responsive: [
   
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    
  ],
  
});

// service slider
$('.servics-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  speed:1500,
  vertical:true,
  autoplaySpeed: 2000,
  centerMode:true,
  centerPadding:0,
  verticalSwiping:true,
  prevArrow:'.up',
  nextArrow:'.down',

  responsive: [
   
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        autoplay:false,
       
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay:true,
       
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        autoplay:true,
       
      }
    },
    
  ],
  
  
});
// Servics Slider 2
$('.servics-slider-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  vertical:false,
  autoplaySpeed: 2000,
  centerMode:true,
  centerPadding:0,
  
  responsive: [
   
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        autoplay:true,
       
      }
    },
    
  ]
  
});



//Team Slider

$('.feeback-details-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.tea-img-slider',
  
});
$('.tea-img-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  arrows: true,
  asNavFor: '.feeback-details-slider',
  centerMode: true,
  centerPadding:false,
  autoplay:true,
  autoplaySpeed: 2000,
  prevArrow:'.up2',
  nextArrow:'.down2',
 
  responsive: [
   
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        vertical:false,
        autoplay:true,
       
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        vertical:false,
        autoplay:true,
       
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        vertical:true,
        autoplay:true,
       
      }
    },
    
  ],
  
 
});

// counter
$('.counter').counterUp({
  delay: 10,
  time: 2500,
});


//Sponser Slider

$('.sponser-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
  centerMode:true,
  centerPadding:0,
  responsive: [
   
    {
      breakpoint: 576,
      settings: {
       
        slidesToShow: 2,
        autoplay:true,
      }
    },
    
  ],
  responsive: [
   
    {
      breakpoint: 768,
      settings: {
       
        slidesToShow: 3,
        autoplay:false,
      }
    },
    
  ],
 
});



});



