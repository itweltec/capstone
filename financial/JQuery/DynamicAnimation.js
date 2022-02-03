	/*
		//Modified from original source: Tom Pažourek https://stackoverflow.com/a/40658647
	Debugging
	: ---Note to anyone using Tom's code in future(or this code), Firefox gets angry when you don't define the html doc because it can't
		read that gosh darn height of the window. By golly, that half hour of my life i will never get back.
	  console.log("Bottow" + viewportBottom.toString());
	  console.log("Top" + viewportTop.toString());
	  console.log("Element Top" + elementTop.toString());
	  console.log("Element Botton" + elementBottom.toString());
	  console.log("Element Botton" + $(this).index()); */

$(document).ready(function(){
	
	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();
	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).scroll(function(event) {

	$(".supriseMother").each(function(i, el) {
		var el = $(el);
		if (el.isInViewport()) {
		  el.css('visibility', 'visible').hide().fadeIn(1000);
		}
	  });
	
	$(".supriseMother").each(function() {
		
		if ($(this).isInViewport()) {
			console.log($(this).index());
		  $(this).removeClass("supriseMother").addClass("boring");
		}
	  });
	});
	

});
