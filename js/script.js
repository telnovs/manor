$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToScroll: 3,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:false,
		rows:2,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

