const jokes = require('give-me-a-joke');
const color = require('colors');
const cowsay = require('cowsay')

jokes.getRandomDadJoke(joke => console.log(joke.rainbow))

console.log(cowsay.say({
    text:' grazing in the browser'.rainbow,
    e: '- -',
    T: ';;'
}));