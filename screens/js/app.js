
window.addEventListener('popstate', function(event) {
	$(".vertical-slider-desktop").fadeOut();
	$("footer").addClass("hide");
	$(".cartWrap").fadeOut();
	$(".congratulations").fadeOut();
	$(".congratulations-desktop").fadeOut();

});

$(document).ready(function(){	

	$(".shelf .shelf-block").addClass(function(i) { return "block" + (i + 1) })
	$(".product-detailed").addClass('loading');
	$(".my-collection").addClass('loading');
	$(".sharing-view-block").addClass('loading');


	/* added Id's to the each blog on catalog page  */
	var i=0;
	$(".shelf .block").each(function(){
	    i++;
	    var newID='block'+i;
	    $(this).attr('id',newID);
	});

	var block = $('.shelf .shelf-block')
	var blockLength = block.length;

	var expandedBlock = $(".carousel-item.shelf-block--wrap");
	expandedBlock.addClass(function(i) { return "wrap" + (i + 1) });

	$(".slide-item.shelf-block--wrap").addClass(function(i) { return "wrap" + (i + 1) });

	block.each(function(index) {
		var currntBlockIndex = 'wrap'+(index+1);
 		block.on('click', function(e){

			$(".shelf-block-bg").addClass('show_bg');
			$(".shelf").addClass('hidden');
			$("body").addClass("pink_bg");
			$("footer").removeClass("hide");
			$(".cartWrap").removeClass("hide");

			if($(this).hasClass('block'+ (index + 1))){
				
				$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap'+ (index + 1)).prev().addClass('prev');
				$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap'+(index + 1)).fadeIn().addClass('active');
				$('.vertical-slider').find('.slide-item.wrap'+ (index + 1)).addClass('active').fadeIn();
				$('.vertical-slider-desktop').removeClass("hide");
				$('.slide-dots').addClass('slide-dots-active');
				$('.carousel').find('.shelf-block--details .shelf-block--wrap.wrap'+ (index + 1)).next().addClass('next');
				
				if(currntBlockIndex == 'wrap'+(blockLength)){
	    		 	$('.shelf-block--details .shelf-block--wrap.wrap1').addClass("next");
		    	}
		    	if(currntBlockIndex == 'wrap1'){
	    		 	$('.shelf-block--details .shelf-block--wrap.wrap'+(blockLength)).addClass("prev");
		    	}
			}
			
			if (event.cancelable) event.preventDefault();

	    	// dest = '?title=' + $(this).attr('data-title').replace(/ /g,"_");
		    // window.history.pushState({ path: dest }, '', dest);

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
		})
	});

	$(window).on("load", function(e) {
 	  var loc_address = window.location.href;
		//console.log(loc_address);
		if(loc_address.includes("?title=")){
			e.stopPropagation();
		}
	});

	$(".shelf-block-bg .carousel").swiperight(function() {  
	  	$(this).carousel('prev');  
	});  
	$(".shelf-block-bg .carousel").swipeleft(function() {  
	  	$(this).carousel('next');  
	});  

	var $carousel = $('.shelf-block-bg .carousel'),
	    $carouselItems = $('.carousel-item', $carousel);

		//This event is fired when the carousel has completed its slide transition.
		$carousel.on('slid.bs.carousel', function (e) {
	    //Reset classes
	    $carouselItems.removeClass('prev next');
	    //Find current slide
	    var $active = $(e.relatedTarget);

	    var itemLength = $carouselItems.length;

	    $carouselItems.each(function(index) {
	    	var currIndex = 'wrap'+(index+1);
		    if(($active).hasClass('wrap'+(index+1))){

		    	$carouselItems.removeClass('prev');
		    	$carouselItems.removeClass('next');
		    	$active.prev().addClass("prev");	
		    	$active.next().addClass("next");	
		    	if(currIndex == 'wrap'+(itemLength)){
	    		 	$('.shelf-block--details .shelf-block--wrap.wrap1').addClass("next");
		    	}
		    	if(currIndex == 'wrap1'){
	    		 	$('.shelf-block--details .shelf-block--wrap.wrap'+(itemLength)).addClass("prev");
		    	}

		    	$('.vertical-slider').find('.slide-item').removeClass('active').fadeOut();
		    	$('.vertical-slider').find('.slide-item.wrap'+(index+1)).addClass('active').fadeIn();
		 	} 
	 	});

	});
});



