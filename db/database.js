const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "happy11$",
    database: "unodb",
    connectionLimit: 50,
    waitForConnection: true,
    debug: false,
});
const promisePool = pool.promise();
module.exports = promisePool;