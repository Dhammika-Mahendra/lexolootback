import express from 'express';

const app = express();

//Middlewares =================================================>>>>

//parse incoming request with JSON payloads
app.use(express.json());

//===============================================================>>>

app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.get("/Name", (req, res) => {
  const name = req.query.name
  res.send(`Name is ${name}`)
})




const port = 3000||8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
