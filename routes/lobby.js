var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var db = require('../db/database');

/*
// TODO
// started, but this is not working yet
// this should pull available games from the games table in the DB, and pass them to 
// the front end using res.render(), where they will be displayed on the "join" tab
router.get('/lobby', (req,res,next)=> {
    // let username = req.body.username;
    // let email = req.body.email;
    // let password = req.body.password;
    // let cpassword = req.body.cpassword;

    let lobbyName = req.body.lobbyName;
    let maxPlayers = req.body.maxPlayers;
    let timeLimit = req.body.timeLimit;

    let isActive = 1;

    console.log(lobbyName);
    console.log(maxPlayers);
    console.log(timeLimit);

    //I have the data from the for right here.

    //next we want to put it into the database

    //looks like the DB tables need to be modified to fit all of this data,
    //as the fields currently there do not match.

    //check to see if gameID already exists
    console.log("in lobby route");
    db.execute("SELECT * FROM game")
    .then(([results, fields]) => {
      if(results && results.length >= 0){
          console.log("grabbed games from DB...");

          console.log(results);

          // TODO
          //need to loop over or parse the values from results, 
          // in order to pass them to front end and display them.
          // or - pass all of them as a block and parse it using JS on the frontend.

          //let baseSQL = 'INSERT INTO game (gameid, is_active, create_time, update_time) VALUES (?,?,now(),now());'
          //return db.execute(baseSQL,[lobbyName, isActive]);

      } else {
         
         res.redirect('/lobby?message=That Lobby name already exists!'); 
      }
    })
    .then(([]) => {
        // after user creates a game successfully - they are redirected to that game.
        // ****
        //here, we can build a json response object with res.json({fields: values})
        // then, we will write a vanilla javascript function to fill the values by
        // getting the html elements on the /game page by their id.
        // maybe write a function to set each value, the title, players, and time, all separate.
        res.render("lobby", {
                lobbyName: "Pickles",
                maxPlayers: maxPlayers,
                timeLimit: timeLimit
            }
        );
        //} else {
          //res.redirect('/signup?message=Failed to register the new user.');
        //}
      });
  
  /*
    db.execute("SELECT * FROM user WHERE username = ?", [username])
    .then(([results, fields]) => {
      if(results && results.length == 0){
        return db.execute("SELECT * FROM user WHERE email = ?", [email]);
      } 
    })
    .then(([results, fields]) => {
      if(results && results.length == 0){
        return bcrypt.hash(password, 10);
      } else {
          res.redirect('/error'); 
      }
    })
    .then((hashedPassword) => {
      
      let baseSQL = 'INSERT INTO user (username, email, password, create_time) VALUES (?,?,?,now());'
      return db.execute(baseSQL,[username, email, hashedPassword]);
    })
    .then(([results, fields]) => {
      if(results && results.affectedRows){
        res.render('login', {message: 'New user has been registered successfully.'});
      } else {
        res.render('register', {message: 'Failed to register the new user.'});
      }
    }); 
    
  }); 
 */
  module.exports = router; 