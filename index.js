import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const host = '0.0.0.0';

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.get('/', (req, res) => {
  res.send('hello api')
})

const CONNECTION_URL = process.env.MONGO_URL;

// mongo db cloud atlas
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, host, () => console.log(`server running on port ${port}`))
  )
  .catch((err) => console.log(err.message));
