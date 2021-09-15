

$(document).ready(function(){	

	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })
	$(".product-detailed").addClass('loading');
	$(".my-collection").addClass('loading');

	$(".vertical-slider .slide-item").fadeOut();


	$('.shelf .shelf-block').on('click', function(e){
		$(".shelf-block-bg").addClass('show_bg');
		$(".shelf").addClass('hidden');
		$("body").addClass("pink_bg");
		$("footer").removeClass("hide");
		$(".cartWrap").removeClass("hide");

		if($(this).hasClass('block1')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').fadeIn().addClass('active');
			$('.vertical-slider').find('.slide-item.wrap1').addClass('active').fadeIn();
			$('.vertical-slider-desktop').removeClass("hide");
			$('.slide-dots').addClass('slide-dots-active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').next().addClass('next');
		}
		if($(this).hasClass('block2')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('active').fadeIn();
			$('.vertical-slider').find('.slide-item.wrap2').addClass('active').fadeIn();
			$('.slide-dots').addClass('slide-dots-active');
			$('.vertical-slider-desktop').removeClass("hide");
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').next().addClass('next');
		}
		if($(this).hasClass('block3')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').addClass('active').fadeIn();
			$('.vertical-slider').find('.slide-item.wrap3').addClass('active').fadeIn();
			$('.slide-dots').addClass('slide-dots-active');
			$('.vertical-slider-desktop').removeClass("hide");
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').next().addClass('next');
		}
		if($(this).hasClass('block4')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('active').fadeIn();
			$('.vertical-slider').find('.slide-item.wrap4').addClass('active').fadeIn();
			$('.slide-dots').addClass('slide-dots-active').fadeIn(1000);
			$('.vertical-slider-desktop').removeClass("hide");
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
		}
		if($(this).hasClass('block5')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').fadeIn().addClass('active');
			$('.vertical-slider').find('.slide-item.wrap3').addClass('active').fadeIn();
			$('.vertical-slider-desktop').removeClass("hide");
			$('.slide-dots').addClass('slide-dots-active');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap3').next().addClass('next');
		}
		if($(this).hasClass('block6')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('active').fadeIn();
			$('.vertical-slider').find('.slide-item.wrap1').addClass('active').fadeIn();
			$('.slide-dots').addClass('slide-dots-active');
			$('.vertical-slider-desktop').removeClass("hide");
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').next().addClass('next');
		}
		if($(this).hasClass('block7')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('active').fadeIn();
			$('.vertical-slider').find('.slide-item.wrap4').addClass('active').fadeIn();
			$('.slide-dots').addClass('slide-dots-active').fadeIn(1000);
			$('.vertical-slider-desktop').removeClass("hide");
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
		}
		if($(this).hasClass('block8')){
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').prev().addClass('prev');
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').addClass('active').fadeIn();
			$('.vertical-slider').find('.slide-item.wrap2').addClass('active').fadeIn();
			$('.slide-dots').addClass('slide-dots-active');
			$('.vertical-slider-desktop').removeClass("hide");
			$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap2').next().addClass('next');
		}
		if (event.cancelable) event.preventDefault();

	    dest = '?title=' + $(this).attr('data-title').replace(/ /g,"_");
	    window.history.pushState({ path: dest }, '', dest);

	    var title = $(this).attr('data-title');  
	    $('#title').text(title);

		$('.podium').addClass('podium-animate');

		$(window).on('popstate', function(event) {
			$('.carousel').find('.shelf-block--details .shelf-block--wrap').removeClass('prev');
	 		$('.carousel').find('.shelf-block--details .shelf-block--wrap').removeClass('active');
	 		$('.carousel').find('.shelf-block--details .shelf-block--wrap').removeClass('next');
	 		$(".shelf-block-bg").removeClass('show_bg');
			$(".shelf").removeClass('hidden');
			$('.podium').removeClass('podium-animate');
		});

   	});
	
	$(window).on("load", function(e) {
 	  var loc_address = window.location.href;
		console.log(loc_address);
		if(loc_address.includes("?title=")){
			e.stopPropagation();
		}
	});

});


$(".shelf-block-bg .carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
});

var $carousel = $('.shelf-block-bg .carousel'),
    $carouselItems = $('.carousel-item', $carousel);

