<template>
  <div class="main-wrapper">
    Recipe detail for id {{ recipeId }}
  </div>
 </template>
 
 <script setup>
 import { ref, onMounted } from 'vue';
 import { useRoute } from 'vue-router';
 import { VToolbar, VToolbarTitle, VBtn, VIcon, VCard, VCardActions, VImg, VAvatar, VCardText} from 'vuetify/components';
 
 const recipes = ref([]);

 const route = useRoute();
 const recipeId = ref(route.params.id);
 
//  onMounted(fetchRecipes);
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
 </style>
 
 