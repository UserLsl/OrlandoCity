$(document).ready(function(){

    $("#logotipo").on("mouseover", function() {
        //$("#banner h1").css({"color": "red", "font-size":"12em", "transition": "2s"})
        $("#banner h1").addClass("efeito");
    }).on("mouseout", function(){
        $("#banner h1").removeClass("efeito");
    });

    $("#input-search").on("focus", function(){
        $("li.search").addClass("ativo");
    }).on("blur", function(){
        $("li.search").removeClass("ativo");
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

})