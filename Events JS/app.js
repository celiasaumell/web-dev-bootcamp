const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('YOU CLICKED ME');
    console.log('I HOPE IT WORKED!');
}
function scream(){
    console.log('AHHHHH');
    console.log('STOP TOUCHIN ME!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('YOU CLICKED THE H1');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click',  () => {
    alert('clicked!');
})

function twist(){
    console.log('twist');
}

function shout(){
    console.log('shout');
}

const btnTas = document.querySelector('#tas');

//btnTas.onclick = twist;
//btnTas.onclick = shout;

btnTas.addEventListener('click', twist, {once: true}); //
btnTas.addEventListener('click', shout, {once: true}); // These two can only be clicked once

