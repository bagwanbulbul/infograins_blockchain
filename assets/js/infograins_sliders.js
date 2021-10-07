jQuery(document).ready(function($){

	$('.header-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		autoplay: true
	});

	$('.series-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		autoplay: true
	});

	// Adding custom checkboxes to contact form 7
	// $('#attendance .first input').attr('id', 'yes-attend');
	// $('#yes-attend').after('<label class="stylised-checkbox" for="yes-attend"></label>');
	// $('#attendance .last input').attr('id', 'no-attend');
	// $('#no-attend').after('<label class="stylised-checkbox" for="no-attend"></label>');


	// $('#decision-maker input').attr('id', 'decision-maker-checkbox');
	// $('#decision-maker-checkbox').after('<label class="stylised-checkbox large" for="decision-maker-checkbox"></label>');

	// $('#receive-news').after('<label class="stylised-checkbox large" for="receive-news"></label>');
});