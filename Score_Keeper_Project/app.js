const p1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#p1Display"),
  playerName: document.querySelector("p1Name")
}

const p2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#p2Display"),
  playerName: document.querySelector("p2Name")
}

const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const gameSelect = document.querySelector('#game');
const gameDisplay = document.querySelector('#best');



let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

function updateScores(player, opponent){
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
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
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.playerName.textContent = '';
  p2.playerName.textContent = '';
}
