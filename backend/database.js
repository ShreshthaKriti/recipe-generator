const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://interview_user:UF4o7Bz2E66avT6U@w-c-dev-2lqnz.azure.mongodb.net/admin', {}).then(() => console.log('MongoDB Connected!'))
      .catch(err => console.error('MongoDB connection error:', err));
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
