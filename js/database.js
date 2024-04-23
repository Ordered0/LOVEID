const { Pool } = require('pg');

const pool = new Pool({
    user: 'loveidAdm',
    host: 'localhost',
    database: 'loveidAdm',
    password: 'S4suk3uch1h4@1996',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
