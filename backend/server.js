const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const Recipe = require('./Recipe'); // Import your model

const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json());

// API routes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    console.log('response of api', recipes)
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// More routes as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
