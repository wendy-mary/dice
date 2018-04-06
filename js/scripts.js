function Player(name){
  this.name=name;

  this.currentscore = 0;
  this.totalscore = 0;
  // this.player=activeplayer,
};

Player.prototype.rolldice = function(){
  var roll = maths.floor(maths.random()*6)+1;
  if  (roll ===1){
  this.currentscore=0;
}
  else{
    this.currentscore +=roll;
  }
  return roll

};

// bussiness logic

$(document).ready(function(){
  $("#rol").click(function(event){
      event.preventDefault();



var player1 = $("input#pl" ).val();
var player2 = $("input#pla").val();

var player1 = new Player(player1);
console.log();
});
});
