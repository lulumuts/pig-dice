var total = 0;
function rollDice() {
  var roll = Math.floor(Math.random() * 6) + 1;
  $("#die1").append(roll);
  $("#status").append(roll+total);
  console.log(roll);
}
function rollDice2() {
var roll2 = Math.floor(Math.random() * 6) + 1;
$("#die2").append(roll2);
  // for (var i=1; i<=6; i++) {
  //   if (i === 1) {

  console.log(roll2);
  }


$(document).ready(function() {
  $("#player1roll").click(function(event){
    event.preventDefault();
    rollDice();
  $("#player2roll").click(function(event){
    event.preventDefault();
    rollDice2();
    });
  });
});
