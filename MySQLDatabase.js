// db.js
const mysql = require('mysql2');

// Create connection to the MySQL database
const db = mysql.createConnection({
  host: 'mysql8002.site4now.net', // or your MySQL server host
  user: 'aadf73_bsybdb',      // your MySQL username
  password:'busybeedb123',  // your MySQL password
  database: 'db_aadf73_bsybdb', // your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
