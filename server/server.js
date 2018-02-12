const express = require('express');
let app = express();
let port = 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

const computeModule = require('./modules/compute-module');

let computation = {};

app.post('/calculate', function(request, response){
    let computation = request.body.objectToCompute;
    response.sendStatus(200);
    console.log(computation);
});

app.get('/calculate', function(request, response){
    let answer = computeModule(request.body.computation);
    return answer;
    console.log(answer);
    response.send(answer);
});

app.listen(port, function(){
    console.log('listening on port:', port);
});



