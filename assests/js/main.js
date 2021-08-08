$(document).ready(function(){
	
	// Sticky Menu
	$(window).scroll(function(){

		if($(this).scrollTop() > 100){
			$('.nav').addClass('sticky');
		}

		else{
			$('.nav').removeClass('sticky');
		}

	});

	// Scroll to Top
	
	$(window).scroll(function(){

		if($(this).scrollTop() > 100){
			$('.scroll-top').fadeIn();
		}

		else{
			$('.scroll-top').fadeOut();
		}

	});

});