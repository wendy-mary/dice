//back-end
var rolldice = function() {

  return Math.floor(Math.random() * 6) + 1;

}

function player(roll, currentscore, totalscore) {
  this.roll = roll;
  this.hold =hold;
  this.currentscore = currentscore;
  this.totalscore = totalscore;
}
var holddice = function(){

}

var player1 = new player(0, 0, 0);
var player2 = new player(0, 0, 0);

$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    player1.roll = rolldice();
    $("h4#output").text(player1.roll)
    console.log(player1.roll);
  })
  $("button#roll").click(function(event) {
    event.preventDefault();
    player1.roll = rolldice();
    $("h4#output").text(player1.roll)
    console.log(player1.roll);
  })
  $("button#hold").click(function(event) {
    event.preventDefault();
    player2.hold = holddice();
    $("h3#output").text(player2.hold)
    console.log(player2.hold);
  })
  $("button#hold").click(function(event) {
    event.preventDefault();
    player2.hold = holddice();
    $("h3#output").text(player2.hold)
    console.log(player2.hold);
  })
})
// function Player(name){
//   this.name=name;
//
//   this.currentscore = 0;
//   this.totalscore = 0;
//   // this.player=activeplayer,
// };
//
// Player.prototype.rolldice = function(){
//   if  (roll ===1){
//   this.currentscore=0;
//   switchActivePlayer();
// }
//   else{
//     this.currentscore +=roll;
//   }
//   return roll;
//   switchActivePlayer{
//
//   }
//   roll{
//
//   }
// hold{
//
// }
// };
//
// // front-end
//
// $(document).ready(function(){
//   $("form#name").click(function(event){
//       event.preventDefault();
//
//
//
// var player1 = $("input#pl" ).val();
// var player2 = $("input#pla").val();
//
// var player1 = new Player(player1);
// console.log();
// });
// });
