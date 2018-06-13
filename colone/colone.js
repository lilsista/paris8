$(document).ready(function(){

    var miniature = $('.miniature');
    var normal = $('.img-normal');
    var fermer = $('.croix');

    miniature.click(function(){
       /* normal.css({display : "block"});*/
        normal.effect("slide","slow");
    });

    fermer.click(function(){
       /* normal.css({display : "none"});*/
       normal.effect("drop","slow");
    });


});