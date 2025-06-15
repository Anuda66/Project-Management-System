require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); 

// Middleware to handel CORS-------------------------------------------
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

// Middleware to parse JSON requests-----------------------------------
app.use(express.json());

// Rotes
// app.use('/api/auth', authRoutes)
// app.use('/api/users', userRotes)
// app.use('/api/task', taskRotes)
// app.use('/api/reports', reportRotes)


// start the server----------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));