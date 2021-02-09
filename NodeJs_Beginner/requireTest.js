
const math = require('./math');
const cats = require('./shelter');
try{
    console.log(math.PI);
    console.log(math.square(4));
    console.log(math.add(3,7));
    console.log(cats)
} catch(e){
    console.log(e);
}

