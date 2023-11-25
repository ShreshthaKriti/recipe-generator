<template>
    <div>
      <h1>Recipes</h1>
        {{ recipes }}
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
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
        console.log('recipes', recipes.value)
      };
  
      onMounted(fetchRecipes);
  
      return { recipes };
    },
  };
  </script>
  
  <style>
  /* Your CSS styles (if any) */
  </style>
  