$(window).focus(function() {
    console.log("call focus");
});

$(window).blur(function() {
    console.log("call blur");
});


$(document).ready(function(){

    //The tooltip needs to be activated by adding a small Javascript code to the bottom of the page as follows:
    //Hace que el tooltip muestre el texto de manera correcta
    $('[data-toggle="tooltip"]').tooltip();

    $("#myCarousel").carousel({interval:2000});

            


    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')){
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
            $("#myCarousel").carousel('pause');
        } else if($("#carouselButton").children('span').hasClass('fa-play')){
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');
            $("#myCarousel").carousel('cycle');
        }
    });

    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    });

    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show');
    });
});