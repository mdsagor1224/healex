(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {


    /* ================================
       Advance Ani Js Start
    ================================ */

    if (window.innerWidth > 1199) {
        const items = document.querySelectorAll(".advance-wrap .advance-item");
        if (items.length < 3) return;

        const advanced = gsap.timeline({
            scrollTrigger: {
            trigger: ".advance-wrap",
            start: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
            },
            defaults: {
            ease: "power1.out", //
            duration: 1,
            },
        });
        advanced
            .from(items[0], { xPercent: 100, rotate: -8 })
            .from(items[1], { xPercent: 10, rotate: 4.13 }, "<")
            .from(items[2], { xPercent: -90, rotate: -6.42 }, "<")
      }
    
    }); // End Document Ready Function



  
  })(jQuery); // End jQuery

