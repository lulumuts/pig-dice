
function rollDice() {
  var roll = Math.floor(Math.random() * 6) + 1;
  var total = document.getElementById('status').value;
  $("#die1").append(roll);
  console.log(roll);

}

$(document).ready(function() {
  $("#player1roll").click(function(event){
    event.preventDefault();

    rollDice();

  })
});
