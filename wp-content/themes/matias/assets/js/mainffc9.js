(function ($) {
  "use strict";


    // Preloader area start here ***
    var windowOn = $(window);
    windowOn.on("load", function () {
      $(".matias_loader").fadeOut(500);
    });
    // Preloader area end here ***

    
  $(document).ready(function () {

    //side contact added
    $(".sidebar_nav_trigger").on("click", function (e) {
      $(".subside__barmenu").toggleClass("active");
    });
    //side contact added

    //>> Swiper Slider <<//

    //>>>> Team slide
    var swiper = new Swiper(".teamslide__wrap", {
      spaceBetween: 30,
      direction: 'horizontal',
      navigation: {
        nextEl: ".mcustom__next2",
        prevEl: ".mcustom__prev2",
      },
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-paginatio",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
        1600: {
          slidesPerView: 1,
        },
      }
    });
    //service slide home3

    
    //>>>> sponsor slider
    var swiper = new Swiper(".sponsor__wrap", {
      spaceBetween: 0,
      speed: 3000,
      loop: true,
      autoplay: {
        delay: 0
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5,
        },
      }
    });

    //>> Swiper Slider <<//		
    /***********
     mobile menu  js
     ************/
    $('.hamburger').on('click', function (event) {
      $(this).toggleClass('h-active');
      $('.main-nav').toggleClass('slidenav');
    });

    $('.header-home .main-nav ul li  a').on('click', function (event) {
      $('.hamburger').removeClass('h-active');
      $('.main-nav').removeClass('slidenav');
    });

    $(".main-nav .fl").on('click', function (event) {
      var $fl = $(this);
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $(this).parent().siblings().find('.fl').addClass('f_icon-plus').text("+");
      if ($fl.hasClass('f_icon-plus')) {
        $fl.removeClass('f_icon-plus').addClass('f_icon-minus').text("-");
      } else {
        $fl.removeClass('f_icon-minus').addClass('f_icon-plus').text("+");
      }
      $fl.next(".sub-menu").slideToggle();
    });

    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        700
      );
      return false;
    });
    //>> Main Menu <<//

    //>> Magnific Popup <<//
    $('.video-btn').magnificPopup({
      type: 'iframe',
      callbacks: {

      }
    });
    $('.imgc').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      }
    });
    //>> Magnific Popup <<//

    //>> Odometer Counter <<//
    $(".odometer-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    //>> Odometer Counter <<//

    //>> Wow Animation <<//
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    //>> Wow Animation <<//
    }
    

    //>> Aos Animation <<//
    AOS.init();
    //>> Aos Animation <<//

    //>> Scroll To Top <<//
    var progressPath = document.querySelector(".progress-wrap path");
    if (progressPath != undefined) {

      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
      var offset = 50;
      var duration = 1000;
      jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery(".progress-wrap").addClass("active-progress");
        } else {
          jQuery(".progress-wrap").removeClass("active-progress");
        }
      });
      jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    }
    //>> Scroll To Top <<//

    //>> Preloader <<//
    setTimeout(function () {
      $('.preloader__matias').fadeToggle();
    }, 1500);
    //>> Preloader <<//

  });
  //>> Javascrip Js <<//

  /* init swipper slider */
  var swiper = new Swiper(".blog_thumb__slider", {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    },
    pagination: false
  });


  /* Breadcrumb styles */
  $("[data-background").each(function () {
    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });


  var mySwiper = new Swiper('.marquee_slides', {
    spaceBetween: 100,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

}(jQuery));