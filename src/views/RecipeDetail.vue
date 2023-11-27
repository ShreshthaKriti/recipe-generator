<template>
  <v-container fluid v-if="recipeDetail && recipeDetail.media && recipeDetail.media.images['ratio_16:9']">
    <v-row>
      <v-col cols="12" md="8">
        <v-img
          :src="recipeDetail.media.images['ratio_16:9'].url"
          :alt="recipeDetail.media.images['ratio_16:9'].altTag"
          class="mb-4"
        ></v-img>

        <div class="steps">
          <h1>{{ recipeDetail.title }}</h1>
          <p><i>{{ recipeDetail.media.images['ratio_16:9'].caption }}</i></p>
          <br/>
          <div v-if="recipeDetail.labels">
            <v-row>
              <v-col cols="auto" v-for="label in recipeDetail.labels" :key="label">
                <v-chip>{{ label }}</v-chip>
              </v-col>
            </v-row>
          </div>
          <br/>
          <h3>Steps</h3>
          <div v-if="recipeDetail.recipeStepGroups[0].recipeSteps">
            <ul>
              <li v-for="(step, index) in sortedSteps" :key="step.recipeStepOrder">
                {{ step.instruction }}
              </li>
            </ul>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="ingredients mb-4">
          <h3>Ingredient list</h3>
          <div v-if="recipeDetail.ingredientGroups">
            <ul v-for="ingredientList in recipeDetail.ingredientGroups" :key="ingredientList.name">
              <li>
                <h4>{{ ingredientList.name }}</h4>
                <ul>
                  <li v-for="ingredient in ingredientList.ingredientGroupIngredients" :key="ingredient.ingredient">
                    {{ ingredient.quantity }} {{ ingredient.unit }} {{ ingredient.ingredient }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <v-btn>Add missing ingredients</v-btn>
        </div>

        <div class="rating">
          <h3>Recipe Info</h3>
          <div>
            <v-icon>mdi-clock-time-five-outline</v-icon> Cooking time: {{ recipeDetail.preparationTime }} minutes
          </div>
          <div>
            <v-icon>mdi-chef-hat</v-icon> Difficulty: {{ recipeDetail.difficulty }}
          </div>
          <div>
            <v-icon>mdi-star</v-icon> Rating: {{ recipeDetail.rating.stars }}
          </div>
          <div v-if="recipeDetail.url">
            <qrcode-vue :value="recipeDetail.url" :size="200"></qrcode-vue>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
 
 <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { VToolbar, VToolbarTitle, VBtn, VIcon, VCard, VCardActions, VImg, VAvatar, VCardText, VChip} from 'vuetify/components'
  import QrcodeVue from 'qrcode.vue'

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
  .ingredients {
    background-color: #bb8588;
  }

  .steps {
    background-color: #efebce;
  }

  .rating {
    background-color: #d8a48f;
  }
 </style>
 
 