const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const gameSelect = document.querySelectorAll("#game-select");

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOver = false;

p1.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});


p2.addEventListener("click", () => {
    if (!isGameOver) {
      p2Score++;
      if (p2Score === winningScore) {
        isGameOver = true;
      }
      p2Display.textContent = p2Score;
    }
  });
  
