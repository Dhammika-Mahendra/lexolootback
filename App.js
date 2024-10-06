const express = require('express');
const db = require('./MySQLDatabase');

const app = express();

//Middlewares =================================================>>>>

//parse incoming request with JSON payloads
app.use(express.json());

//===============================================================>>>

app.get('/emp', (req, res) => {
  const query = 'SELECT * FROM employee';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      res.status(500).send('Server error');
    } else {
      res.json(results);  // Send the fetched data as JSON response
    }
  });
});


const port = 3000||8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
