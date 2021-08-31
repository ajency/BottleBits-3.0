
$(document).ready(function(){	
	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })
	$(".product-detailed").addClass('loading');


	$('.shelf .shelf-block').on('click', function(){
		$(".shelf-block-bg").addClass('show_bg');
		$(".shelf").addClass('hidden');
		$(".carousel .shelf-block .shelf-block--wrap").addClass('shelf-block--slider');

		if($(this).hasClass('block1')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').next().addClass('next');
		}
		if($(this).hasClass('block2')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').next().addClass('next');
		}
		if($(this).hasClass('block3')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').next().addClass('next');
		}
		if($(this).hasClass('block4')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
		}
		$('.podium').addClass('podium-animate');
   	});


});

$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
        if (direction == 'up') $(this).carousel('off');
    },
    allowPageScroll: "vertical"
});

var $carousel = $('.carousel'),
    $carouselItems = $('.carousel-item', $carousel);

//This event is fired when the carousel has completed its slide transition.
	$carousel.on('slid.bs.carousel', function (e) {
    //Reset classes
    $carouselItems.removeClass('prev next');
    //Find current slide
    var $active = $(e.relatedTarget);
    if(($active).hasClass('wrap4')){
    	$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
    }else{
    	$active.next().addClass('next');
	}
	if(($active).hasClass('wrap1')){
		$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('prev');
	}
	$active.prev().addClass('prev');
});

$(".pointer-events-none").off('slid.bs.carousel');
$(".carousel-item.shelf-block--wrap.scrollUp").off('slid.bs.carousel');
$(".scrollUp .shelf-block--picture").off('slid.bs.carousel');
$(".scrollUp .shelf-block--region").off('slid.bs.carousel');
$('.scrollUpContainer').off('slid.bs.carousel');


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 500) {
        $(".shelf-block--slider.active").addClass("scrollUp");
        $(".shelf-block-bg.show_bg").addClass("scrollUpContainer");
         if($(".shelf-block--slider").hasClass("active")){
        	$(".tabs").addClass("showTab");
    	}
    }
});
var container = $('.shelf-block--region'),
    scrollTo = $('.disterllery');

	container.animate({
    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
});

$('.tabs ul li').on('click',function(){
	$('.tabs ul li').removeClass('active');
	$(this).addClass('active');
	if($('.tabs ul li:nth-child(2)').hasClass('active')){
		$('.shelf-block--region > .region').addClass('slide_up');
		$('.disterllery').addClass('showDetails');
		$('.tabs ul li:nth-child(1)').addClass('disable');
	}
	if($('.tabs ul li:nth-child(3)').hasClass('active')){
		$('.tabs ul li:nth-child(2)').addClass('disable');
	}
	if($('.tabs ul li:nth-child(4)').hasClass('active')){
		$('.podium').hide();
		$('.shelf-block-bg.show_bg').addClass('small_block');
		$('.disterllery').hide();
		$('.shelf-block--region > .region').hide();
		$('.bottle-details').removeClass('hide').fadeIn();
		$('.tabs ul li:nth-child(2)').addClass('disable');
		$('.tabs ul li:nth-child(3)').addClass('disable');
	}
});

$(".scrollUpContainer .shelf-block--picture").on('slid.bs.carousel', function (e) {
 	e.stopPropagation();
 	e.preventDefault();
});

$(".scrollUpContainer .carousel").swipe({
	    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
	 	e.stopPropagation();
	 	e.preventDefault();
 	}
});