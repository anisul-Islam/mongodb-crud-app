// connecting to database
const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/productsDB");
    console.log("database is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
