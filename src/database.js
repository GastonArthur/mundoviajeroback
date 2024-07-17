const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
    host: process.env.mysql_host,
    user:process.env.mysql_user,
    password:process.env.mysql_password,
    database:process.env.mysql_database,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
});

module.exports = pool;