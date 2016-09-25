$(document).ready(function(){
	// var autoNextSlide = window.setInterval(nextSlide, 4000);

	// function nextSlide() {
	//   slider.goToNextSlide();
	// }

	// var autoPrevSlide = window.setInterval(prevSlide, 4000);

	// function prevSlide() {
	//   slider.goToPrevSlide();
	// }

    var slider = $('.bxslider').bxSlider({
	  infiniteLoop: false,
	  mode: 'vertical',
	  slideWidth: 392,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 1,
      slideMargin: 10,
      hideControlOnEnd: true
	});

	//smooth scroll
	$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 700);
	return false;
	});

});