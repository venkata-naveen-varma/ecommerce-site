import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// DB connection with mongodb
mongoose.connect(process.env.DB_CONNECTION);

app.get('/', (req,res)=>{
    res.send("Express app running...");
})




app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on port ", port);
    }else{
        console.log("Error:", error);
    }
})
