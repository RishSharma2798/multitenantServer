import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as tableRouter } from './routes/table.routes';
const app = express();
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'https://408-ui.netlify.app/'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/table', tableRouter);

export default app;