if ($(window).width() < 767) {

	$(document).ready(function (e) {

		jquerySwipeHandler.handleSwipe(".carousel-item .podium", [
	     jquerySwipeHandler.CLICK
	    ], function (direction) {
	    	$("header").css({position:"fixed"});
			$(".shelf-block-bg").addClass("small_block cart");
			$(".carousel-item").addClass("hide");
			$(".vertical-slider").removeClass('hide');
			$(".slide-item").addClass("SWIPE_UP");
			$(".shelf-block--region").addClass("hide");
			$(".content").css({position:"fixed"});
			$(".slide-dots").fadeOut();
			$(".tab--name").fadeOut();
			$(".button").fadeOut();
			$(".arrow").removeClass("hide");
			$(".shelf-block--info").fadeIn();
			$(".wrap4 .bottle-details").fadeOut();
			$(".cart-wrapper").removeClass("hide");
			$(".podium").removeClass("podium-animate");
			$('.slide-dots').removeClass('slide-dots-active').fadeOut(1000);
			var title = "Home";
		    $('#title').text(title);
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
			$('.slide-item.shelf-block--wrap.active').removeAttr("style");
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

/* hamburger menu action  */
$(".hamburger-wrap").on("click", function(){
	$(".mobile-menu--overlay").addClass("open");
	$("header").css({position:"absolute"});
	$("#content").fadeOut();
});
$(".cross").on("click", function(){
	$(".mobile-menu--overlay").removeClass("open");
	$("#content").fadeIn();
});

$('.menu_list--items li').on('click', function(){
    $('.menu_list--items li.active').removeClass('active');
    $(this).addClass('active');
});

/* increment and decrement quantity   */
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
	//console.log(amount);
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


/* Details page button   */
$(".product-detailed .floating-btn .primary-button").on('click', function(){
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

/* back button on cart view   */
$(".arrow").on('click', function(){
	$(".bottle-details").removeClass("hide");
	$(".tab--name").fadeIn();
	$(".button").fadeIn();
	$(".arrow").addClass("hide");
	$(".tab--name span").removeClass("selected");
	$(".details").addClass("selected");
	$(".shelf-block--info").fadeOut();
	$(".shelf-block-bg").removeClass("cart");
	$(".wrap4 .bottle-details").fadeIn();
	$(".cart-wrapper").addClass("hide");

	$('.slide-dots').addClass('slide-dots-active').fadeIn(1000);
	const urlParams = new URLSearchParams(window.location.search);
	const title = urlParams.get('title');

    $('#title').text(title);
});

/* redirect to congratulation page  */
$(".cart--buttons .primary-button").on('click', function(){
	window.location = "congratulation.html";
	$(".shelf-block-bg.small_block").css({background:"white"});
	$(".shelf-block-bg.small_block .shelf-block").addClass("hide");
	$(".cart-wrapper").addClass("hide");
	//$(".shelf-block-bg").addClass("animateBlock");
	//$(".congratulations").removeClass("hide").fadeIn(1500);
	//$(".congratulate_bg").addClass("animateBg");
	//$(".shelf-block--picture").addClass("animatePicture");
	//$(".outline-button").fadeIn();
});

/* back arrow on details page to go to single view  */

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
	$("header").css({position: "fixed"});
	$(".slide-item.active .content").css({position: "unset"});

});

/* on click action on dots  */

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
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP").fadeIn();
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
		$(".vertical-slider .slide-item.active").addClass("SWIPE_UP").fadeIn();
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

/* top tab title changes  */

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

/* redirect to congratulation page  */
$(".cartWrap .primary-button").on('click', function(){
	window.location = "congratulation.html";
	$(".vertical-slider-desktop").addClass("hide");
	$(".congratulations-desktop").removeClass("hide");
	$(".congratulations-desktop .congratulate_bg").addClass("animateBg");
	$(".congratulations-desktop .congratulate_bg .shelf-block--picture").addClass("animatePicture");
	$(".shelf-block-bg.show_bg").addClass("hide")
	$("footer").addClass("hide");
});




/* My Collection */

$(document).ready(function(){	

	$(".popup").fadeOut();
	$(".collection-blocks .shelf-wrapper .block").addClass(function(i) { return "block" + (i + 1) });
	$(".shelf-wrapper--expanded .block").addClass(function(i) { return "block-expand" + (i + 1) })

	var collectionblock = $('.collection-blocks .shelf-wrapper .block')
	var collectionblockLength = collectionblock.length;

	collectionblock.each(function(index) {

		collectionblock.on('click', function(e){
			$(".fixed-image").fadeOut();
			$(".tool-tip").removeClass("show-customize");
			$(".shelf-wrapper--expanded").fadeIn();
			$("body").addClass("single-view");

			if($(this).hasClass('block'+(index + 1))){
				$(".shelf-wrapper--expanded .block").fadeOut();
				$('.shelf-wrapper--expanded .block-expand'+(index + 1)).addClass("active-block").fadeIn();
				$("footer").removeClass("hide").fadeIn();


				if($('.shelf-wrapper--expanded .block-expand1').hasClass("active-block") || $('.shelf-wrapper--expanded .block-expand5').hasClass("active-block")){
					$("#myCarousel1").fadeOut();
					$("#myCarousel2").fadeOut();
					$("#myCarousel3").fadeOut();
					$("#myCarousel").fadeIn();
				}
				else if($('.shelf-wrapper--expanded .block-expand2').hasClass("active-block") || $('.shelf-wrapper--expanded .block-expand6').hasClass("active-block")){
					$("#myCarousel").fadeOut();
					$("#myCarousel2").fadeOut();
					$("#myCarousel3").fadeOut();
					$("#myCarousel1").fadeIn();
				}
				else if($('.shelf-wrapper--expanded .block-expand3').hasClass("active-block") || $('.shelf-wrapper--expanded .block-expand7').hasClass("active-block")){
					$("#myCarousel").fadeOut();
					$("#myCarousel1").fadeOut();
					$("#myCarousel3").fadeOut();
					$("#myCarousel2").fadeIn();
				}
				else if($('.shelf-wrapper--expanded .block-expand4').hasClass("active-block") || $('.shelf-wrapper--expanded .block-expand8').hasClass("active-block")){
					$("#myCarousel").fadeOut();
					$("#myCarousel1").fadeOut();
					$("#myCarousel2").fadeOut();
					$("#myCarousel3").fadeIn();
				}
			}
		})
	});

});

$(".shelf-wrapper--expanded .block .picture").on("click", function(){
	$(".shelf-wrapper--expanded").fadeOut();
	$(".shelf-bottle-details").fadeIn().addClass("show-details");
	$(".themes-button").removeClass("show-buttons");
	$(".shelf").css({position: "fixed"});
	$("header").css({position: "fixed"});
	$(".my-collection .shelf .info-tab").removeClass("yellow green");
	$(".item").removeClass("active");
	$(".block-slider .filled-button").addClass("floating-btn").fadeIn();

	if($(this).data('product') == "product1"){
		$(".block-slider .item").removeClass("active");
		$(".block-slider .item.product1").addClass("active");
	}
	else if($(this).data('product') == "product2"){
		$(".block-slider .item").removeClass("active");
		$(".block-slider .item.product2").addClass("active");
	}
	else if($(this).data('product') == "product3"){
		$(".block-slider .item").removeClass("active");
		$(".block-slider .item.product3").addClass("active");
	}
	else if($(this).data('product') == "product4"){
		$(".block-slider .item").removeClass("active");
		$(".block-slider .item.product4").addClass("active");
	}
});

// $(".back-to-main-shelf").on("click", function(){
// 	$(".collection-blocks").fadeIn();
// 	$(".shelf-wrapper--expanded").fadeOut();
// 	$(".shelf-wrapper--expanded .block").removeClass("active-block");
// 	$(".fixed-image").fadeIn();
// 	$(".carousel").removeAttr("style");
// });


$(".back-to-single-view").on("click", function(){
	$(".shelf-wrapper--expanded").fadeIn();
	$(".shelf-bottle-details").fadeOut().removeClass("show-details");
	$(".shelf").css({position: "relative"});
	$("header").css({position: "absolute"});
	if($(".block").hasClass("green")){
		$(".my-collection .shelf .info-tab").addClass("green");
	}
	if($(".block").hasClass("yellow")){
		$(".my-collection .shelf .info-tab").addClass("yellow");
	}
});

/* sharing */

$(".slide-image").on("click", function(){
	$("body").addClass("rotation-sharing");
	$(".sharing-view").fadeIn(1000);
	$(".shelf").css({position: "relative"});
	$(".show-details .info-tab").fadeOut(200);
	$(".block-slider--image, .bottle-details,.arrows").fadeOut(200);
	$(".image-rotation").removeClass("hide").addClass("show-screen-view");
	$("footer").fadeOut();
});

$(document).ready(function(){
    $(".sharing-details").on("click", function(){
        $(".shelf-bottle-details").removeClass("show-details");
        $(".single-sharing").addClass("camera").fadeIn(2000);
        $(".themes-button").fadeOut();
        $("body").addClass("sharing-screen");
    });
    $(".return-back").on("click", function(){

        $(".shelf-bottle-details").addClass("show-details");

        $(".themes-button").fadeIn();

     	$(".theme").removeClass("theme--active-theme").removeAttr("style");
		$(".theme.theme--camera").addClass("theme--active-theme");

		$(".theme .active-mark").removeClass("active-mark--show");

    	$(".theme .active-mark").removeClass("active-mark--show");
    });
});


$(".image-rotation--header .cross").on("click", function(){
	$(".sharing-view").fadeOut();
	$(".shelf").css({position: "fixed"});
	$(".show-details .info-tab").fadeIn();
	$(".block-slider--image, .bottle-details, .arrows").fadeIn();
	$("body").removeClass("rotation-sharing");
	$("footer").fadeIn();
});

/* zoom image */
(function() {
  var el = document.querySelector(".product-viewer");
  if(el){
	  var mc = new Hammer(el, {
	    domEvents: true
	  });

	  var currentScale = 1;
	  var currentLeft = 0;
	  var currentTop = 0;

	  // zoom
	  mc.get("pinch").set({ enable: true });
	  mc.on("pinchstart", function(ev) {
	    // on pinch zoom we eliminate the panning event listener
	    //so that we dont have that weird movement after we end pinching
	    mc.off("pan");
	  });
	  mc.on("pinch", function(ev) {
	    el.style.transform =
	      "scale(" +
	      currentScale * ev.scale +
	      ")";
	  });
	  mc.on("pinchend", function(ev) {
	    currentScale = currentScale * ev.scale;

	    // once we have ended pinch zooming we fire off the panning event once again
	    window.setTimeout(hammerPan, 50);
	  });

	  // panning function
	  function hammerPan() {
	    mc.on("pan", function(ev) {
	      el.style.transform =
	        "scale(" +
	        currentScale +
	        ")";
	    });
	  }

	  hammerPan();
	  mc.on("panend", function(ev) {
	    currentLeft = currentLeft + ev.deltaX / currentScale;
	    currentTop = currentTop + ev.deltaY / currentScale;
	  });
  }

})();

(function() {
  var el = document.querySelector(".theme-product-viewer");
  if(el){

	  var mc = new Hammer(el, {
	    domEvents: true
	  });

	  var currentScale = 1;
	  var currentLeft = 0;
	  var currentTop = 0;

	  // zoom
	  mc.get("pinch").set({ enable: true });
	  mc.on("pinchstart", function(ev) {
	    // on pinch zoom we eliminate the panning event listener
	    //so that we dont have that weird movement after we end pinching
	    mc.off("pan");
	  });
	  mc.on("pinch", function(ev) {
	    el.style.transform =
	      "scale(" +
	      currentScale * ev.scale +
	      ")";
	  });
	  mc.on("pinchend", function(ev) {
	    currentScale = currentScale * ev.scale;

	    // once we have ended pinch zooming we fire off the panning event once again
	    window.setTimeout(hammerPan, 50);
	  });

	  // panning function
	  function hammerPan() {
	    mc.on("pan", function(ev) {
	      el.style.transform =
	        "scale(" +
	        currentScale +
	        ")";
	    });
	  }

	  hammerPan();
	  mc.on("panend", function(ev) {
	    currentLeft = currentLeft + ev.deltaX / currentScale;
	    currentTop = currentTop + ev.deltaY / currentScale;
	  });
  }

})();

$(".ui-loader").fadeOut();

$(".customize").on("click", function(){
	$(".tool-tip").addClass("show-customize");
});

$('html').on('click', function (e) {
	if(!$(e.target).is('.tool-tip') && $(e.target).closest('.customize').length == 0) {
	$(".tool-tip").removeClass("show-customize");
	}
});

$(".tool-tip span, .sharing").on("click", function(){
	$(".themes-button").addClass("show-buttons");
	$(".my-collection").css('pointer-events','none');
});

$(".themes-button .cross").on("click", function(){
	$(".tool-tip").removeClass("show-customize");
	$(".themes-button").removeClass("show-buttons");
	$(".my-collection").css('pointer-events','auto');
});

//Siwping theme buttons Left and Right
$(".button").on( "swipeleft", function(){
	if($(".button.brown").hasClass("active")){

		$(".button").removeClass("active");
		$(".button.green").addClass("active");

		$(".button.yellow").css({transform: "translateX(80px)", transition: "transform 300ms ease-in"});
		$(".button.green").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.brown").css({transform: "translateX(-80px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").addClass("green");
		$(".my-collection .shelf .info-tab").addClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").addClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").addClass("green");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("brown").addClass("green");

		$(".collection-blocks").addClass("green");
	}
	else if($(".button.green").hasClass("active")){

		$(".button").removeClass("active");
		$(".button.yellow").addClass("active");

		$(".button.yellow").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.brown").css({transform: "translateX(-150px)", transition: "transform 300ms ease-in"});
		$(".button.green").css({transform: "translateX(-80px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").addClass("yellow").removeClass("green");
		$(".my-collection .shelf .info-tab").addClass("yellow").removeClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").addClass("yellow").removeClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").addClass("yellow").removeClass("green");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("green").addClass("yellow");
		$(".collection-blocks").removeClass("green").addClass("yellow");
	}
});

$(".button").on( "swiperight", function(){
	if($(".button.green").hasClass("active")){
		$(".button").removeClass("active");
		$(".button.brown").addClass("active");

		$(".button.green").css({transform: "translateX(80px)", transition: "transform 300ms ease-in"});
		$(".button.brown").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.yellow").css({transform: "translateX(150px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").removeClass("green");
		$(".my-collection .shelf .info-tab").removeClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").removeClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").removeClass("green");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("green").addClass("brown");
		$(".collection-blocks").removeClass("green");

	} else if($(".button.yellow").hasClass("active")){
		$(".button").removeClass("active");
		$(".button.green").addClass("active");

		$(".button.green").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.brown").css({transform: "translateX(-80px)", transition: "transform 300ms ease-in"});
		$(".button.yellow").css({transform: "translateX(80px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").removeClass("yellow").addClass("green");
		$(".my-collection .shelf .info-tab").removeClass("yellow").removeClass("yellow").addClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").removeClass("yellow").addClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").removeClass("yellow").addClass("green");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("yellow").addClass("green");

		$(".collection-blocks").removeClass("yellow").addClass("green");
	}
});


//Clicking theme buttons
$(".button").on( "click", function(){
	if($(".button.brown").hasClass("active")){

		$(".button").removeClass("active");
		$(".button.green").addClass("active");

		$(".button.yellow").css({transform: "translateX(80px)", transition: "transform 300ms ease-in"});
		$(".button.green").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.brown").css({transform: "translateX(-80px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").addClass("green");
		$(".my-collection .shelf .info-tab").addClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").addClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").addClass("green");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("brown").addClass("green");

		$(".collection-blocks").addClass("green");
	}
	else if($(".button.green").hasClass("active")){

		$(".button").removeClass("active");
		$(".button.yellow").addClass("active");

		$(".button.yellow").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.brown").css({transform: "translateX(-150px)", transition: "transform 300ms ease-in"});
		$(".button.green").css({transform: "translateX(-80px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").addClass("yellow").removeClass("green");
		$(".my-collection .shelf .info-tab").addClass("yellow").removeClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").addClass("yellow").removeClass("green");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").addClass("yellow").removeClass("green");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("green").addClass("yellow");
		$(".collection-blocks").removeClass("green").addClass("yellow");
	}
 	else if($(".button.yellow").hasClass("active")){
		$(".button").removeClass("active");
		$(".button.brown").addClass("active");

		$(".button.brown").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
		$(".button.green").css({transform: "translateX(-80px)", transition: "transform 300ms ease-in"});
		$(".button.yellow").css({transform: "translateX(80px)", transition: "transform 300ms ease-in"});

		$(".my-collection .shelf-wrapper--expanded .block").removeClass("yellow").addClass("brown");
		$(".my-collection .shelf .info-tab").removeClass("yellow").removeClass("yellow").addClass("brown");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").removeClass("yellow").addClass("brown");
		$(".my-collection .shelf .collection-blocks .shelf-wrapper").removeClass("yellow").addClass("brown");

		$(".tool-tip").removeClass("show-customize");
		$(".fixed-image").removeClass("yellow").addClass("brown");

		$(".collection-blocks").removeClass("yellow").addClass("brown");
	}
});

//Siwping theme Left and Right
$( ".theme" ).on( "swipeleft", function(){
	if($(".theme.theme--upload").hasClass("theme--active-theme")){

	  	$(".theme--upload").css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $(".theme").removeClass("theme--active-theme");
	    $(".theme--upload").removeClass("theme--active-theme").next().addClass("theme--active-theme");
	    $(".single-sharing").removeClass("upload").addClass("camera");

	}
	else if($(".theme.theme--camera").hasClass("theme--active-theme")){

	    $(".theme--camera").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});

	    $( ".theme--yellow" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});

	    $(".theme").removeClass("theme--active-theme");
	    $(".theme--camera").removeClass("theme--active-theme").next().addClass("theme--active-theme");

		$(".theme .active-mark").removeClass("active-mark--show");
	 	$(".theme--yellow .active-mark").addClass("active-mark--show");
	    $(".single-sharing").removeClass("camera upload").addClass("yellow");

	}else if($(".theme.theme--yellow").hasClass("theme--active-theme")){

	 	$(".theme--yellow").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--yellow").removeClass("theme--active-theme").next().addClass("theme--active-theme");

	    $(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--green .active-mark").addClass("active-mark--show");
	    $(".single-sharing").removeClass("yellow");
	    $(".single-sharing").addClass("green");

	}else if($(".theme.theme--green").hasClass("theme--active-theme")){

	  	$(".theme--green").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--green").removeClass("theme--active-theme").next().addClass("theme--active-theme");

	    $(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--brown .active-mark").addClass("active-mark--show");

	    $(".single-sharing").removeClass("green");
	    $(".single-sharing").addClass("brown");

	}else if($(".theme.theme--brown").hasClass("theme--active-theme")){

	 	$(".theme--brown").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--brown").removeClass("theme--active-theme").next().addClass("theme--active-theme");

	 	$(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--black .active-mark").addClass("active-mark--show");

		$(".single-sharing").removeClass("brown");
	    $(".single-sharing").addClass("black");	

	}else if($(".theme.theme--black").hasClass("theme--active-theme")){

	 	$(this).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(this).removeClass("theme--active-theme").next().addClass("theme--active-theme");

	 	$(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--black .active-mark").addClass("active-mark--show");

		$(".single-sharing").removeClass("brown");
	    $(".single-sharing").addClass("black");		

	}
});

$( ".theme" ).on( "swiperight", function(){
	if($(".theme.theme--camera").hasClass("theme--active-theme")){

	    $(".theme--camera").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});

	    $( ".theme--yellow").css({transform: "translateX(140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown").css({transform: "translateX(140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green").css({transform: "translateX(140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(140px)", transition: "transform 300ms ease-in"});

	    $(".theme").removeClass("theme--active-theme");
	    $(".theme--camera").removeClass("theme--active-theme").prev().addClass("theme--active-theme");
	    
	    $(".single-sharing").removeClass("camera").addClass("upload");
    }
	else if($(".theme.theme--yellow").hasClass("theme--active-theme")){
	    $(".theme--yellow").css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(70px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");  
	 	$(".theme--yellow").removeClass("theme--active-theme").prev().addClass("theme--active-theme");
	  
	    $(".theme .active-mark").removeClass("active-mark--show");
	    $(".single-sharing").removeClass("yellow").addClass("camera");

    } else if ($(".theme.theme--green").hasClass("theme--active-theme")){

	  	$(".theme--green").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--green").removeClass("theme--active-theme").prev().addClass("theme--active-theme");

	 	$(".theme .active-mark").removeClass("active-mark--show");
	 	$(".theme--yellow .active-mark").addClass("active-mark--show");

	    $(".single-sharing").removeClass("green");
	    $(".single-sharing").addClass("yellow");

    } else if($(".theme.theme--brown").hasClass("theme--active-theme")){
	 	$(".theme--brown").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");
	    $(".theme--brown").removeClass("theme--active-theme").prev().addClass("theme--active-theme");

	    $(".theme .active-mark").removeClass("active-mark--show");
	 	$(".theme--green .active-mark").addClass("active-mark--show");

	    $(".single-sharing").removeClass("brown");
	    $(".single-sharing").addClass("green");

    } else if($(".theme.theme--black").hasClass("theme--active-theme")){
	 	$(".theme--black").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});


	    $(".theme").removeClass("theme--active-theme");
	    $(".theme--black").removeClass("theme--active-theme").prev().addClass("theme--active-theme");

		$(".theme .active-mark").removeClass("active-mark--show");
	 	$(".theme--brown .active-mark").addClass("active-mark--show");
	    
	    $(".single-sharing").removeClass("black");
	    $(".single-sharing").addClass("brown");

    }
});

//Clicking themes 
$( ".theme" ).on( "click", function(){
	if($(".theme.theme--yellow").hasClass("theme--active-theme")){

	 	$(".theme--yellow").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-70px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--yellow").removeClass("theme--active-theme").next().addClass("theme--active-theme");

	    $(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--green .active-mark").addClass("active-mark--show");
	    $(".single-sharing").removeClass("yellow");
	    $(".single-sharing").addClass("green");

	}else if($(".theme.theme--green").hasClass("theme--active-theme")){

	  	$(".theme--green").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--brown" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-140px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--green").removeClass("theme--active-theme").next().addClass("theme--active-theme");

	    $(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--brown .active-mark").addClass("active-mark--show");

	    $(".single-sharing").removeClass("green");
	    $(".single-sharing").addClass("brown");

	}else if($(".theme.theme--brown").hasClass("theme--active-theme")){

	 	$(".theme--brown").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--black" ).css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(-210px)", transition: "transform 300ms ease-in"});

	 	$(".theme").removeClass("theme--active-theme");    
	    $(".theme--brown").removeClass("theme--active-theme").next().addClass("theme--active-theme");

	 	$(".theme .active-mark").removeClass("active-mark--show");
	    $(".theme--black .active-mark").addClass("active-mark--show");

		$(".single-sharing").removeClass("brown");
	    $(".single-sharing").addClass("black");	

	}else if($(".theme.theme--black").hasClass("theme--active-theme")){

	 	$(".theme--black").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	 	$(".theme--brown").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--yellow" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--green" ).css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--camera").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});
	    $( ".theme--upload").css({transform: "translateX(0px)", transition: "transform 300ms ease-in"});


	    $(".theme").removeClass("theme--active-theme");
	    $(".theme--camera").removeClass("theme--active-theme").next().addClass("theme--active-theme");

		$(".theme .active-mark").removeClass("active-mark--show");
	 	$(".theme--yellow .active-mark").addClass("active-mark--show");
	    $(".single-sharing").removeClass("black").addClass("yellow");	

	}
});


$(".carousel-control.right").on("click", function(){
	$(".carousel-control.left").addClass("left-active");
});

/* click action on black theme */
$(".theme--black").on("click", function(){
	$(".popup").css({opacity: "1", height: "100vh", transition: "opacity 400ms ease-in-out"}).fadeIn();
});

$(".share-popup--close .cross").on("click", function(){
	$(".popup").css({opacity: "0", height: "0", transition: "opacity 400ms ease-in-out"});
	$(".themes-button .cross").removeClass("remove-cross");
	$(".themes-button--wrapper").removeClass("remove-buttons");
	$(".button").removeClass("remove-buttons-group , active").removeAttr("style");
	$(".button.brown").addClass("active");
	$(".themes-button").removeClass("show-buttons");
	$(".my-collection").css('pointer-events','auto');
});

/* click action on yellow theme */
$(".button.yellow").on("click", function(){
	$(".my-collection .shelf-wrapper--expanded .block").removeClass("yellow");
	$(".my-collection .shelf .info-tab").removeClass("yellow");
	$(".my-collection").css('pointer-events','auto');
	$(".my-collection .shelf .collection-blocks .shelf-wrapper .block").removeClass("yellow");
	$(".my-collection .shelf .collection-blocks .shelf-wrapper").removeClass("yellow");

	$(".popup").css({opacity: "1", height: "100vh", transition: "opacity 400ms ease-in-out"}).fadeIn();
	$(".fixed-image").removeClass("yellow").addClass("brown");
	$(".collection-blocks").removeClass("yellow");
	$(".themes-button .cross").addClass("remove-cross");
	$(".themes-button--wrapper").addClass("remove-buttons");
	$(".button").addClass("remove-buttons-group");
});

$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.uploaded-image').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    var readURL1 = function(input) {
        if (input.files && input.files[0]) {
            var reader1 = new FileReader();

            reader1.onload = function (e) {
                $('.uploaded-bg').attr('src', e.target.result);
            }
    
            reader1.readAsDataURL(input.files[0]);
        }
    }
    $(".upload").on('change', function(){
        readURL1(this);
        $(".single-sharing").addClass("upload");
    });

	$(".zoom").fadeOut();
	$(".detail").fadeOut();
	$(".add").fadeOut();

	// $(".sharing").mouseover(function(){
	// 	$(".shelf-wrapper").addClass("blureffect");
	// 	$(".popover").fadeIn();
	// 	$(".share").addClass("share-block");
	// });

	// $(".share .next").on("click", function(){
	// 	$(".share").fadeOut();
	// 	$(".zoom").fadeIn();
	// 	$(".zoom").addClass("zoom-block");
	// 	$(".shelf-wrapper").removeClass("blureffect");
	// 	$(".shelf-wrapper .block").addClass("blureffect");
	// });

	// $(".skip").on("click",function(){
	// 	$(".popover").fadeOut();
	// 	$(".share").removeClass("share-block");
	// 	$(".zoom").removeClass("zoom-block");
	// 	$(".shelf-wrapper").removeClass("blureffect");
	// });
});
$("input[type='checkbox']").change(function() {
    if(this.checked) {
      $(this).attr( 'checked', 'checked' );
      $(this).parent().addClass('checked');
    }else{
      $(this).removeAttr( 'checked', 'checked' );
      $(this).parent().removeClass('checked');
    }
});

var $window = $(window),
    $document = $(document),
    button = $('.tnc .primary-button');

button.css({
    opacity: 1
});

$window.on('scroll', function () {
    if (($window.scrollTop() + $window.height()) == $document.height()) {
        button.stop(true).animate({
            opacity: 0
        }, 250);
    } else {
        button.stop(true).animate({
            opacity: 1
        }, 250);
    }
});