//This event is fired when the carousel has completed its slide transition.
	$carousel.on('slid.bs.carousel', function (e) {
    //Reset classes
    $carouselItems.removeClass('prev next');
    //Find current slide
    var $active = $(e.relatedTarget);
    if(($active).hasClass('wrap2')){
    	$('.vertical-slider').find('.slide-item').removeClass('active').fadeOut();
    	$('.vertical-slider').find('.slide-item.wrap2').addClass('active').fadeIn();
 	}
 	if(($active).hasClass('wrap3')){
    	$('.vertical-slider').find('.slide-item').removeClass('active').fadeOut();
    	$('.vertical-slider').find('.slide-item.wrap3').addClass('active').fadeIn();
 	}    
    if(($active).hasClass('wrap4')){
    	$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap1').addClass('next');
    	$('.vertical-slider').find('.slide-item').removeClass('active').fadeOut();
    	$('.vertical-slider').find('.slide-item.wrap4').addClass('active').fadeIn();
    }else{
    	$active.next().addClass('next');
	}
	if(($active).hasClass('wrap1')){
		$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap4').addClass('prev');
    	$('.vertical-slider').find('.slide-item').removeClass('active').fadeOut();
    	$('.vertical-slider').find('.slide-item.wrap1').addClass('active').fadeIn();
	}
	$active.prev().addClass('prev');
});


$(".SWIPE_UP .shelf-block--picture").on('slid.bs.carousel', function (e) {
 	if (event.cancelable) e.stopPropagation();
 	if (event.cancelable) event.preventDefault();

});


if ($(window).width() < 767) {

	$(document).ready(function (e) {

		jquerySwipeHandler.handleSwipe(".carousel-item", [
	     jquerySwipeHandler.CLICK
	    ], function (direction) {
		  	e.preventDefault();
		});


	    jquerySwipeHandler.handleSwipe(".carousel-item", [
	     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
	    ], function (direction) {
		  	//console.log("swipe: ", direction);
		  	$(".carousel .carousel-item").addClass("hide");
		  	$(".vertical-slider").removeClass("hide").fadeIn(1000);
			$(".slide-item.active").addClass(direction);
			$(".shelf-block-bg").addClass("scrollUpContainer");
			$('.slide-dots .dot:nth-child(1)').removeClass('dot-active');
			$('.slide-dots .dot:nth-child(2)').addClass('dot-active');
		});


	    jquerySwipeHandler.handleSwipe(".region", [
	     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
	    ], function (direction) {
		  	//console.log("swipe: ", direction);
			$(".region").addClass("slide_up");
			$(".disterllery").addClass("showDisterlleryDetails");
			$(".tabs .region").removeClass("selected");
			$(".tabs .dest1").addClass("selected");
			$('.slide-dots .dot:nth-child(2)').removeClass('dot-active');
			$('.slide-dots .dot:nth-child(3)').addClass('dot-active');
			$(".shadow").removeClass("hide").fadeIn(1000);
		});

	    jquerySwipeHandler.handleSwipe(".disterllery", [
	     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
	    ], function (direction) {
		  	//console.log("swipe: ", direction);
		  	$(".disterllery").removeClass("showDisterlleryDetails").addClass("hideDisterlleryDetails");
			$(".disterllery2").addClass("showDisterlleryDetails1");
			$(".tabs .dest1").removeClass("selected");
			$(".tabs .dist2").addClass("selected");
			$('.slide-dots .dot:nth-child(3)').removeClass('dot-active');
			$('.slide-dots .dot:nth-child(4)').addClass('dot-active');
		});

	    jquerySwipeHandler.handleSwipe(".disterllery2", [
	     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
	    ], function (direction) {
		  	//console.log("swipe: ", direction);
		  	$(".disterllery2").removeClass("showDisterlleryDetails1").addClass("hideDisterlleryDetails1");
			$(".bottle_story").addClass("showBottleStoryDetails");
			$(".tabs .dist2").removeClass("selected");
			$(".tabs .bottleStory").addClass("selected");
			$('.slide-dots .dot:nth-child(4)').removeClass('dot-active');
			$('.slide-dots .dot:nth-child(5)').addClass('dot-active');
		});

	    jquerySwipeHandler.handleSwipe(".bottle_story", [
	     jquerySwipeHandler.SWIPE_DOWN, jquerySwipeHandler.SWIPE_UP
	    ], function (direction) {
		  	//console.log("swipe: ", direction);
			$(".bottle_story").removeClass("showBottleStoryDetails").addClass("hideBottleStory");
			$(".show_bg").addClass("small_block");
			$(".tabs .bottleStory").removeClass("selected");
			$(".tabs .details").addClass("selected");
			$(".podium").removeClass("podium-animate");
			$(".bottle-details").removeClass("hide");
			$("header").css({position: "fixed"});
			$(".slide-item.active .content").css({position: "fixed"});
			$('.slide-dots .dot:nth-child(5)').removeClass('dot-active');
			$('.slide-dots .dot:nth-child(6)').addClass('dot-active');

		});
	});
}

