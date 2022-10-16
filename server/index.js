require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");
const songRoutes = require("./routes/songs");
const fileRoutes = require('./routes/files')

// Database Connection
connection();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/songs", songRoutes);

app.use('/api/files', fileRoutes)

const port = process.env.PORT || 8080 
app.listen(port, () => console.log(`Listening on port ${port}...`))