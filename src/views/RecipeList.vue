<template>
   <div class="main-wrapper">
    <v-toolbar fixed color="#87D37C">
    <v-btn
      icon
      class="hidden-xs-only"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title class="toolbar-title">Recipes</v-toolbar-title>
    <v-btn
      icon
      class="hidden-xs-only"
    >
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
  </v-toolbar>

  <div class="recipe-grid">
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
      <v-card theme="light">
        <div class="card-content">
          <v-avatar class="recipe-image" size="125" rounded="0">
            <v-img :src="recipe.media.images['ratio_16:9'].url" v-if="recipe.media.images['ratio_16:9']" cover></v-img>
          </v-avatar>
          
          <div class="card-text">
            <v-card-title class="recipe-title">{{ recipe.title }}</v-card-title>
            <br/>
            <v-card-subtitle class="recipe-subtitle">{{ recipe.media.images['ratio_1:1'].caption }}</v-card-subtitle>
            <v-card-actions>
              <div>Rating: {{ recipe.rating.stars }}</div>
              <div>Votes: {{ recipe.rating.votes }}</div>
              <v-btn color="orange-lighten-2" variant="text">Explore</v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </div>
  </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { VToolbar, VToolbarTitle, VBtn, VIcon, VCard, VCardActions, VImg, VAvatar} from 'vuetify/components';

const recipes = ref([]);

const fetchRecipes = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/recipes');
    if (response.ok) {
      recipes.value = await response.json();
    } else {
      console.error('Error fetching recipes:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

onMounted(fetchRecipes);
</script>

<style scoped>
@media screen and (min-width: 1920px) {
  body {
    font-size: 16px;
  }
  div {
    color: var(--primary-color);
  }
}

.main-wrapper {
  background-color: #D6E8C0;
  min-height: 100vh;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 2%;
}

.card-text {
  flex: 1;
  margin-left: 2%;
}

.recipe-title {
  font-weight: bold;
  font-size: 1.2em;
  text-transform: capitalize;
  color: var(--primary-color);
}

.recipe-subtitle {
  font-weight: normal;
  font-size: 0.9em;
  color: var(--text-color-blac);
  margin-top: 5%;
}

</style>

