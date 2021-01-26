const input = document.querySelector('input');
const updateH1 = document.querySelector('h1');
const container = document.querySelector('#container');
const button = document.querySelector('#clrBtn');

input.addEventListener('input', (e) => {
    updateH1.innerText = input.value;
})

button.addEventListener('click', (e) => {
    container.style.backgroundColor = randColor();
    e.stopPropagation();
})
container.addEventListener('click', (e) => {
    container.classList.toggle('hide');
})
const randColor = () => {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    return `rgb(${r}, ${g}, ${b})`;
}