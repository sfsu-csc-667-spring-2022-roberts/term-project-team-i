var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var db = require('../db/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', (req,res,next)=> {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.password;

  db.execute("SELECT * FROM user WHERE username = ?", [username])
  .then(([results, fields]) => {
    if(results && results.length == 0){
      return db.execute("SELECT * FROM user WHERE email = ?", [email]);
    } else {
      //throw an error
    }
  })
  .then(([results, fields]) => {
    if(results && results.length == 0){

      let baseSQL = 'INSERT INTO user (username, email, password, create_time) VALUES (?,?,?,now());'
      return db.execute(baseSQL,[username, email, password]);
    } else {
      //throw an error
    }
  }); 
}); 

module.exports = router;
