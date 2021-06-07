$(function(){


// Bottom-Top

  $('.btm-top-btn').click(function(){

    $('body,html').animate({scrollTop:0},1000);

});

$(window).scroll(function(){
   var srcool = $(this).scrollTop();
   if(srcool>250){
    $('.btm-top-btn').fadeIn(500);
   }else{
    $('.btm-top-btn').fadeOut(500);
   }

   // for navBar background

   if(srcool>250){

    $('.navbar').addClass('nav-new');

}else{
    
    $('.navbar').removeClass('nav-new');

}

});


//Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -200
            }, 1500);
            return false;
        }
    }
});



  
});