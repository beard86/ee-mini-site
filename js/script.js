///////////////////////////////
////// MAIN JS
///////////////////////////////

$(document).ready(function() {
	//CLICK EVENTS
	var mainSection = $('#main section'),
		popupHolder = $('#popup-holder .popup section'),
		mainForm = $
		decline = mainSection.children('.decline'),
		accept = mainSection.children('.accept'),
		noPopup = popupHolder.children('.no'),
		yesPopup = popupHolder.children('.yes');


	decline.on('click', function() {
		//$('#main').addClass('hidden');
		$('.popup-overlay').removeClass('hidden').addClass('popped');
	});

	accept.on('click', function() {
		$('#main').addClass('hidden');
		$('#main-form').removeClass('hidden').addClass('show');
		scrollToElement('#main-form', 500);
	});

	noPopup.on('click', function() {
		//$('#main').addClass('hidden');
		$('.popup-overlay').removeClass('show').addClass('hidden');
	});

	yesPopup.on('click', function() {
		$('.popup-overlay').addClass('hidden');
		$('#main').addClass('hidden');
		$('#main-form').addClass('hidden');
		$('#main-sorry').removeClass('hidden');
	});
	//
	$('button#submit').on('click',function() {
		$('#main-form').addClass('hidden').removeClass('show');
		$('#main-thanks').removeClass('hidden');

	});
	//function - scrolls to element ID 
	function scrollToElement(selector, time, verticalOffset) {
	    time = typeof(time) != 'undefined' ? time : 1000;
	    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	    element = $(selector);
	    offset = element.offset();
	    offsetTop = offset.top + verticalOffset;
	    $('html, body').animate({
	        scrollTop: offsetTop
	    }, time);           
	}
});