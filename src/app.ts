import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as tableRouter } from './routes/table.routes';
const app = express();
// const corsOptions = {
//     credentials: true,
//     origin: '*' // Allow requests from any origin
// };

// app.use(cors(corsOptions));
app.use((req, res, next) => {   res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your origin  
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');   
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');   next(); });

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/table', tableRouter);

export default app;
