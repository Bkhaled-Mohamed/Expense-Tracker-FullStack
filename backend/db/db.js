const mongoose = require('mongoose');

const db = async () =>{
    try {
        mongoose.set("strictQuery",false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database");
    } catch (error) {
        console.log("failed to connect to database");
        
    }
}

module.exports = {db}