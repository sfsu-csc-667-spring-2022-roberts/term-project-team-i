require('dotenv').config();

module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  },
  "test": {
    "use_env_variable":"DATABASE_URL",
    "dialect": "postgres"
  },
  "production":{
    "use_env_variable":"DATABASE_URL",
    "dialect": "postgres",
    "ssl": {      /* <----- Add SSL option */
      "require": "true",
      "rejectUnauthorized": "false"
    }

  }
}