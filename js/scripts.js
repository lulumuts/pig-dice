function Player(player1, player2)  {
  this.firstPlayer= player1;
  this.secondPlayer=player2;
}



var total = 0;
function rollDice() {
  var roll = Math.floor(Math.random() * 6) + 1;
  $("#die1").text(roll);
  $("#status").text(roll+total);
  if (roll != 1){
    total=  total + roll;
    return total
  }

console.log(total);
}
var total2 = 0;
function rollDice2(){
  var roll2 = Math.floor(Math.random() * 6) + 1;

  $("#die2").text(roll2);
  $("#status2").text(roll2+total);
  if (roll2 != 1) {
     total2 += roll2;
    return total2;
  }
    else if (roll2 === 1) {
      total2 = 0;
}
  console.log(total2);
}


  // for (var i=1; i<=6; i++) {
  //   if (i === 1) {


$(document).ready(function() {
  $("#player1roll").click(function(event){
    event.preventDefault();
    rollDice();
  $("#player2roll").click(function(event) {
    event.preventDefault();
    rollDice2()
  })


});
});

// function rollDice(){
//   var total = 0;
// var roll = Math.floor(Math.random() * 6) + 1;
// if(roll != 1){
//   total =total + roll;
// }
// return total;
// }
// $(document).ready(function(){
// $("#player1roll").click(function(e){
//   e.preventDefault();
//   // console.log("andrew");
//   $("#die1").text(rollDice());
// });
// });
