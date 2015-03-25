
// FOR SMART DEVICE BUTTON
jQuery(document).ready(function($){
	$('#slider-4').liquidSlider({
    	//hashLinking:true,
		crossLinks:true,
		preloader:true,
		autoSlide: false,
		slideEaseDuration:1000,
  		heightEaseDuration:1000,
		autoHeight:true,
		//animateIn: "fadeIn",
    	//animateOut: "fadeOut",
		useCSSMaxWidth: 1230,
		includeTitle: true,
		//slideEaseFunction:'animate.css',
		panelTitleSelector :".title",
		mobileNavigation: true,
		responsive: true,
		dynamicTabsHtml: true,
		hoverArrows: false,
		hideSideArrows: true,
	});

	/* Fancybox Lightbox */
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false, // try changing to true and scrolling around the page
				title: {
					type: 'outside'
				},
				thumbs: {
					width: 50,
					height: 50
				}
			}
		}
	});

	$(".tweet-stream").tweet({
		username: "joelfuents",
		modpath: "twitter/",
		count: 1,
		template: "{text}{time}",
		loading_text: "loading twitter feed..."
	});

	/* Flickr Photostream */
	if ($.fn.jflickrfeed) $(".flickr-stream ul").jflickrfeed({
		qstrings: {
			id: "93466528@N03"
		},
		limit: 24,
		itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});

	/* hide #back-top first */
	$("#back-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

jQuery(function() {
	jQuery('.skillbar').appear(function() {
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
	});
});
//================= End =============//

/* ==============================================
	Contact Form
	=============================================== */

	$(document).ready(function () {

		'use strict';

		jQuery("#contact_form").validate({
			meta: "validate",
			submitHandler: function (form) {

				var s_name=$("#name").val();
				var s_lastname=$("#lastname").val();
				var s_email=$("#email").val();
				var s_phone=$("#phone").val();
				var s_comment=$("#comment").val();
				$.post("contact.php",{name:s_name,lastname:s_lastname,email:s_email,phone:s_phone,comment:s_comment},
				function(result){
				  $('#sucessmessage').append(result);
				});
				$('#contact_form').hide();
				return false;
			},
			/* */
			rules: {
				name: "required",

				lastname: "required",
				// simple rule, converted to {required:true}
				email: { // compound rule
					required: true,
					email: true
				},
				phone: {
					required: true,
				},
				comment: {
					required: true
				}
			},
			messages: {
				name: "Please enter your name.",
				lastname: "Please enter your last name.",
				email: {
					required: "Please enter email.",
					email: "Please enter valid email"
				},
				phone: "Please enter a phone.",
				comment: "Please enter a comment."
			},
		}); /*========================================*/
	});

	$(document).ready(function () {
    $(".switch-button").click(function () {
        if ($(this).is(".open")) {
            $(this).addClass("closed");
            $(this).removeClass("open");
            $(".styleswitcher").animate({
                "left": "-220px"
            })
        } else {
            $(this).addClass("open");
            $(this).removeClass("closed");
            $(".styleswitcher").animate({
                "left": "0px"
            })
        }
    })
});
$(document).ready(function () {
	if($.cookie("css")) {
		$("link.alt").attr("href",$.cookie("css"));
	}
	$(".color-scheme a").click(function () {
		$("link.alt").attr("href", $(this).attr("rel"));
		$.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
		return false
	});
	imgPathStart = "images/pattern/";
	imgPathEnd = new Array("pattern0.png", "pattern1.png", "pattern2.png", "pattern3.png", "pattern4.png", "pattern5.png", "pattern6.png", "pattern7.png", "pattern8.png", "pattern9.png");
	$(".background-selector li img").click(function () {
		backgroundNumber = $(this).attr("data-nr");
		$("body").css({
			background: "url('" + imgPathStart +
				imgPathEnd[backgroundNumber] + "')"
		})
	});
});
