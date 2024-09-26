import express from 'express';

const app = express();

//Middlewares =================================================>>>>

//parse incoming request with JSON payloads
app.use(express.json());

//===============================================================>>>

app.get('/hello', (req, res) => {
  res.send('Hello');
});



const port = 3000||8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
