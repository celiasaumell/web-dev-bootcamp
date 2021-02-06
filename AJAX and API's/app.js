
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;

}
const jokes = document.querySelector('#jokes');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const btnJoke = document.querySelector('button');
btnJoke.addEventListener('click', () => {
    addNewJoke();
})