import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import { router } from "./admin-controller/admin-controller";
import dotenv from 'dotenv'

const app=express();
app.use(express.json());
app.use(cors());

app.use('/admin',router);

dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING!;

mongoose.connect(connectionString);
  
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });