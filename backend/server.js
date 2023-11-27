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
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid recipe id' });
    }
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
