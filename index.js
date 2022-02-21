import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config()


const app = express();
const port = 5000

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = process.env.MONGO_URL

// mongo db cloud atlas 

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})