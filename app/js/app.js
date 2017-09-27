$('.burguer').on('click', function() {
    $('.burguer').toggleClass("fa-bars fa-times");
    $('#menu').toggle();
});

$('a[href*="#"]:not([href="#"])').click( function(event) {
	       event.preventDefault();
         var anchor = 0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              anchor=$(document).height()-$(window).height();
         }else{
  		  anchor = $(this.hash).offset().top - 24 ;
	       }
         $('html,body').stop().animate({scrollTop:anchor}, 750,'swing');
     });
 $('.nav-menu li a').click(function() {
    $(this).parent().find('a').removeClass('highlight');
    $(this).addClass('highlight');
});
$(window).scroll(function() {
    $('.section').each(function() {
        if($(window).scrollTop() >= $(this).offset().top - 750) {
            var id = $(this).attr('id');
            $('.nav-menu li a').removeClass('highlight');
			$('.nav-menu li a[href=#'+ id +']').addClass('highlight');
        }
    });
});