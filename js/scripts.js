//back-end
var rolthrowdice = function() {

  return Math.floor(Math.random() * 6) + 1;

}

function player(roll, currentscore, totalscore) {
  this.roll = roll;
this.hold = hold;
  this.currentscore = currentscore;
  this.totalscore = totalscore;
}
var player1 = new player(0, 0, 0);
var player2 = new player(0, 0, 0);


player.prototype.rollone = function() {

    if (this.roll === 1) {

      this.currentscore = 0;

      alert("you scored  1 please switch !")

    }
    else {

      this.currentscore += this.roll;

    }
  }
    player.prototype.hold = function() {

      this.total += this.currentscore;

      this.currentscore = 0;

    }

    player.prototype.winner = function() {

        if (this.total >= 100) {

          alert("winner!!!")
        }
      }
        player.prototype.newGame = function(roll, currentscore, totalscore) {

          this.roll = roll;

          this.currentscore = currentscore;

          this.total = total

        }





        $(document).ready(function() {
          $("button#start").click(function(event){
event.preventDefault();
              $(".playerconsolecontainer").show();
              $(".intro").hide();
              var player1Name =$("input#play").val();
              $("h2#player1").text(player1Name + " :");
              var player2Name =$("input#pla").val();
              $("h2#player2").text(player2Name + " :");
              //rolling
              $("button#roll").click(function(event) {

      player1.roll = throwdice();


      $("#rolls").text(player1Name.roll);

      player1.rollone();

      $("#currentscore").text(playerName1.currentscore);

    })
    $("button#rol").click(function(event) {

player2.roll = throwdice();


$("#rolls1").text(player2Name.roll);

player2Name.rollone();

$("#currentscore1").text(player2Name.currentscore);
})
//holding and checking
$("button#hold").click(function(event) {

      player1Name.hold();

      $("#totals").text(player1Name.total);

      $("#totals").empty();

      $("#rolls").empty();

      player1Name.winner();

    });
    $("button#hol").click(function(event) {

          player2Name.hold();

          $("#totals").text(player1Name.total);

          $("#totals1").empty();

          $("#rolls1").empty();

          player2Name.winner();

        });
        //newgame
        $("button#new").click(function() {

        $(".playerconsolecontainer").show();

        $("input#play").val("");

        $("input#pla").val("");

        player1Name.newGame();

        player2Name.newGame();

        $("#rolls").empty();

        $("#currentscore").empty();

        $("#totals").empty();

        $("#rollls1").empty();

        $("#currentscore1").empty();

        $("#totals1").empty();

        $(".intro").hide();

      });
    });
  });










            //   var player1Name = $("input#player2").val();
            //
            //   $("h2#player1").text(player1Name + " :");
            //   var player2Name = $("input#player2").val();
            //
            //   $("#pla").text(player2Name + " :");
            //
            //   $("button#rol").click(function(event) {
            //     player1.roll = rolldice();
            //     $("h4#output").text(player1.roll)
            //     $("#rol").text(playerName1.roll);
            //     $("#total").text(player1.currentscore)
            //     player1.rolldice()
            //   });
            //   // console.log(player1.roll);
            //
            //   $("button#roll").click(function(event) {
            //     event.preventDefault();
            //     player1.roll = rolldice();
            //     $("h3#output").text(player1.rolldice)
            // // console.log(player1.roll);
            //   });
            //
            //   $("button#player1-hold").click(function(event) {
            //
            //     player1.hold();
            //
            //     $("#totalscore").text(player1.totalscore);
            //
            //     $("#totalscore").empty();
            //
            //     $("#rol").empty();
            //
            //     playerName1.winner();
            //
            //   });
            //   // console.log(player2.hold);
            //
            //   $("button#hold").click(function(event) {
            //     event.preventDefault();
            //     player2.hold = hold();
            //     $("h3#output").text(player2.hold);
            //     // console.log(player2.hold)
            //     $("button#hold").click(function(event) {
            //
            //       player2.hold();
            //
            //       $("#totalscore").text(playerName1.total);
            //
            //       $("#currentscore").empty();
            //
            //       $("#hold").empty();
            //
            //       player1.winner();
            //
            //     })
            //   });

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
