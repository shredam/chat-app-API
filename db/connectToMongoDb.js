const mongoose = require("mongoose");

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONG_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

module.exports = connectToMongoDb;
