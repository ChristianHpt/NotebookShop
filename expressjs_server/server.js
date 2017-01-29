var mongodb = require('mongodb');
var express = require('express');

var app = express();

const PORT = 8080;

app.get('/',function(request,response){
    response.status(200).send('Hello World!');
});

app.get('/rechnung',function(request,response){
    var a = 1;
    var b = 2;
    var c = a + b;
    response.status(200).send(a + ' + ' + b + ' = ' + c);
});

app.get('/insert',function(request,response){
    response.status(200).send('insert');
});

app.get('/delete',function(request,response){
    response.status(200).send('delete');
});

app.get('/update',function(request,response){
    response.status(200).send('update');
});

app.get('/search',function(request,response){
    response.status(200).send('search');
});

app.get('/searchAll',function(request,response){
    response.status(200).send('searchAll');
});

app.listen(PORT,function(){
    console.log('server listen on port: ' + PORT);
});