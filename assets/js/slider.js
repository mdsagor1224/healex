/***************************************************
==================== JS INDEX ======================
****************************************************
01. Service Slider (Home One)
02. Team Slider (Home One)
03. 
04. Service Slider (Home two)

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
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        navigation: {
            nextEl: ".vl-review-button-next",
            prevEl: ".vl-review-button-prev",
        },
    });
}


/*----------------------------------------*/
/*  04. Service Slider (Home two)
/*----------------------------------------*/

if ($('.vlServicetActive2').length) {
    const vlServicetActive2 = new Swiper('.vlServicetActive2', {
        slidesPerView: 4,
        spaceBetween: 30,
		    loop:true,
        speed: 3000,
        keyboard: {
            enabled: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
/*  05. Service Slider (Home three)
/*----------------------------------------*/

if ($('.vlServiceActive3').length) {
    const vlServiceActive3 = new Swiper('.vlServiceActive3', {
        slidesPerView: 1,
        spaceBetween: 30,
		    // loop:true,
        // keyboard: {
        //     enabled: true,
        // },
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
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
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          }
      },
    });
}


/*----------------------------------------*/
/*  06. Service Slider (Home five)
/*----------------------------------------*/

if ($('.vlServicetActive5').length) {
    const vlServicetActive5 = new Swiper('.vlServicetActive5', {
        slidesPerView: 4,
        spaceBetween: 30,
		    loop:true,
        speed: 3000,
        keyboard: {
            enabled: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
/*  Service Slider (Home 7)
/*----------------------------------------*/

if ($('.vlserviceactive7').length) {
    const vlserviceactive7 = new Swiper('.vlserviceactive7', {
        slidesPerView: 5,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-team-button-next",
            prevEl: ".tp-swiper-team-button-prev",
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
              slidesPerView: 5,
            }
          },
    });
}


/*----------------------------------------*/
/*  02. testimonial Slider (Home 9)
/*----------------------------------------*/

if ($('.vlTestimonialActive9').length) {
    const vlTestimonialActive9 = new Swiper('.vlTestimonialActive9', {
        slidesPerView: 3,
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
            slidesPerView: 3,
          },
          1200: {
            slidesPerView:3,
          }
      },
    });
}




})(jQuery);




