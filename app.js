const express = require('express');
const path = require('path');

const router = express.Router();

const app = express();

//set the homepage etc.
app.engine('html', swig.renderFile);
app.get('/', function(req, res){
       res.send('Hello. World');-----@'@
       });
       

app.listen(3000, function (err, res){
       if (err){
       console.log('server crashed')}
       else {;
console.log('server started at localhost:3000')}
});
