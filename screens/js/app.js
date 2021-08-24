$(document).ready(function(){
	$('.shelf-block').on('click', function(){
		$(this).addClass('expand');
		$(this).after('<div class="shelf-block"></div>');
	});
});