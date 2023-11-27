<template>
  <div class="main-wrapper">
    {{ recipeDetail }}
  </div>
 </template>
 
 <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { VToolbar, VToolbarTitle, VBtn, VIcon, VCard, VCardActions, VImg, VAvatar, VCardText} from 'vuetify/components'

  const route = useRoute()

  const recipeDetail = ref(null)
  const recipeId = ref(route.params.id)

  const fetchRecipeDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/recipes/${recipeId.value}`)
      if (response.ok) {
        recipeDetail.value = await response.json();
      } else {
        console.error('Error fetching recipe detail:', response.statusText)
      }
    } catch (error) {
      console.error('Network error:', error)
    }
  };

  onMounted(fetchRecipeDetail);
 </script>
 
 <style scoped>
 @media screen and (min-width: 1920px) {
   body {
     font-size: 16px
   }
   div {
     color: var(--primary-color)
   }
 }
 </style>
 
 