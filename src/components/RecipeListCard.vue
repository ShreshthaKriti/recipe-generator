<template>
  <v-card class="card">
    <v-img :src="recipe.media.images['ratio_16:9'].url" v-if="recipe.media.images['ratio_16:9']" cover></v-img>
    <v-card-title class="title">{{ recipe.title }}</v-card-title>
    <v-card-subtitle class="subtitle">{{ recipe.media.images['ratio_1:1'].caption }}</v-card-subtitle>
    <v-card-text class="title">
      <v-icon v-for="star in recipe.rating.stars" :key="star" color="#4e3d42">
        mdi-star
      </v-icon>
    </v-card-text>
    <v-card-actions>
      <v-btn class="button" @click="goToRecipeDetail(recipe._id)">View Recipe</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { VBtn, VIcon, VCard, VCardActions, VImg } from 'vuetify/components'

const router = useRouter()

const props = defineProps({
  recipe: Object,
});

const goToRecipeDetail = (id) => {
  router.push({ name: 'recipeDetail', params: { id } })
}
</script>

<style scoped>
.card {
  background-color: #e1efc0;
  height: 100%;
}

.title {
  color: #4e3d42;
  size: 15px;
}

.subtitle {
  color: var(--text-color-black);
  white-space: normal;
  overflow: visible;
  text-overflow: clip; 
}

.button {
  color: var(--secondary-color);
  margin-left: auto;
}
</style>