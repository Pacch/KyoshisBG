    let consulta = window.matchMedia('(max-width:900px)');
    consulta.addListener(mediaQuery);
$( document ).ready(function() {

        $('.seccion-menu').hide();
        if (consulta.matches) {
        $('.burguer').on('click', function() {
            if ($('.burguer').hasClass('fa-bars')) {
                $('.seccion-menu').show();
                $('.burguer').removeClass('fa-bars');
                $('.burguer').addClass('fa-times');
            }else {
            $('.seccion-menu').hide();
            $('.burguer').removeClass('fa-times');
            $('.burguer').addClass('fa-bars');

            }       
            });
        }else{
            $( ".seccion-menu" ).show();

        }  
});

// $(document).ready(function(){
//     $( ".seccion-menu" ).hide();
//     $('#burguer').on('click', function() {
//         if ($('.seccion-menu').is(':hidden')) {
//            $('.seccion-menu').show();
//            $('#burguer').removeClass('fa-bars');
//            $('#burguer').addClass('fa-times');
           
//         }
//         else {
//             $('.seccion-menu').hide();
//             $('#burguer').removeClass('fa-times');
//             $('#burguer').addClass('fa-bars');
//         }       
//     });
    
//     $('.#burguer').on('click', function() {
//         if ($(this).hasClass('fa-bars')) {
//            $('.seccion-menu').show();
//            $(this).removeClass('fa-bars');
//            $(this).addClass('fa-times');
//         }
//         else {
//             $('.seccion-menu').hide();
//             $(this).removeClass('fa-times');
//             $(this).addClass('fa-bars');
//         }       
//     });
// });

// $( document ).ready(function() {

// $( ".cross" ).hide();
// $( ".menu" ).hide();


// $( ".hamburger" ).click(function() {
// $( ".menu" ).slideToggle( "slow", function() {
// $( ".hamburger" ).hide();
// $( ".cross" ).show();
// });
// });

// $( ".cross" ).click(function() {
// $( ".menu" ).slideToggle( "slow", function() {
// $( ".cross" ).hide();
// $( ".hamburger" ).show();
// });
// });

// });