$(".hamburger-wrap").on("click", function(){
	$(".mobile-menu--overlay").addClass("open");
});
$(".cross").on("click", function(){
	$(".mobile-menu--overlay").removeClass("open");
});

$('.menu_list--items li').on('click', function(){
    $('.menu_list--items li.active').removeClass('active');
    $(this).addClass('active');
});

var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".plus");
var buttonMinus = $(".minus");

var incrementPlus = buttonPlus.click(function(e) {
	var $n = $(this)
		.parent(".quantity--count")
		.parent(".quantity-container")
		.find(".qty");
	$n.val(Number($n.val())+1 );
	var amount = Number($n.val());
	buttonMinus.removeClass('inactive');
	if(amount == 2){
		$(".glass2 .glass-filled").addClass("active");
	}
	if(amount == 3){
		$(".glass3 .glass-filled").addClass("active");
	}
	if(amount == 4){
		$(".glass4 .glass-filled").addClass("active");
	}
	if(amount == 5){
		$(".glass5 .glass-filled").addClass("active");
	}
	if(amount == 138){
		buttonPlus.addClass('inactive');
	}
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".quantity--count")
		.parent(".quantity-container")
		.find(".qty");
	var amount = Number($n.val());
	console.log(amount);
	if (amount > 1) {
		$n.val(amount-1);
	}
	if(amount == 2){
		buttonMinus.addClass('inactive');
		$(".glass2 .glass-filled").removeClass("active");
	}
	if(amount == 3){
		$(".glass3 .glass-filled").removeClass("active");
	}
	if(amount == 4){
		$(".glass4 .glass-filled").removeClass("active");
	}
	if(amount == 5){
		$(".glass5 .glass-filled").removeClass("active");
	}
});



$(".floating-btn .primary-button").on('click', function(){
	$(".bottle-details").addClass("hide");
	$(".tab--name").fadeOut();
	$(".button").fadeOut();
	$(".arrow").removeClass("hide");
	$(".shelf-block--info").fadeIn();
	$(".shelf-block-bg").addClass("cart");
	$(".wrap4 .bottle-details").fadeOut();
	$(".cart-wrapper").removeClass("hide");
	$('.slide-dots').removeClass('slide-dots-active').fadeOut(1000);
	var title = "Home";
    $('#title').text(title);
});

$(".arrow").on('click', function(){
	$(".bottle-details").removeClass("hide");
	$(".tab--name").fadeIn();
	$(".button").fadeIn();
	$(".arrow").addClass("hide");
	$(".shelf-block--info").fadeOut();
	$(".shelf-block-bg").removeClass("cart");
	$(".wrap4 .bottle-details").fadeIn();
	$(".cart-wrapper").addClass("hide");

	$('.slide-dots').addClass('slide-dots-active').fadeOut(1000);
	const urlParams = new URLSearchParams(window.location.search);
	const title = urlParams.get('title');

    $('#title').text(title);
});

$(".cart--buttons .primary-button").on('click', function(){
	$(".cart-wrapper").addClass("hide");
	$(".shelf-block-bg").addClass("animateBlock");
	$(".congratulations").removeClass("hide").fadeIn(1500);
	$(".congratulate_bg").addClass("animateBg");
	$(".shelf-block--picture").addClass("animatePicture");
	$(".outline-button").fadeIn();
});

