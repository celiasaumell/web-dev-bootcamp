const form = document.querySelector("#competition");
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const gameSelect = document.querySelector("#game");
const gameDisplay = document.querySelector("#bestoutof");
const outcomes = document.querySelectorAll(".player-name");
const start = document.querySelector("#startgame");
const end = document.querySelector("#endgame");
const container = document.querySelector("#gamecontainer");

const p1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#p1Display"),
  name: form.elements.p1Name.value,
  displayWin: document.querySelector("#p1winner"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#p2Display"),
  name: form.elements.p2Name.value,
  displayWin: document.querySelector("#p2winner"),
};

window.onload = document.getElementById("game").options[0].selected =
  "selected";
window.onload = document.getElementById("playto").options[0].selected =
  "selected";
end.disabled = true;
let winningScore = 3;
let isGameOver = false;


start.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.toggle("is-hidden");
  p1.name = form.elements.p1Name.value;
  p2.name = form.elements.p2Name.value;
  outcomes[0].textContent = p1.name;
  outcomes[1].textContent = p2.name;
  end.disabled = false;
  start.disabled = true;
});

end.addEventListener('click', function(e){
  e.preventDefault();
  container.classList.toggle('is-hidden');
  p1.name = null;
  p2.name = null;
  form.reset();
  resetGame();
  end.disabled = true;
  start.disabled = false;
})


gameSelect.addEventListener("change", (e) => {
  if (e.target.value === "3out5") {
    gameDisplay.textContent = "Best 3 out of 5";
  } else {
    gameDisplay.textContent = "Best 2 out of 3";
  }
});


winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      player.displayWin.classList.add("image-winner");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

reset.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.displayWin.classList.remove("image-winner");
  p2.displayWin.classList.remove("image-winner");
  p1.button.disabled = false;
  p2.button.disabled = false;
}
