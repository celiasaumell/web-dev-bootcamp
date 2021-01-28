const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

p1.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
    }
    p1Display.textContent = p1Score;
  }
});


p2.addEventListener("click", () => {
    if (!isGameOver) {
      p2Score++;
      if (p2Score === winningScore) {
        isGameOver = true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser')

      }
      p2Display.textContent = p2Score;
    }
  });
  
reset.addEventListener('click', resetGame);

function  resetGame() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
  }