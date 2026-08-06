import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());

connectDB();

app.use('/api/notes', notesRoutes);

// Test route to check if the server is running
app.get('/', (req, res)=>{
    res.status(200).send('Express Server is Running on my laptop.')
})

const PORT = process.env.PORT || 8000;
// Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
