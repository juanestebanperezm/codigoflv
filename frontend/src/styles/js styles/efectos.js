import $ from "jquery";
$(document).ready(function () {
  $(".btnCerrar").hide();

  $(".btnAbrir").click(function () {
    $(".contenedor").animate({ left: "-15%" });
    $(".btnAbrir").hide();
  $(".btnCerrar").show();
  });
  $(".btnCerrar").click(function () {
    $(".contenedor").animate({ left: "0" });
  $(".btnCerrar").hide();
    $(".btnAbrir").show();
  });
});