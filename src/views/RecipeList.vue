<template>
   <div class="main-wrapper">
    <v-toolbar fixed color="#adc178">
    <!-- <v-btn
      icon
      class="hidden-xs-only"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn> -->
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
          <v-avatar class="recipe-image" size="150" rounded="0">
            <v-img :src="recipe.media.images['ratio_16:9'].url" v-if="recipe.media.images['ratio_16:9']" cover></v-img>
          </v-avatar>
          
          <div class="card-text">
            <v-card-title class="recipe-title">{{ recipe.title }}</v-card-title>
            <br/>
            <v-card-subtitle class="recipe-subtitle">{{ recipe.media.images['ratio_1:1'].caption }}</v-card-subtitle>

            <v-card-actions class="action-items">
              <div class="rating-and-votes">
                <div class="rating">
                  Rating:
                  <v-icon v-for="star in recipe.rating.stars" :key="star" color="yellow">
                    mdi-star
                  </v-icon>
                </div>
                <div class="votes">
                  Votes: {{ recipe.rating.votes }}
                </div>
              </div>
              <v-btn color="#a98467" variant="text" @click="goToRecipeDetail(recipe._id)">Explore</v-btn>
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
import { VToolbar, VToolbarTitle, VBtn, VIcon, VCard, VCardActions, VImg, VAvatar, VCardText} from 'vuetify/components';
import { useRouter } from 'vue-router';

const router = useRouter();
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

const goToRecipeDetail = (id) => {
  router.push({ name: 'recipeDetail', params: { id } });
}

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
  background-color: #dde5b6;
  min-height: 100vh;
}

.recipe-grid {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
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
  margin: 1%;
}

.card-text {
  flex: 1;
  margin-left: 2%;
}

.recipe-title {
  font-weight: bold;
  font-size: 1.2em;
  text-transform: capitalize;
  color: #6c584c;
}

.recipe-subtitle {
  font-weight: normal;
  font-size: 0.9em;
  color: var(--text-color-blac);
  margin-top: 5%;
}

.action-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating-and-votes {
  display: flex;
  gap: 1em; /* Adjust the gap as needed */
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25em; /* Adjust the gap between stars as needed */
}

</style>

