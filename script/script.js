
$(document).ready(function () {
    $("hr").animate({left: "20px"}, "slow");
    $(".menu-toggle").click(function () {
      $(".menu-toggle").toggleClass("menu-open");
      $(".menu").toggleClass("active");
    });
    $(".link").click(function () {
      $(".menu-toggle").toggleClass("menu-open");
      $(".menu").toggleClass("active");
    });
    $(".ImageOne").click(function () {
      $(".overlayOne").toggleClass("active");
    });
    $(".ImageTwo").click(function () {
      console.log("i was clicked");
      $(".overlayTwo").toggleClass("active");
    });
    $(".ImageThree").click(function () {
      $(".overlayThree").toggleClass("active");
    });
    $(".ImageFour").click(function () {
      $(".overlayFour").toggleClass("active");
    });
    $(".closeOverlayOne").click(function () {
      $(".overlayOne").toggleClass("active");
    });
    $(".closeOverlayTwo").click(function () {
      console.log("i was clicked");
      $(".overlayTwo").toggleClass("active");
    });
    $(".closeOverlayThree").click(function () {
      $(".overlayThree").toggleClass("active");
    });
    $(".closeOverlayFour").click(function () {
      $(".overlayFour").toggleClass("active");
    });

 
  });
  