$(".back-arrow").on('click', function(){

  	$(".carousel .carousel-item").removeClass("hide").fadeIn();
  	$(".vertical-slider").addClass("hide").fadeOut(1000);
	$(".slide-item.active").removeClass("SWIPE_UP");
	$(".shelf-block-bg").removeClass("scrollUpContainer");
	$('.slide-dots .dot').removeClass('dot-active');
	$('.slide-dots .dot:nth-child(1)').addClass('dot-active');

	$(".region").removeClass("slide_up");
	$(".disterllery").removeClass("showDisterlleryDetails");
	$(".tabs .region").addClass("selected");
	$(".tabs .dest1").removeClass("selected");
	$(".shadow").addClass("hide").fadeOut(1000);


  	$(".disterllery").removeClass("showDisterlleryDetails");
  	$(".disterllery").removeClass("hideDisterlleryDetails");
	$(".disterllery2").removeClass("showDisterlleryDetails1");
	$(".tabs .dest1").removeClass("selected");
	$(".tabs .dist2").removeClass("selected");

  	$(".disterllery2").removeClass("showDisterlleryDetails1");
  	$(".disterllery2").removeClass("hideDisterlleryDetails1");
	$(".bottle_story").removeClass("showBottleStoryDetails");
	$(".tabs .dist2").removeClass("selected");
	$(".tabs .bottleStory").removeClass("selected");


	$(".bottle_story").removeClass("showBottleStoryDetails");
	$(".bottle_story").removeClass("hideBottleStory");
	$(".show_bg").removeClass("small_block");
	$(".tabs .bottleStory").removeClass("selected");
	$(".tabs .details").removeClass("selected");
	$(".podium").addClass("podium-animate");
	$(".bottle-details").addClass("hide");
	$("header").css({position: "relative"});
	$(".slide-item.active .content").css({position: "unset"});

});
$(document).ready(function(){	


	$(".slide-dots .singleProd").on("click", function(){

	  	$(".carousel .carousel-item").removeClass("hide").fadeIn();
	  	$(".vertical-slider").addClass("hide").fadeOut(1000);
		$(".slide-item.active").removeClass("SWIPE_UP");
		$(".shelf-block-bg").removeClass("scrollUpContainer");
		$('.slide-dots .dot').removeClass('dot-active');
		$('.slide-dots .dot:nth-child(1)').addClass('dot-active');

		$(".region").removeClass("slide_up");
		$(".disterllery").removeClass("showDisterlleryDetails");
		$(".tabs .region").addClass("selected");
		$(".tabs .dest1").removeClass("selected");
		$(".shadow").addClass("hide").fadeOut(1000);


	  	$(".disterllery").removeClass("showDisterlleryDetails");
	  	$(".disterllery").removeClass("hideDisterlleryDetails");
		$(".disterllery2").removeClass("showDisterlleryDetails1");
		$(".tabs .dest1").removeClass("selected");
		$(".tabs .dist2").removeClass("selected");

	  	$(".disterllery2").removeClass("showDisterlleryDetails1");
	  	$(".disterllery2").removeClass("hideDisterlleryDetails1");
		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".tabs .dist2").removeClass("selected");
		$(".tabs .bottleStory").removeClass("selected");


		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".bottle_story").removeClass("hideBottleStory");
		$(".show_bg").removeClass("small_block");
		$(".tabs .bottleStory").removeClass("selected");
		$(".tabs .details").removeClass("selected");
		$(".podium").addClass("podium-animate");
		$(".bottle-details").addClass("hide");
		$("header").css({position: "relative"});
		$(".slide-item.active .content").css({position: "unset"});

	});

	$(".slide-dots .regionDetails").on("click", function(){
	  	$(".vertical-slider").removeClass("hide").fadeIn(1000);
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP");
		$(".shelf-block-bg").addClass("scrollUpContainer");
		$('.slide-dots .dot').removeClass('dot-active');
		$(this).addClass('dot-active');

		$(".region").removeClass("slide_up");
		$(".disterllery").removeClass("showDisterlleryDetails");
		$(".tabs .dest1").removeClass("selected");

		$(".disterllery").removeClass("showDisterlleryDetails");
		$(".disterllery").removeClass("hideDisterlleryDetails");
		$(".disterllery2").removeClass("showDisterlleryDetails1");
		$(".tabs .dest1").removeClass("selected");
		$(".tabs .dist2").removeClass("selected");

	  	$(".disterllery2").removeClass("showDisterlleryDetails1")
	  	$(".disterllery2").removeClass("hideDisterlleryDetails1");
		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".tabs .dist2").removeClass("selected");
		$(".tabs .bottleStory").removeClass("selected");

		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".bottle_story").removeClass("hideBottleStory");
		$(".show_bg").removeClass("small_block");
		$(".tabs .bottleStory").removeClass("selected");
		$(".tabs .details").removeClass("selected");
		$(".podium").addClass("podium-animate");
		$(".bottle-details").removeClass("hide");
		$("header").css({position: "absolute"});
		$(".slide-item.active .content").css({position: "unset"});

	});

	$(".slide-dots .dist1").on("click", function(){
		$(".region").addClass("slide_up");
		$(".disterllery").addClass("showDisterlleryDetails");
		$(".tabs .region").removeClass("selected");
		$(".tabs .dest1").addClass("selected");
		$('.slide-dots .dot').removeClass('dot-active');
		$(this).addClass('dot-active');
		$(".shadow").removeClass("hide").fadeIn(1000);

		$(".shelf-block-bg").addClass("scrollUpContainer");
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP");
		$(".carousel .carousel-item").addClass("hide");

		$(".disterllery").removeClass("hideDisterlleryDetails");
		$(".disterllery2").removeClass("showDisterlleryDetails1");
		$(".tabs .dist2").removeClass("selected");

	  	$(".disterllery2").removeClass("hideDisterlleryDetails1");
		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".tabs .bottleStory").removeClass("selected");

		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".show_bg").removeClass("small_block");
		$(".tabs .bottleStory").removeClass("selected");
		$(".tabs .details").removeClass("selected");
		$(".podium").addClass("podium-animate");
		$(".bottle-details").removeClass("hide");
		$("header").css({position: "absolute"});
		$(".slide-item.active .content").css({position: "unset"});

	});

	$(".slide-dots .dist2").on("click", function(){
	  	$(".disterllery").removeClass("showDisterlleryDetails").addClass("hideDisterlleryDetails");
		$(".disterllery2").addClass("showDisterlleryDetails1");
		$(".tabs .dest1").removeClass("selected");
		$(".tabs .dist2").addClass("selected");
		$('.slide-dots .dot').removeClass('dot-active');
		$(this).addClass('dot-active');

		$(".shelf-block-bg").addClass("scrollUpContainer");
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP");

		$(".region").addClass("slide_up");
		$(".tabs .region").removeClass("selected");

	  	$(".disterllery2").removeClass("hideDisterlleryDetails1");
		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".tabs .bottleStory").removeClass("selected");

		$(".bottle_story").removeClass("showBottleStoryDetails");
		$(".bottle_story").removeClass("hideBottleStory");
		$(".show_bg").removeClass("small_block");
		$(".tabs .bottleStory").removeClass("selected");
		$(".tabs .details").removeClass("selected");
		$(".podium").addClass("podium-animate");
		$(".bottle-details").removeClass("hide");
		$("header").css({position: "absolute"});
		$(".slide-item.active .content").css({position: "unset"});
	});

	$(".slide-dots .bottleStory").on("click", function(){
	  	$(".disterllery2").removeClass("showDisterlleryDetails1").addClass("hideDisterlleryDetails1");
		$(".bottle_story").addClass("showBottleStoryDetails");
		$(".bottle_story").removeClass("hideBottleStory");
		$(".tabs .dist2").removeClass("selected");
		$(".tabs .bottleStory").addClass("selected");
		$('.slide-dots .dot').removeClass('dot-active');
		$(this).addClass('dot-active');

		$(".shelf-block-bg").addClass("scrollUpContainer");
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP");

		$(".region").addClass("slide_up");
		$(".disterllery").removeClass("showDisterlleryDetails");
		$(".tabs .region").removeClass("selected");
		$(".tabs .dest1").removeClass("selected");

		$(".tabs .dest1").removeClass("selected");

		$(".show_bg").removeClass("small_block");
		$(".tabs .details").removeClass("selected");
		$(".podium").addClass("podium-animate");
		$(".bottle-details").addClass("hide");
		$("header").css({position: "absolute"});
		$(".slide-item.active .content").css({position: "unset"});

	});

	$(".slide-dots .details").on("click", function(){
		$(".bottle_story").removeClass("showBottleStoryDetails").addClass("hideBottleStory");
		$(".show_bg").addClass("small_block");
		$(".tabs .bottleStory").removeClass("selected");
		$(".tabs .details").addClass("selected");
		$(".podium").removeClass("podium-animate");
		$(".bottle-details").removeClass("hide");
		$("header").css({position: "fixed"});
		$(".slide-item.active .content").css({position: "fixed"});
		$('.slide-dots .dot').removeClass('dot-active');
		$(this).addClass('dot-active');

		$(".carousel .carousel-item").addClass("hide");
		$(".shelf-block-bg").addClass("scrollUpContainer");
		$(".vertical-slider").removeClass("hide").fadeIn(1000);
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP");

		$(".region").addClass("slide_up");
		$(".disterllery").removeClass("showDisterlleryDetails");
		$(".tabs .region").removeClass("selected");
		$(".tabs .dest1").removeClass("selected");

		$(".disterllery").removeClass("showDisterlleryDetails");
		$(".disterllery").addClass("hideDisterlleryDetails");
		$(".disterllery2").removeClass("showDisterlleryDetails1");
		$(".disterllery2").addClass("hideDisterlleryDetails1");
		$(".tabs .dest1").removeClass("selected");
		$(".tabs .dist2").removeClass("selected");

		$(".disterllery2").removeClass("showDisterlleryDetails1")
		$(".tabs .dist2").removeClass("selected");
	});
});

