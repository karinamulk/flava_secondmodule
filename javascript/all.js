$(document).ready(function(){

  if ($(window).width() > 768) {

    $(".round1").click(function(){
      $(".paper1").removeClass("blocker");

      setTimeout(function(){
        $(".paper1").addClass("show");
      }, 100);

    });

    $(".krest1").click(function(){
      $(".paper1").removeClass("show");
      setTimeout(function(){
        $(".paper1").addClass("blocker");
      }, 200);

    });

    $(".round3").click(function(){
      $(".paper2").removeClass("blocker");

      setTimeout(function(){
        $(".paper2").addClass("show");
      }, 100);

    });

    $(".krest2").click(function(){
      $(".paper2").removeClass("show");
      setTimeout(function(){
        $(".paper2").addClass("blocker");
      }, 200);

    });

    $(".round2").click(function(){
      $(".paper3").removeClass("blocker");

      setTimeout(function(){
        $(".paper3").addClass("show");
      }, 100);

    });

    $(".krest3").click(function(){
      $(".paper3").removeClass("show");
      setTimeout(function(){
        $(".paper3").addClass("blocker");
      }, 200);

    });
  }

  if ($(window).width() < 501) {
    $(".burger").click(function(){
      $(".phone_menu").removeClass("blocker");

      setTimeout(function(){
        $(".phone_menu").addClass("show");
      }, 100);

    });

    $(".ariana").click(function(){
      $(".phone_menu").removeClass("show");
      setTimeout(function(){
        $(".phone_menu").addClass("blocker");
      }, 200);

    });
  }


 });
