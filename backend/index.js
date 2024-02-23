import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDB } from './utils.js';
import indexRoutes from './routes/indexRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("", indexRoutes);

(async function init() {
    try {
        await connectToDB();
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (err) {
        console.warn(err);
    }
}());
