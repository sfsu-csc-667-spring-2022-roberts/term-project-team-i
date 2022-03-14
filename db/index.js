const pgp = require('pg-promise')();

const config = {
    connectionString: process.env.DATABASE_URL,
    max: 30,
    ssl:ssl
 };

//const connection = pgp(process.env.DATABASE_URL);
const connection = pgp(config);

module.exports = connection;