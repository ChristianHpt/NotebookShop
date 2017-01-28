var mongodb = require('mongodb');
var express = require('express');

var app = express();

const PORT = 8080;

app.get('/',function(request,response){
    response.status(200).send('Hello World!');
});

app.listen(PORT,function(){
    console.log('server listen on port: ' + PORT);
});