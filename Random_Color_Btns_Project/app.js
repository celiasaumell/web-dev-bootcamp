const randColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

function colorize() {
  this.style.backgroundColor = randColor();
  this.style.color = randColor();
}

const buttons = document.querySelectorAll("button");
const allH1 = document.querySelectorAll("h1");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

for (let h1 of allH1) {
  h1.addEventListener("click", colorize);
}

const input = document.querySelector("input");
input.addEventListener("keydown", (evt) => {
  console.log(evt.key);
  console.log(evt.code);
});

//used 'window' for the whole window
window.addEventListener("keydown", function (evt) {
  switch (evt.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("ignored!");
  }
});
