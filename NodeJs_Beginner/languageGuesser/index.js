const franc = require('franc');
const langs = require('langs');

const txt = process.argv[2];

const code = franc(txt);

if(code === 'und'){
    console.log('try more sample text')
} else {
    const language = langs.where('3', code);
    console.log('Our best guess is', language.name);
}
