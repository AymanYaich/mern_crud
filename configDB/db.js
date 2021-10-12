const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("('mongodb://localhost/Customers'", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  });

  console.log("Succesufull connection to your MongoDB database Customers:)");
};

 module.exports = connectDB;

