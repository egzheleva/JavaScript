"use strict";

$(document).ready(function(){
  var clock;


  $("#up").on("click",function(){

    var minutes = 0,
        seconds = 0,
        maxMinutes = $("#minutes").val(),
        maxSeconds = $("#seconds").val();
    clock = window.setInterval(function(){
      seconds++;
      if(seconds > 59){
        minutes++;
        seconds = 0;
      }
      if(minutes >= maxMinutes && seconds >= maxSeconds){
        window.clearInterval(clock);
        console.log("MARAMARAMARA!");
      }
      var minute_first_digit = Math.floor(minutes / 10);
      var minute_second_digit = minutes % 10;
      var second_first_digit = Math.floor(seconds / 10);
      var second_second_digit = seconds % 10;
      $("#minute-first-digit").text(minute_first_digit);
      $("#minute-second-digit").text(minute_second_digit);
      $("#second-first-digit").text(second_first_digit);
      $("#second-second-digit").text(second_second_digit);

    }, 1000);
  });

  $("#down").on("click", function() {
    var minutes = $("#minutes").val(),
        seconds = $("#seconds").val();
    clock = window.setInterval(function(){
      seconds--;

      if(seconds < 0){
        minutes--;
        seconds = 59;
      }

      if(minutes <= 0 && seconds <= 0){
        window.clearInterval(clock);
        console.log("bububuueau");
      }

      var minute_first_digit = Math.floor(minutes / 10);
      var minute_second_digit = minutes % 10;
      var second_first_digit = Math.floor(seconds / 10);
      var second_second_digit = seconds % 10;
      $("#minute-first-digit").text(minute_first_digit);
      $("#minute-second-digit").text(minute_second_digit);
      $("#second-first-digit").text(second_first_digit);
      $("#second-second-digit").text(second_second_digit);

    }, 1000);
  });

  $(".btn-danger").on("click",function(){
    $("#minute-first-digit").text("0");
    $("#minute-second-digit").text("0");
    $("#second-first-digit").text("0");
    $("#second-second-digit").text("0");
    window.clearInterval(clock);
  });
});
