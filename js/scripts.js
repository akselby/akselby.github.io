jQuery(window).load( function($ ) {
    "use strict";
	jQuery('.menu .menu-items > .menu-item-has-children a').on('mouseenter', function(){
        jQuery(this).next('.menu .sub-menu').stop().slideDown();
    });
    jQuery('.menu .menu-items > .menu-item-has-children').on('mouseleave', function(){
        jQuery('.menu .sub-menu').stop().slideUp();
		jQuery('.menu .sub-menu > .menu-item-has-children > .sub-menu').css("height", 0);
    });
	
	// Masonry and Filter Option
    jQuery('.grid').isotope({
        itemSelector: '.item',
		percentPosition: true,
    });

    // Filter functions

    var $container = jQuery('.grid').isotope({
        itemSelector: '.item ',
		percentPosition: true,
    });

    // Bind filter button click
    jQuery('#filters').on( 'click', '.button', function() {
        var filterValue = jQuery( this ).attr('data-filter');
        // use filterFn if matches value
        var filterFns = '';
        filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
    });

    // Show Filter on top
    jQuery(window).scroll(function () {
        var $filterMenu = jQuery(".filter"),
        top = jQuery(this).scrollTop();
		
		if(jQuery('#jr-cont').find('div.portfolios').length != 0) {				
			
			if (top > 700) {
				$filterMenu.addClass("showFilter");
				// $(".filter.showFilter .col-sm-6").addClass("animated fadeInDown");
				jQuery(".show-filter").on( 'click', function(){
				jQuery(".filter-menu").addClass("filter-visible");
				jQuery(".filter-menu").removeClass("filter-invisible");
				});
				jQuery(".menu-align").addClass("under-filter");
			} else {
				$filterMenu.removeClass("showFilter");
				jQuery(".filter-menu").addClass("filter-invisible");
				jQuery(".filter-menu").removeClass("filter-visible");
				jQuery(".slim-wrap").removeClass("under-filter");
				// $(".filter .col-sm-6").removeClass("animated fadeInDown");
			}
		}
		
    });
	
	jQuery('.load-more').on('click', function(){
		var $this = jQuery('.load-more');
		var paged = jQuery(this).attr('data-paged');
		var max_num_pages = jQuery(this).attr('data-max_num_pages');
		var data =  {
				'action': 'load_more_action',
				'parameter': jQuery(this).data('parameter'),
				'paged': paged,
				'shortcode': jQuery(this).data('shortcode'),
			};
		var target = jQuery(this).data('target');


		jQuery.post(william.ajaxurl, data, function(response) {
			
			jQuery(target).append( response).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });	
			
			
			$this.attr('data-paged', (parseInt(paged)+1));

			if( $this.attr('data-paged') == $this.attr('data-max_num_pages') ){
				
				
				$this.text('No More Works').fadeIn('slow');
			}

		});	

		return false;
	});
});

