import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();
app.use(express.json());

app.use('/api/notes', notesRoutes);

// Test route to check if the server is running
app.get('/', (req, res)=>{
    res.status(200).send('Express Server is Running on my laptop.')
})

// Start the server
app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})