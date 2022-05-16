var db = require('../db/database');
const availableGamesMiddleware = {};

availableGamesMiddleware.getAvailableGames = function(req,res,next){
    let baseSQL = "SELECT gameid FROM game";
    db.execute(baseSQL,[])
    .then(([results, fields])=>{
    console.log(results);
    res.locals.results = results;

    next();
    
    })
    .catch((err)=> next(err));

} 
module.exports = availableGamesMiddleware;