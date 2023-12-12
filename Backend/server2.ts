import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import { router } from "./admin-controller/admin-controller";

const app=express();
app.use(express.json());
app.use(cors());

app.use('/admin',router);

const mongoUrl = 'mongodb://127.0.0.1:27017/sunrisedb';
mongoose.connect(mongoUrl);

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});