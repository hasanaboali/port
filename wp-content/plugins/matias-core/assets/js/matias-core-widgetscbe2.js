(function ($) {
    "use strict";

	// $(window).on("elementor/frontend/init", function(){
	// 	elementorFrontend.hooks.addAction('frontend/element_ready/st_service_slider.default', function($scope) {
			
		
	// 	});
	// });

	$(window).on("elementor/frontend/init", function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/matias_tab.default', function($scope) {
			
			//custom tab
			$(".tablinks .nav-links").each(function () {
				var targetTab = $(this).closest(".singletab");
				targetTab.find(".tablinks .nav-links").each(function () {
					var navBtn = targetTab.find(".tablinks .nav-links");
					navBtn.click(function () {
						navBtn.removeClass('active');
						$(this).addClass('active');
						var indexNum = $(this).closest("li").index();
						var tabcontent = targetTab.find(".tabcontents .tabitem");
						$(tabcontent).removeClass('active');
						$(tabcontent).eq(indexNum).addClass('active');
					});
				});
			});
			//custom tab
			
		});
	});


	$(window).on("elementor/frontend/init", function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/matias_testimonial.default', function($scope) {
			
			//custom tab
			//>>>> Testimonial slide
			var swiper = new Swiper(".testimonial__slidewrap", {
				spaceBetween: 0,
				speed: 3000,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				pagination: {
					el: ".swiper-pagination3",
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
			//custom tab
			
		});
	});
	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/matias_marquee.default', function ($scope) {

			const element = $scope.find('.marquee_slide');
			let data_settings = element.data('marquee-slide-settings');

			var marquee_slide = new Swiper(".marquee_slide", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: true,
				allowTouchMove: false,
				speed: 20000,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
					reverseDirection: data_settings.reverse_slider
				},
				breakpoints: {
					320: {
						slidesPerView: 1.5,
						speed: 2000
					},
					640: {
						slidesPerView: 1.5,
					},
					800: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 2.5,
					},
					1300: {
						slidesPerView: 4,
					}
				},
			});
		});
	});

}(jQuery));
