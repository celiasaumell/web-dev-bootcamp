let p1Score = 0;
let p2Score = 0;


const score = document.querySelector('#score');
const gameSelect = document.querySelectorAll('#game-select');

const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');


p1.addEventListener('click', (e) => {
    p1Score++;
    score.innerHTML = `${p1Score} to ${p2Score}`;
})

p2.addEventListener('click', (e) => {
    p2Score++;
    score.innerHTML = `${p1Score} to ${p2Score}`;
})

