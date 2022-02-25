import $ from 'jquery';

$(document).ready(function(){
    $(".btnAbrir").click(function(){
        $(".contenedor").animate({left: '-15%'},"toggle");
        $("arrowL").css("background","#000");

    })
});