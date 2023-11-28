<template>
  <v-container fluid>
    <v-row>
      <Toolbar title="Recipe Generator"/>
    </v-row>
    <v-row>
      <v-col>
        <WelcomeText/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="recipe in recipes" :key="recipe.id">
        <RecipeListCard :recipe="recipe" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Toolbar from '../components/Toolbar.vue'
import RecipeListCard from '../components/RecipeListCard.vue'
import WelcomeText from '../components/WelcomeText.vue'

const recipes = ref([])

const fetchRecipes = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/recipes')
    if (response.ok) {
      recipes.value = await response.json()
    } else {
      console.error('Error fetching recipes:', response.statusText)
    }
  } catch (error) {
    console.error('Network error:', error)
  }
}

onMounted(fetchRecipes)
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1920px) {
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  div {
    background-color: #e1efc0;
    font-family: 'Inter', sans-serif;
  }
}
</style>

