const {readFile} = require('fs').promises;

async function hello(){
    const file = await readFile('/home/wintphyusinmaung/Documents/easy-step-node/hello.txt ','utf-8');
    console.log(file);
} 


hello();

console.log('hello');