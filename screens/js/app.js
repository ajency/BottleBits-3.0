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


	// $('.product-slider').slick({
	// 	dots: false,
	// 	arrows: false,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	centerMode: true,
	// });
});