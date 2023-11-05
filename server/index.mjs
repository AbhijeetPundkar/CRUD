import express from 'express';
import Connection from './database/db.mjs';
import dotenv from 'dotenv';
import Routes from './routes/route.mjs';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

const PORT = 8000;
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.use('/',Routes);






app.listen(PORT,  () => console.log( `server runing on port ${PORT}`));