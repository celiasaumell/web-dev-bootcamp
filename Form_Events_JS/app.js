const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// const tweets = document.querySelectorAll('li');

// for(let tweet of tweets) {
//     tweet.addEventListener('click', (e) => {
//         tweet.remove;
//     })
// }

tweetsContainer.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
})

tweetForm.addEventListener('submit', (e) => {    
    e.preventDefault();

    const usernameInp = tweetForm.elements.username;
    const tweetInp = tweetForm.elements.tweet;

    addTweet(usernameInp.value, tweetInp.value);

    usernameInp.value = '';
    tweetInp.value = '';

})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}