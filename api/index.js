import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.routes.js';
dotenv.config();

mongoose.connect(process.env.Mongo)
    .then(() => {
        console.log('Connected to MongoDB');
         
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err)
        });
    const app = express();

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

    app.use("/api/users", userrouter);