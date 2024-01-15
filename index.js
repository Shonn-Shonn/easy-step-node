const {readFile} = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (request,respond) => {
    
    respond.send(await readFile('/home/wintphyusinmaung/Documents/easy-step-node/home.html','utf-8'))
});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`));