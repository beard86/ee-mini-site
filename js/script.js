///////////////////////////////
////// MAIN JS
///////////////////////////////

$(document).ready(function() {
	//CLICK EVENTS
	var main = $('#main'),
		mainSection = $('#main section'),
		popupHolder = $('#popup-holder .popup section'),
		mainForm = $('#main-form'),
		mainSorry = $('#main-sorry'),
		decline = mainSection.children('.decline'),
		accept = mainSection.children('.accept'),
		noPopup = popupHolder.children('.no'),
		yesPopup = popupHolder.children('.yes');


	decline.on('click', function() {
		//$('#main').addClass('hidden');
		$('.popup-overlay').removeClass('hidden').addClass('popped');
	});

	accept.on('click', function() {
		main.addClass('hidden');
		mainForm.removeClass('hidden').addClass('show');
		scrollToElement(mainForm, 500);
		$('#footer-container').addClass('static');
	});

	noPopup.on('click', function() {
		//$('#main').addClass('hidden');
		$('.popup-overlay').removeClass('show').addClass('hidden');
	});

	yesPopup.on('click', function() {
		$('.popup-overlay').addClass('hidden');
		main.addClass('hidden');
		mainForm.addClass('hidden');
		mainSorry.removeClass('hidden');
	});
	//
	$('button#submit').on('click',function() {
		$('#footer-container').removeClass('static');
		mainForm.addClass('hidden').removeClass('show');
		$('#main-thanks').removeClass('hidden');

	});

	function getNumberOfGuests() {
		// get number of guests from tapestry & display number of forms accordingly
		var numberOfGuests = [1,2];
		
		for(i=0; i<numberOfGuests.length; i++) {
			$('#form-'+numberOfGuests[i]).css('display','block');
			console.log(numberOfGuests[i]);
		}
	}

	getNumberOfGuests();


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