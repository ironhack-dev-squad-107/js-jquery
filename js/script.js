function changeSelection(newClass) {
  $(".player .selection").removeClass("rock paper scissors");
  $(".player .selection").addClass(newClass);
}

// WITHOUT jQuery
// var rock = document.querySelector(".rock-btn");
// rock.onclick = function () {};
$(".rock-btn").click(function() {
  // keep your click functions short by using named functions
  changeSelection("rock");
});

$(".paper-btn").click(function() {
  changeSelection("paper");
});

$(".scissors-btn").click(function() {
  changeSelection("scissors");
});

// -----------------------------------------------------------------------------

function selectOpponent() {
  // choose one of the classes at random
  var classes = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * classes.length);
  var chosenClass = classes[randomIndex];

  // add the class to the opponent's box
  $(".opponent .selection").removeClass("rock paper scissors");
  $(".opponent .selection").addClass(chosenClass);
}

function updateWinnerText() {
  var isRock = $(".player .selection").hasClass("rock");
  var isPaper = $(".player .selection").hasClass("paper");

  if (isRock) {
    // opponent: rock ties, paper we lose, scissors we win
    playerRock();
  } else if (isPaper) {
    // opponent: paper ties, scissors we lose, rock we win
    playerPaper();
  } else {
    // opponent: scissors ties, rock we lose, paper we win
    playerScissors();
  }

  // show the game over screen
  $(".game-end").addClass("showing");
}

function playerRock() {
  // opponent: rock ties, paper we lose, scissors we win
  if ($(".opponent .selection").hasClass("rock")) {
    $(".game-end h2").html("It's a tie! 😑");
  } else if ($(".opponent .selection").hasClass("paper")) {
    $(".game-end h2").html("Opponent wins. 😢");
  } else {
    $(".game-end h2").html("You win! 🤩");
  }
}

function playerPaper() {
  // opponent: paper ties, scissors we lose, rock we win
  if ($(".opponent .selection").hasClass("paper")) {
    $(".game-end h2").html("It's a tie! 😑");
  } else if ($(".opponent .selection").hasClass("scissors")) {
    $(".game-end h2").html("Opponent wins. 😢");
  } else {
    $(".game-end h2").html("You win! 🤩");
  }
}

function playerScissors() {
  // opponent: scissors ties, rock we lose, paper we win
  if ($(".opponent .selection").hasClass("scissors")) {
    $(".game-end h2").html("It's a tie! 😑");
  } else if ($(".opponent .selection").hasClass("rock")) {
    $(".game-end h2").html("Opponent wins. 😢");
  } else {
    $(".game-end h2").html("You win! 🤩");
  }
}

// WITHOUT jQuery
// var submit = document.querySelector(".submit-btn");
// submit.onclick = function () {};
$(".submit-btn").click(function() {
  // keep your click functions short by using named functions
  selectOpponent();
  updateWinnerText();
});

// -----------------------------------------------------------------------------

// "Play Again" button
$(".game-end button").click(function() {
  $(".game-end").removeClass("showing");
  $(".selection").removeClass("rock paper scissors");
});
