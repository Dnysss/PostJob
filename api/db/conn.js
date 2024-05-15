const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://denysmchl:d12e08y20@postjob.hevxosr.mongodb.net/?retryWrites=true&w=majority&appName=postjob');
        console.log("Conectado ao MongoDB!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

module.exports = connectToDatabase;