$(document).ready(function(){
   $("round_block1").click(function(){
     $(".paper1").removeClass("blocker");
     setTimeout(function(){
       $(".paper1").removeClass("hidden");
     }, 200);

   });

   $(".krest1").click(function(){
     $(".paper1").addClass("hidden");
     setTimeout(function(){
       $(".paper1").addClass("blocker");
     }, 200);

   });


 });
