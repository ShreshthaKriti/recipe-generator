<template>
  <v-container fluid v-if="recipeDetail && recipeDetail.media && recipeDetail.media.images['ratio_16:9']">
    <v-row>
    <Toolbar :backButton="true" title="Recipe Generator"/>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-img
          :src="recipeDetail.media.images['ratio_16:9'].url"
          :alt="recipeDetail.media.images['ratio_16:9'].altTag"
          class="mb-4"
        ></v-img>
        <RecipeSteps
          :title="recipeDetail.title"
          :caption="recipeDetail.media.images['ratio_16:9'].caption"
          :recipeStepGroups="recipeDetail.recipeStepGroups"
          :sortedSteps="sortedSteps"
        />
      </v-col>
      <v-col cols="12" md="4">
        <RecipeIngredientsVue
          :ingredientGroups="recipeDetail.ingredientGroups"
        />
        <RecipeExtraInfo
        :preparationTime="recipeDetail.preparationTime"
        :difficulty="recipeDetail.difficulty"
        :rating="recipeDetail.rating.stars"
        :url="recipeDetail.url"
        />
        <RecipeLabels :labels="recipeDetail.labels"/>
      </v-col>
    </v-row>
  </v-container>
</template>
 
 <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { VImg } from 'vuetify/components'
  import RecipeSteps from '../components/RecipeSteps.vue'
  import RecipeExtraInfo from '../components/RecipeExtraInfo.vue'
  import RecipeIngredientsVue from '../components/RecipeIngredients.vue'
  import Toolbar from '../components/Toolbar.vue'
  import RecipeLabels from '../components/RecipeLabels.vue'

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

  const sortedSteps = computed(() => {
    if (recipeDetail.value && recipeDetail.value.recipeStepGroups && recipeDetail.value.recipeStepGroups[0].recipeSteps) {
      return [...recipeDetail.value.recipeStepGroups[0].recipeSteps].sort((a, b) => a.recipeStepOrder - b.recipeStepOrder);
    }
    return [];
  });

  onMounted(fetchRecipeDetail);
 </script>
 
 <style scoped>
 @media screen and (max-width: 1920px) {
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  div {
    background-color: white;
    font-family: 'Inter', sans-serif;
  }
}
 </style>
 
 