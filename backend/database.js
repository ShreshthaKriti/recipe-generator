const mongoose = require('mongoose');

// move connection string and PORT to ENV vars
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://interview_user:UF4o7Bz2E66avT6U@w-c-dev-2lqnz.azure.mongodb.net/admin', {dbName: "interview_recipes_sample"});
    console.log('MongoDB Connected!');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
