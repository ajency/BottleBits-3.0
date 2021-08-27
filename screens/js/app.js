$(document).ready(function(){
	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })

	$('.shelf .shelf-block').on('click', function(){
		$(".slider .shelf-block").addClass('shelf-block--slider');
		if($(this).hasClass('block1')){
			$('.slider .shelf-block--details').removeClass('expand');
			$('.slider').find('.shelf-block--details:nth-child(1)').addClass('expand');
		}
		if($(this).hasClass('block2')){
			$('.slider .shelf-block--details').removeClass('expand');
			$('.slider').find('.shelf-block--details:nth-child(2)').addClass('expand');
		}
		if($(this).hasClass('block3')){
			$('.slider .shelf-block--details').removeClass('expand');
			$('.slider').find('.shelf-block--details:nth-child(3)').addClass('expand');
		}
		if($(this).hasClass('block4')){
			$('.slider .shelf-block--details').removeClass('expand');
			$('.slider').find('.shelf-block--details:nth-child(4)').addClass('expand');
		}
		$('.podium').addClass('podium-animate');
   });

	$('.clickable-area .left').on('click', function(){
		$(".shelf-block--slider.expand").prev().removeClass('right');
		$(".shelf-block--slider.expand").next().removeClass('right');

		$(".shelf-block--slider.expand").removeClass('right');
		$(".shelf-block--slider.expand").prev().addClass('left');

		$(".shelf-block--slider.expand").addClass('left');
		$(".shelf-block--slider.expand").prev().removeClass('wrap-right');
		$(".shelf-block--slider.expand").removeClass('wrap-left');
	});
	$('.clickable-area .right').on('click', function(){
		$(".shelf-block--slider.expand").removeClass('left');
		$(".shelf-block--slider.expand").prev().removeClass('right');

		$(".shelf-block--slider.expand").next().removeClass('left');
		$(".shelf-block--slider.expand").next().addClass('right');

		$(".shelf-block--slider.expand").addClass('right');
		$(".shelf-block--slider.right").next().removeClass('wrap-left');

		$(".shelf-block--slider.expand").removeClass('wrap-right');
	});
});