(function ($) {
    'use strict';

    
    $('.the-product').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

	// parallax effect
	// $(window).scroll(function(){
    //     var wscroll = $(this).scrollTop() - 0;

    //     $('.parallax-top').css({
    //         'transform' : 'translate(0px, '+wscroll/1+'%)'
    //     })
        
    //     $('.parallax-bottom').css({
    //         'transform' : 'translate(0px, -'+wscroll/6+'%)'
    //     })

	// 	if ($(window).width() <= 768){	
            
	// 	}	
		
	// });

})(jQuery);