const Express = require('express');
const server = new Express();

server.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

server.get('/json', (req, res) => {
    const response = {
        message: 'HELLO WORLD',
        app: "app.js"
    }
    res.status(201).json(response);
});



server.listen(8080, () => {
    console.log('---------------------------------\n\t Server iniciado... \n---------------------------------')
})