$(".tab_option ul .item").on("click", function(){
	$(".tab_option ul .item").removeClass("active");
	$(this).addClass("active");
});

$(".tab_option--block .item.bottle-story").on("click", function(){
	$(".swiper-slide").css({opacity: "0", transition: "opacity 1s ease-in"});
	$(".swiper-slide.bottle-story").css({opacity: "1", transition: "opacity 1s ease-in"});
});
$(".tab_option--block .item.disterllery").on("click", function(){
	$(".swiper-slide").css({opacity: "0", transition: "opacity 1s ease-in"});
	$(".swiper-slide.disterllery").css({opacity: "1", transition: "opacity 1s ease-in"});
});
$(".tab_option--block .item.region").on("click", function(){
	$(".swiper-slide").css({opacity: "0", transition: "opacity 1s ease-in"});
	$(".swiper-slide.region").css({opacity: "1", transition: "opacity 1s ease-in"});
});
$(".tab_option--block .item.bottle-details-wrapper").on("click", function(){
	$(".swiper-slide").css({opacity: "0", transition: "opacity 1s ease-in"});
	$(".swiper-slide.bottle-details-wrapper").css({opacity: "1", transition: "opacity 1s ease-in"});
});

// const container = document.querySelector('.swiper-wrapper');
                
// let startY;
// let scrollLeft;
// let scrollTop;
// let isDown;

