const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

const JobRoutes = require('./routes/JobRoutes');
const connectToDatabase = require('./db/conn');

app.use('/job', JobRoutes);

connectToDatabase();

app.listen(3000, () => {
    console.log("Server is running");
})