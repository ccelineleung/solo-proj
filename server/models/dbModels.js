const { Pool } = require('pg');

const PG_URI =
  'postgres://zjbbqbvu:Gp_OrWw7CGV438t6nZT9TQlYCV8J0xy-@heffalump.db.elephantsql.com/zjbbqbvu';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
