const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdOn: Date,
  deletedOn: mongoose.Schema.Types.Mixed,
  difficulty: Number,
  hash: String,
  ingredientGroups: Array,
  labels: Array,
  media: mongoose.Schema.Types.Mixed,
  modifiedOn: Date,
  nutritions: mongoose.Schema.Types.Mixed,
  preparationTime: Number,
  rating: mongoose.Schema.Types.Mixed,
  recipeId: String,
  recipeReference: String,
  recipeStepGroups: Array,
  seoTitle: String,
  servings: Number,
  title: String,
  totalTime: Number,
  url: String,
  versionId: Number,
});

const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes_sample');

module.exports = Recipe;
