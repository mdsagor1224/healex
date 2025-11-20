/***************************************************
==================== JS INDEX ======================
****************************************************
01. Service Slider (Home One)
02. Team Slider (Home One)

****************************************************/



(function($){
    "use strict";


/*----------------------------------------*/
/*  01. Service Slider (Home One)
/*----------------------------------------*/

if ($('.vlServicetActive').length) {
    const vlServicetActive = new Swiper('.vlServicetActive', {
        slidesPerView: 4,
        spaceBetween: 30,
		loop:true,
        speed: 4000,
        keyboard: {
            enabled: true,
        },
		autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
        navigation: {
            nextEl: ".vl-review-button-next",
            prevEl: ".vl-review-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
      },
    });
}

/*----------------------------------------*/
/*  02. Team Slider (Home One)
/*----------------------------------------*/

if ($('.vlTeamActive').length) {
    const vlTeamActive = new Swiper('.vlTeamActive', {
        slidesPerView: 4,
        spaceBetween: 30,
		loop:true,
        keyboard: {
            enabled: true,
        },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
        navigation: {
            nextEl: ".vl-review-button-next",
            prevEl: ".vl-review-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          }
      },
    });
}

/*----------------------------------------*/
/*  03. Testimonial Slider (Home One)
/*----------------------------------------*/

if ($('.vlTestiomonialActive').length) {
    const vlTestiomonialActive = new Swiper('.vlTestiomonialActive', {
        slidesPerView: 1,
        spaceBetween: 30,
		loop:true,
        keyboard: {
            enabled: true,
        },
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
        navigation: {
            nextEl: ".vl-review-button-next",
            prevEl: ".vl-review-button-prev",
        },
    });
}



})(jQuery);