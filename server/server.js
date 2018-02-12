const express = require('express');
let app = express();
let port = 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

const computeModule = require('./modules/compute-module');

computation = {};

app.post('/add', function(request, response){
    let computation = request.body.objectToCompute;
    computeModule.addComputation( computation );
    console.log(computation);
    response.sendStatus(200);
});

app.get('/history', function(request, response){
    let history = computeModule.getHistory();
    console.log(history);
    response.send(history);
});

app.listen(port, function(){
    console.log('listening on port:', port);
});



