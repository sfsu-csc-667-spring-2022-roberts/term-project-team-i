var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var db = require('../db/database');

router.post('/create', (req,res,next)=> {
    // let username = req.body.username;
    // let email = req.body.email;
    // let password = req.body.password;
    // let cpassword = req.body.cpassword;

    let lobbyName = req.body.lobbyName;
    //let maxPlayers = req.body.maxPlayers;
    //let timeLimit = req.body.timeLimit;

    let username = req.session.username;
    let userId = req.session.userId;

    console.log(username);
    console.log(userId);

    let isActive = 1;

    console.log(lobbyName);
    //console.log(maxPlayers);
    //console.log(timeLimit);

    //I have the data from the for right here.

    //next we want to put it into the database

    //looks like the DB tables need to be modified to fit all of this data,
    //as the fields currently there do not match.

    //check to see if gameID already exists
    db.execute("SELECT * FROM game WHERE gameID = ?", [lobbyName])
    .then(([results, fields]) => {
      if(results && results.length == 0){
          console.log("new game ID for DB");

          let baseSQL = 'INSERT INTO game (gameid, is_active, create_time, update_time) VALUES (?,?,now(),now());'
          return db.execute(baseSQL,[lobbyName, isActive]);

      } else {
         
         res.redirect('/lobby?message=That Lobby name already exists!'); 
      }
    })
    .then(([results, fields]) => {
        // here is where we should
        // db query for insert game, user1=req.session.user
        // user2=null
        // this will establish there is a game with a 
        // user associated to it 
        // 
        // then when we load the game page for any user
        // we will check the game table to see if there is a 
        // game with userID field == req.session.userID
        // from here, we will be verifying if the current user 
        // alraedy belongs to a game, or if they should be be redirected
        // to the /lobby page instead.

        // 1 - write query to push INSERT INTO game (game_fields), 


        // after user creates a game successfully - they are redirected to that game.
        // ****
        //here, we can build a json response object with res.json({fields: values})
        // then, we will write a vanilla javascript function to fill the values by
        // getting the html elements on the /game page by their id.
        // maybe write a function to set each value, the title, players, and time, all separate.
        res.render("game", { title:lobbyName, 
                lobbyName: lobbyName,
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
    */
  }); 

  router.post('/playRound', (req, res, next) => {
    let lp = req.body.lastPlayed;
    console.log("last played: "+lp);

    let cardSelection = req.body.card_radio_btn;
    console.log("card selection: "+cardSelection);
  });

  module.exports = router;