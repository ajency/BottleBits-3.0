
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
    },
    allowPageScroll: "horizontal"
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


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 500) {
        $(".shelf-block--slider.active").addClass("scrollUp");
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
	}
	if($('.tabs ul li:nth-child(4)').hasClass('active')){
		$('.podium').hide();
		$('.shelf-block-bg.show_bg').addClass('small_block');
		$('.disterllery').hide();
		$('.shelf-block--region > .region').hide();
		$('.bottle-details').removeClass('hide').fadeIn();
	}
});