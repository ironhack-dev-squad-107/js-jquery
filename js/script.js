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

// WITHOUT jQuery
// var submit = document.querySelector(".submit-btn");
// submit.onclick = function () {};
$(".submit-btn").click(function() {
  // keep your click functions short by using named functions
  selectOpponent();
});
