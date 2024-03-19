
// Import the express in typescript file
import express from 'express';
import Point from './customClass';
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

let point = new Point(4,5);
console.log('point-->' + point.add());
// Initialize the express engine
const app: express.Application = express();

// Take a port 8080 for running server.
const port: number = 8080;


// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});

