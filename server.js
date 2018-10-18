var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res){
    fs.readFile('./test.json', 'utf8', function(err, data){
        stringifyFile = data + req.params.note;
        fs.writeFile('./test.json', stringifyFile , function(err){
        if (err) throw err;
        console.log('file uploaded')
        res.send(stringifyFile);
        });
    });
});

app.listen(3000);

// inna wersja która daje taki sam efekt
//app.get('/getNote', function(req, res) {
    //fs.readFile('./test.json', 'utf8', function(err, data) {
        //if (err) throw err;
        //stringifyFile = data;
        //res.send(data);
    //});
//});
  
//app.post('/updateNote/:note', function(req, res) {
    //stringifyFile = req.params.note;
    //fs.writeFile('./test.json', stringifyFile, function(err, data) {
        //if (err) throw err;
        //console.log('file updated');
        //fs.readFile('./test.json', 'utf8', function(err, data) {
            //if (err) throw err;
            //res.send(data);
        //});
    //});
//});
  
//app.listen(3000);