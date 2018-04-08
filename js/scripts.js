
//back-end

var rolldice = function() {

  return Math.floor(Math.random() * 6) + 1;

}

function player(roll, currentscore, totalscore) {

  this.roll = roll;

  this.currentscore = currentscore;

  this.totalscore = totalscore;

}

var player1 = new player(0, 0, 0);

var player2 = new player(0, 0, 0);

//Check if equal to 1

player.prototype.rollone = function() {

  if (this.roll === 1) {

    this.currentscore = 0;

    alert("The current Player Scored a 1 please switch !")

  }
   else {

    this.currentscore += this.roll;

  }

}

//Holding Function

player.prototype.hold = function() {

  this.totalscore += this.currentscore;

  this.currentscore = 0;

  // Changing the player

  alert("The current player has Held the game pass on to the next player");

}

//Checking for the winner

player.prototype.winner = function() {

  if (this.totalscore >= 100) {

    alert("You are the Winner ! Yaay")

  }

}


//Function for Starting a new game

player.prototype.newGame = function(roll, currentscore, totalscore) {

  this.roll = roll;

  this.currentscore = currentscore;

  this.totalscore = totalscore;

}


//User-Logic

$(document).ready(function() {

  $("button#start").click(function(event) {

    event.preventDefault();

    $(".playerconsolecontainer").show();


    var player1Name = $("input#player1").val();

    $("h2#player1").text(player1Name + " :");

    var player2Name = $("input#player2").val();

    $("h2#player2").text(player2Name + " :");

    //Player1 Rolling dice and checking if value is equal to one and showing the round total

    $("button#roll").click(function(event) {

      player1.roll = rolldice();


      $("#roll").text(player1.roll);

      player1.rollone();

      $("#currentscore").text(player1.currentscore);


    })

    //Player 2 rolling Dice and checking if the value is equal to Onea nd showing the round total

    $("button#rol").click(function(event) {

      player2.roll = rolldice();

      $("#rol").text(player2.roll);

      player2.rollone();

      $("#currentscore1").text(player2.currentscore);
      $("#totalscore1").text(player2.totalscore);

    })

    // player 1 Holding and printing the totoal Score and checking for the winner

    $("button#hold").click(function(event) {

      player1.hold();

      $("#totalscore").text(player1.totalscore);

      $("#currentscore").empty();

      $("#roll").empty();

      player1.winner();

    });

    // Player 2 Holding and printing the total Score and checking for the winner

    $("button#hol").click(function(event) {

      player2.hold();

      $("#totalscore1").text(player2.totalscore)

      $("#currentscore1").empty();

      $("#rol").empty();

      player2.winner();

    });

    //Starting a New game

    $("button#new").click(function() {

      $(".playerconsolecontainer").hide();

      $("input#player1").val("");

      $("input#player2").val("");

      player1.newGame();

      player2.newGame();

      $("#roll").empty();

      $("#currentscore").empty();

      $("#totalscore").empty();

      $("#rol").empty();

      $("#currentscore1").empty();

      $("#totalscore1").empty();

      $(".intro").show();

    });

  });

});
