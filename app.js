const formidable = require('formidable');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mailer = require('nodemailer');
const md5 = require('md5');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const favicon = require('serve-favicon');
const main = require ('./public/member/assets/js/main.js');
const router = express.Router();
const app = express();
const admin = express();
const login = require('./routes/login.js');
const sql = require('./db.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
//set the homepage etc.
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res, next){
       res.render('index'); 
       res.end();
       });
//set the members corner
app.use(express.static(path.join(__dirname, './member')));
app.get('/dashboard', function(req, res, next){
       res.render('dashboard'); 
       res.end();
       });
//route to handle user registration
router.post('/registration', login.register);
app.use('./member', router);
app.listen(3000, function (err, res){
       if (err){
       console.log('server crashed')}
       else {;
console.log('server started at localhost:3000')}
});

console.log(md5('123133'));

