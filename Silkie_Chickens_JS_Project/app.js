const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.innerText = 'I am a link!';
    link.style.color = 'cyan';
}

document.querySelector('h1').innerHTML = '<em>Silkie Chicken </em>';

//document.querySelector('#banner').id = 'changedTheId'

const firstLink = document.querySelector('a');

firstLink.getAttribute('href');
// returns "/wiki/List_of_chicken_breeds"

firstLink.setAttribute('href', 'http://google.com/');

const input = document.querySelector('input[type="text"]');

input.setAttribute ('type', 'password');

const h2 = document.querySelector('h2');
h2.classList.add('pink');
h2.classList.add('border');

const firstBold = document.querySelector('b');
const paragraph = firstBold.parentElement

//traversing
//parentElement and childElement
//previousElementSibling and nextElementSibling

//append and appendChild (making a new DOM element)

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1511739172509-0e5da91222d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80');
document.body.appendChild(newImg);
newImg.classList.add('square')

const newH3 = document.createElement('h3');
newH3.innerText = "I am new!";
document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('i am new text woo!!', 'I loveeee chickens!');

const newB = document.createElement('b');
newB.append('Hi! ');
p.prepend(newB);

const newH2 = document.createElement('h2');
newH2.append('Are adorable chickens');
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', newH2);
const h3 = document.createElement('h3');
h3.append('I am h3');
h1.after(h3)

//insertAdjacentElement(afterend, elem) is like after