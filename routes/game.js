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
    let c1 = parseInt(req.body.c1);
    let c2 = parseInt(req.body.c2);
    let c3 = parseInt(req.body.c3);
    let c4 = parseInt(req.body.c4);
    let c5 = parseInt(req.body.c5);
    let c6 = parseInt(req.body.c6);
    let c7 = parseInt(req.body.c7);

    let cardList = [c1,c2,c3,c4,c5,c6,c7];

    // todo - remove the card from users hand if it is a valid play
    


    let lobbyName = req.body.lobbyName;
    let vp = false;

    let lpString = req.body.lastPlayed;
    let lp = parseInt(lpString);
    console.log("last played: "+lp);

    let ccString = req.body.card_radio_btn; //current card cc
    let cc = parseInt(ccString);
    console.log("card selection: "+cc);

    //removing cc from cardList before return.
    let match = cardList.indexOf(cc);
    console.log("match val: "+match);

    let valueToRemove = cardList[match];
    
    


    //creating lists for checking
    var nil_list = [1,14,27,40];    //0's
    var one_list = [2,15,28,41];    //1's
    var two_list = [3,16,29,42];    //2's
    var three_list = [4,17,30,43];  //3's
    var four_list = [5,18,31,44];   //4's
    var five_list = [6,19,32,45];   //5's
    var six_list = [7,20,33,46];    //6's
    var seven_list = [8,21,34,47];  //7's
    var eight_list = [9,22,35,48];  //8's
    var nine_list = [10,23,36,49];  //9's

    console.log("PLAY ROUND CHECKS BELOW \n");
    console.log("vp: "+vp);

    //if lp is blue, check if cc is blue
    if(lp>0 && lp<11){
      console.log("blue check");
      if(cc>0 && cc<11){
        vp = true;
      }
    }

    //if lp is green, check if cc is green
    if(lp>14 && lp<23){
      console.log("green");
      if(cc>14 && cc<23){
        vp = true;
      }
    }

    //if lp is blue, check if cc is blue
    if(lp>27 && lp<36){
      console.log("red");
      if(cc>27 && cc<36){
        vp = true;
      }
    }

    //if lp is blue, check if cc is blue
    if(lp>40 && lp<49){
      console.log("yellow");
      if(cc>40 && cc<49){
        vp = true;
      }
    }
        
    // checking against 0-cards of other colors
    if(nil_list.indexOf(lp)>=0){
      console.log("0");
      if(nil_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(one_list.indexOf(lp)>=0){
      console.log("1");
      if(one_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(two_list.indexOf(lp)>=0){
      console.log("2");
      if(two_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(three_list.indexOf(lp)>=0){
      console.log("3");
      if(three_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(four_list.indexOf(lp)>=0){
      console.log("4");
      if(four_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(five_list.indexOf(lp)>=0){
      console.log("5");
      if(five_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(six_list.indexOf(lp)>=0){
      console.log("6");
      if(six_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(seven_list.indexOf(lp)>=0){
      console.log("7");
      if(seven_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(eight_list.indexOf(lp)>=0){
      console.log("8");
      if(eight_list.indexOf(cc)>=0){
        vp = true;
      }
    }

    if(nine_list.indexOf(lp)>=0){
      console.log("9");
      if(nine_list.indexOf(cc)>=0){
        vp = true;
      }
    }


    console.log("valid play? "+vp);

    if(vp){
      
      //res.render("game", { title:lobbyName, 
      res.render("contGame", { title:lobbyName,
        lobbyName: lobbyName,
        validPlay: vp,
        valueToRemove: valueToRemove,
        lastPlayed:lp,
        c1: c1,
        c2: c2,
        c3: c3,
        c4: c4,
        c5: c5,
        c6: c6,
        c7: c7
      });
    }
    else{
      // res.render("game", { title:lobbyName, 
      res.render("contGame", { title:lobbyName,
        lobbyName: lobbyName,
        validPlay: false,
        valueToRemove: "none-invalid-card-played",
        lastPlayed: lp,
        c1: c1,
        c2: c2,
        c3: c3,
        c4: c4,
        c5: c5,
        c6: c6,
        c7: c7
      });
    }

  });

  module.exports = router;