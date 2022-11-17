const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();


// Set up server
const app = express();
const port = process.env.PORT || 9998;

app.use(cors()); 
app.use(express.json());


// Connect to MongoDB 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri); 

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB connection established");
})

// Routes
const userRouter = require('./routes/users');
app.use('/users', userRouter);

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);


app.listen(port, () => {
    console.log(`Server is currently running on port: ${port}`);
})

