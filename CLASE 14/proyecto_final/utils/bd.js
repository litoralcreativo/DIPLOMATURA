const mysql = require("mysql");
const util = require("util");

// consultas en crudo: SELECT*FROM usuarios
// consultas por query builder knexjs: bd('usuarios').select(*)
// ORM Eloquent

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

pool.query = util.promisify(pool.query);

module.exports = pool;
