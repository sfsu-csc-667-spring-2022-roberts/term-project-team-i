var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var db = require('../db/database');
var bcrypt = require('bcrypt');


//TODO - use this users.js route as a guide for other routes to 
//      access specific data, and submit other data to database.

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', (req,res,next)=> {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;

  //TODO - server side validation:
  //    Check that password and cpassword are the same

  //TODO - throw errors for registration validation
  //    can possibly "res.redirect" to an error page or the signup page
  //    maybe with some fields still filled?

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
      return bcrypt.hash(password, 10);
      
    } else {
      //throw an error
    }
  })
  .then((hashedPassword) => {
    
    let baseSQL = 'INSERT INTO user (username, email, password, create_time) VALUES (?,?,?,now());'
    return db.execute(baseSQL,[username, email, hashedPassword]);
  })
  .then(([results, fields]) => {
    if(results && results.affectedRows){
      res.redirect('/login');
    } else {
      //throw an error
    }
  }); 
}); 
router.post('/login',(req,res,next) => {
  let username = req.body.username;
  let password =  req.body.password;

  //do serverside validation

  let baseSQL = "SELECT id, username, password FROM user WHERE username = ?;";
  let userId;
  db.execute(baseSQL,[username])
  .then(([results, fields])=> {
    if(results && results.length == 1){
      let hashedPassword = results[0].password;
      userId= results[0].id;
      return bcrypt.compare(password, hashedPassword); //checks password 
    } else {
      //user not found
      //throw error invalid username.
      res.redirect('/login');
    }
  })
  .then((passwordsMatched) => {
    if(passwordsMatched){ //if password mathched
      req.session.username = username;
      req.session.userId = userId;
      res.redirect('/lobby');
      
    } else {
      //passwrod did not match
      //throw error invalid password.
      res.redirect('/login');
    }
  })
  .catch((err)=> {
    // throw message server error
  })

});

module.exports = router;
