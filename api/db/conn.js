require("dotenv").config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;


async function connectToDatabase() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado ao MongoDB!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

module.exports = connectToDatabase;