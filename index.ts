
// Import the express in typescript file
import express from 'express';

// mongo code
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoString = process.env.MONGO_DATABASE_URL || '';
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Initialize the express engine
const app: express.Application = express();

const port: number = 8080;

app.get('/health', (request, response) => {
    response.status(200).send('Health check OK');
})

// Server setup
app.listen(port, () => {
    console.log(`Server running on 
         http://localhost:${port}/`);
});

