require('dotenv').config(); // Load environment variables before anything else

const express = require('express');
const connectDB = require('./db/index'); // Adjust the path if necessary

const app = express();

// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
