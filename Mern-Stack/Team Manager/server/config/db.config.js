const mongoose = require('mongoose');



const connectDB = async (mongoUri) => {
    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB Connected ✅️")
    } catch (error) {
        console.log("MongoDB Connection Error ❎:", error);
        process.exit(1);
    }
}

module.exports = connectDB;