let turnNumber = 0;
let turn = '';
let winner = 0;
let winnerColor = "yellow";

const gamebuttons = [];
gamebuttons[0] = document.querySelector(".topleft");
gamebuttons[1] = document.querySelector(".topcenter");
gamebuttons[2] = document.querySelector(".topright");
gamebuttons[3] = document.querySelector(".middleleft");
gamebuttons[4] = document.querySelector(".middlecenter");
gamebuttons[5] = document.querySelector(".middleright");
gamebuttons[6] = document.querySelector(".bottomleft");
gamebuttons[7] = document.querySelector(".bottomcenter");
gamebuttons[8] = document.querySelector(".bottomright");

const header = document.querySelector(".display-4");

function determineTurn() {
  if (turnNumber % 2 == 0) {
    turn = 'X';
    header.innerHTML = "Player O turn";
  } else {
    turn = 'O';
    header.innerHTML = "Player X turn";
  }
}

function celebrateWinner(box1, box2, box3) {
  box1.classList.add("winner");
  box2.classList.add("winner");
  box3.classList.add("winner");
  header.innerHTML = "Player " + turn + " is the winner!" }

function findWinner() { 
  var topleft = document.querySelector(".topleft");
  var topcenter = document.querySelector(".topcenter");
  var topright = document.querySelector(".topright");
  var middleleft = document.querySelector(".middleleft");
  var middlecenter = document.querySelector(".middlecenter");
  var middleright = document.querySelector(".middleright");
  var bottomleft = document.querySelector(".bottomleft");
  var bottomcenter = document.querySelector(".bottomcenter");
  var bottomright = document.querySelector(".bottomright");

  if (topleft.innerHTML !== "" && topleft.innerHTML === middleleft.innerHTML &&  middleleft.innerHTML === bottomleft.innerHTML) {
    celebrateWinner(topleft, middleleft, bottomleft);
  } else if (topcenter.innerHTML !== ""  && topcenter.innerHTML === middlecenter.innerHTML && middlecenter.innerHTML === bottomcenter.innerHTML) {
    celebrateWinner(topcenter, middlecenter, bottomcenter);
  } else if (topright.innerHTML !== "" && topright.innerHTML === middleright.innerHTML && middleright.innerHTML === bottomright.innerHTML) {
    celebrateWinner(topright, middleright, bottomright);
  } else if (topleft.innerHTML !== "" && topleft.innerHTML === topcenter.innerHTML && topcenter.innerHTML === topright.innerHTML) {
    celebrateWinner(topleft, topcenter, topright);
  } else if (middleleft.innerHTML !== "" && middleleft.innerHTML === middlecenter.innerHTML && middlecenter.innerHTML === middleright.innerHTML) {
    celebrateWinner(middleleft, middlecenter, middleright);
  } else if (bottomleft.innerHTML !== "" && bottomleft.innerHTML === bottomcenter.innerHTML && bottomcenter.innerHTML === bottomright.innerHTML) {
    celebrateWinner(bottomleft, bottomcenter, bottomright);
  } else if (topleft.innerHTML !== "" && topleft.innerHTML === middlecenter.innerHTML && middlecenter.innerHTML === bottomright.innerHTML) {
    celebrateWinner(topleft, middlecenter, bottomright);
  } else if (topright.innerHTML !== "" && topright.innerHTML === middlecenter.innerHTML && middlecenter.innerHTML === bottomright.innerHTML) {
    celebrateWinner(topright, middlecenter, bottomleft);
  }
}

// Play once buttons are pressed
for (var i = 0; i < gamebuttons.length; i++) {
  gamebuttons[i].onclick = function() {
    determineTurn();
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      this.innerHTML = turn;
      findWinner();
    }
  turnNumber++;
  };
}

// Restart functionality
document.getElementById('restartbutton').addEventListener('click', restart);
function restart() {
  for (var i = 0; i < gamebuttons.length; i++) {
    gamebuttons[i].classList.remove("winner");
    gamebuttons[i].innerHTML = "";
    header.innerHTML = "Play";
  }

}
