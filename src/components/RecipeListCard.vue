<template>
  <v-card>
    <v-img :src="recipe.media.images['ratio_16:9'].url" v-if="recipe.media.images['ratio_16:9']" cover></v-img>
    <v-card-title>{{ recipe.title }}</v-card-title>
    <v-card-subtitle>{{ recipe.media.images['ratio_1:1'].caption }}</v-card-subtitle>
    <v-card-text>
      <v-icon v-for="star in recipe.rating.stars" :key="star" color="yellow">
        mdi-star
      </v-icon>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="goToRecipeDetail(recipe._id)">View Recipe</v-btn>
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
</style>