jQuery(document).ready(function( $ ) {
	"use strict";

    // Smooth scroll
    $('a[href*=#]:not([href=#])').on( 'click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
	
	$('p').each(function() {
        var $this = jQuery(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
            $this.remove();
        }
    });

    // Adding Span Tag
    $('.top-big').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span>$&</span>"));
    });
    $('.map-text').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span>$&</span>"));
    });

    // Typing Style Animation
	$('.page-subtitle').each(function(){
		var string = $(this).data('string');
		$(".page-subtitle").typed({
			strings: [string],
			typeSpeed: 45,
			backDelay: 1000,
			loop: true,
			contentType: 'html',
			loopCount: false,
		});
	});
	
	if($('.page #jr-cont').find('div.panel-grid').length == 0) {
		$(".page #jr-cont").css("padding", "100px 0"); 	
	}
	
	if($('.single-portfolio #jr-cont').find('div.panel-grid').length == 0) {
		$(".single-portfolio #jr-cont").css("padding", "100px 0"); 	
	}
	
    $(".share-sev i").addClass("pe-7s-share");
    $(".share-sev").on('click',function(){
        $(".social-share").slideToggle();
        $(".share-sev i").toggleClass("pe-7s-share").toggleClass("pe-7s-close");
    })

    //Vimeo responsive
    $(".single-jr-content,.portfolio-content").fitVids();
	
	var url = $('.slim-wrap').data('image');
	var homelink = $('.slim-wrap').data('homelink');
	$('.slim-wrap ul.menu-items').slimmenu({
        resizeWidth: '767',
        collapserTitle: '<a href="'+homelink+'"><img src="'+url+'"></a>',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });
	
	$("#about-slide").owlCarousel({
        navigation : false,
        singleItem:true,
		autoPlay: true,
    });
	
	$('.banner-slider').each(function(){
	var prev = $(this).data('prev');
	var next = $(this).data('next');
	
	
	$(".banner-slider").owlCarousel({
		items: 1, //3 items above 1000px browser width
      navigation: true, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem:true,
	  pagination: false,
	  autoPlay: false,
	  nav:true,
	  navigationText : ["<style>.owl-theme .owl-controls .owl-buttons .owl-prev{cursor: url('"+prev+"'), auto}</style>","<style>.owl-theme .owl-controls .owl-buttons .owl-next{cursor: url('"+next+"'), auto}</style>"],
    });
	
	});
	
	$(".portfolio-banner-slider").owlCarousel({
		  items: 1, //3 items above 1000px browser width
		  navigation: true, // Show next and prev buttons
		  slideSpeed: 300,
		  paginationSpeed: 400,
		  singleItem:true,
		  pagination: false,
		  autoPlay: false,
		  nav:true,
		  navigationText : false,
    });

    // Social Icon Slide
    $(".share-post > a").on( 'click', function(){
        $(".share-i").slideToggle("200");
        $(".share-post .down-i").toggleClass("down-i-rot");
        $(".share-post > a.down-i").toggleClass("arrow-align");
    });

    // Video Popup
     $('.video-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });

    // Image Popup
    $('.view-cursor').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300,
        }
    });

     // Counter
     $('.count-value').counterUp({
        delay: 10,
        time: 1000
    });

    // Filter Menu Visibility
    $(".filter-overlay,.filter-list > li > a").on( 'click', function(){
    $(".filter-menu").addClass("filter-invisible");
    $(".filter-menu").removeClass("filter-visible");
    });

    var $window           = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch           = Modernizr.touch;

    if (isTouch) { $('.revealOnScroll').addClass('animated'); }

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

        // Showed...
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
            offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                    $this.addClass('animated ');
                    }, parseInt($this.data('timeout'),5));
                } else {
                    $this.addClass('animated');
                }
            }
        });
        // Hidden...
        $(".revealOnScroll.animated").each(function (index) {
            var $this = $(this),
            offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
                $(this).removeClass('animated')
            }
        });
    }
    revealOnScroll();
	
	 var authorContainer = $('body');
    // This will handle stretching the cells.
    $('.layout-full .stretch-content').each(function(){
        var $$ = $(this);

        var onResize = function(){

            $$.css({
                'margin-left' : 0,
                'margin-right' : 0,
                'padding-left' : 0,
                'padding-right' : 0
            });

            var leftSpace = $$.offset().left - authorContainer.offset().left;
            var rightSpace = authorContainer.outerWidth() - leftSpace - $$.parent().outerWidth();

            $$.css({
                'margin-left' : -leftSpace,
                'margin-right' : -rightSpace,
                'padding-left' : $$.data('stretch-type') === 'full' ? leftSpace : 0,
                'padding-right' : $$.data('stretch-type') === 'full' ? rightSpace : 0
            });
        };

        $(window).resize( onResize );
        onResize();

        $$.css({
            'border-left' : 0,
            'border-right' : 0
        });
    });
});