import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser
import connectDB from './db/mongo'; // Import the database connection configuration


import todoRoutes from './routes/toDos';

// import * as authorization from "./middleware/auth";



const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB()

app.use('/toDo', todoRoutes )

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});