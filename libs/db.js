const mysql = require('mysql');
const server = require('../app.js');
var con = mysql.createConnection({
  host: "localhost",
  user: "Swift",
  password: "Swift1",
  database: "swiftdb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("The fucking mysql is now Connected! choi!");
});
 