// container.addEventListener('mousedown',e => mouseIsDown(e));  
// container.addEventListener('mouseup',e => mouseUp(e))
// container.addEventListener('mouseleave',e=>mouseLeave(e));
// container.addEventListener('mousemove',e=>mouseMove(e));

// function mouseIsDown(e){
//   isDown = true;
//   startY = e.pageY - container.offsetTop;
//   scrollLeft = container.scrollLeft;
//   scrollTop = container.scrollTop; 
// }
// function mouseUp(e){
//   isDown = false;
// }
// function mouseLeave(e){
//   isDown = false;
// }
// function mouseMove(e){
//   if(isDown){
//     e.preventDefault();
//     //Move vertcally
//     const y = e.pageY - container.offsetTop;
//     const walkY = y - startY;
//     container.scrollTop = scrollTop - walkY;

//   }
// }

$(".cartWrap .primary-button").on('click', function(){
	$(".vertical-slider-desktop").addClass("hide");
	$(".congratulations-desktop").removeClass("hide");
	$(".congratulations-desktop .congratulate_bg").addClass("animateBg");
	$(".congratulations-desktop .congratulate_bg .shelf-block--picture").addClass("animatePicture");
	$(".shelf-block-bg.show_bg").addClass("hide");
});

/* My Collection */

$(".shelf-wrapper--expanded").fadeOut();

$(".shelf-wrapper .block").on("click", function(){
	$(".fixed-image").fadeOut();
	$(".collection-blocks").fadeOut();

	$(".shelf-wrapper--expanded").fadeIn(2000);
	$("body").addClass("single-view");

	if($(this).hasClass('block1')){
		$(".shelf-wrapper--expanded .block").fadeOut();
		$(".shelf-wrapper--expanded .block-expand1").addClass("active-block").fadeIn();
		$("footer").removeClass("hide").fadeIn();

	}

	if($(this).hasClass('block2')){
		$(".shelf-wrapper--expanded .block-expand2").addClass("active-block");
	}

	if($(this).hasClass('block3')){
		$(".shelf-wrapper--expanded .block-expand3").addClass("active-block");
	}

	if($(this).hasClass('block4')){
		$(".shelf-wrapper--expanded .block-expand4").addClass("active-block");
	}
});

$(".shelf-wrapper--expanded .block .picture").on("click", function(){
	$(".shelf-wrapper--expanded").fadeOut();
	$(".shelf-bottle-details").fadeIn();
	$("header").css({position: "fixed"});
});

$(".back-to-main-shelf").on("click", function(){
	$(".collection-blocks").fadeIn();
	$(".shelf-wrapper--expanded").fadeOut();
	$(".fixed-image").fadeIn();
});

$(".back-to-single-view").on("click", function(){
	$(".shelf-wrapper--expanded").fadeIn();
	$(".shelf-bottle-details").fadeOut();
});