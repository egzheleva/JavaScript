"use strict";

$(document).ready(function(){
  var timer;

  var printTimer = function(minutes, seconds) {
  $("#minute-first-digit").text(Math.floor(minutes / 10));
  $("#minute-second-digit").text(minutes % 10);
  $("#second-first-digit").text(Math.floor(seconds / 10));
  $("#second-second-digit").text(seconds % 10);
  };


  $("#up").on("click",function(){
  var minutes = 0,
      seconds = 0,
      maxMinutes = $("#minutes").val(),
      maxSeconds = $("#seconds").val();

    timer = window.setInterval(function(){
      seconds++;
      if(seconds > 59){
        minutes++;
        seconds = 0;
      }
      if(minutes >= maxMinutes && seconds >= maxSeconds){
        window.clearInterval(timer);
      }

      printTimer(minutes, seconds);

    }, 1000);
  });


  $("#down").on("click", function() {
    var minutes = $("#minutes").val(),
      seconds = $("#seconds").val();
    timer = window.setInterval(function(){
      seconds--;

      if(seconds < 0){
        minutes--;
        seconds = 59;
      }

      if(minutes <= 0 && seconds <= 0){
        window.clearInterval(timer);
      }

      printTimer(minutes, seconds);

    }, 1000);
  });

  $(".btn-danger").on("click",function(){
    $("#minute-first-digit").text("0");
    $("#minute-second-digit").text("0");
    $("#second-first-digit").text("0");
    $("#second-second-digit").text("0");
    window.clearInterval(timer);
  });

});
