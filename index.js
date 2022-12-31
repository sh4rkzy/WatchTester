const Express = require('./config');
let app = new Express();
// Path: config.js


function getHelloWorld(req, res){
    res.send('Hello World!');
}
function getTest(req, res){
    return(
        res.send('Test')
    )
}

app.app.get('/', getHelloWorld);

app.app.get('/test', getTest);



