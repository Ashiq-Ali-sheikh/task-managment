require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// database connection
connection();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// routes
app.use("/api/task_managment", taskRoutes);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
