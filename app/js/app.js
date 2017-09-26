var consulta = window.matchMedia('(max-width:900px)');
consulta.addListener(mediaQuery);

function mediaQuery() {
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
    }
mediaQuery();