const mongoose = require("mongoose");

const connectDB = async (mongoUri) => {
    try{
        await mongoose.connect(mongoUri);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error: ");
        process.exit(1);
    }
};

module.exports = connectDB;