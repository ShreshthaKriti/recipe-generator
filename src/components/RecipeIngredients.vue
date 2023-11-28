<template>
  <div class="ingredients mb-4" :key="refreshKey">
    <h3 class="title">Ingredient list</h3>
    <div v-if="ingredientGroups">
      <ul v-for="ingredientList in ingredientGroups" :key="ingredientList.name">
        <li>
          <h4 class="subtitle"><b>{{ ingredientList.name }}</b></h4>
          <ul>
            <li v-for="ingredient in ingredientList.ingredientGroupIngredients" 
                :key="ingredient.ingredient" 
                :class="getIngredientClass(ingredient.ingredient)">
              <v-icon v-if="isOwned(ingredient.ingredient)">mdi-check</v-icon>
              <v-icon v-else>mdi-close</v-icon>
              {{ ingredient.quantity }} {{ ingredient.unit }} {{ ingredient.ingredient }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="button">
      <v-btn @click="addMissingIngredientsToShoppingCart" variant="tonal">Add missing ingredients</v-btn>
    </div>
  </div>
</template>


<script setup>
import { defineProps, onMounted, ref, watch } from 'vue'
import { useIngredientStore } from '@/stores/ingredientStore'

const props = defineProps({
  ingredientGroups: Array,
});

const ingredientStore = useIngredientStore();
const allIngredients = ref([]);

const refreshKey = ref(0);

watch(() => ingredientStore.ownedIngredients, (newVal) => {
}, { deep: true });

const refreshIngredients = () => {
  refreshKey.value++;
  populateAllIngredients();
}

const getIngredientClass = (ingredientName) => {
  const owned = ingredientStore.ownedIngredients.some(i => i.name === ingredientName);
  return owned ? 'owned-ingredient' : 'missing-ingredient';
};

const populateAllIngredients = () => {
  allIngredients.value = [];
  if (props.ingredientGroups) {
    props.ingredientGroups.forEach(group => {
      allIngredients.value.push(...group.ingredientGroupIngredients)
    })
  }
}

const findMissingIngredients = (recipeIngredients) => {
  return recipeIngredients
    .filter(ingredient => 
      !ingredientStore.ownedIngredients.some(owned => owned.name === ingredient.ingredient)
    )
    .map(ingredient => ({
      name: ingredient.ingredient,
      quantity: ingredient.quantity,
      unit: ingredient.unit,
    }))
}

const addMissingIngredientsToShoppingCart = () => {
  const missingIngredients = findMissingIngredients(allIngredients.value);
  missingIngredients.forEach(ingredient => ingredientStore.addToShoppingCart(ingredient));
  refreshIngredients();
}

watch(() => props.ingredientGroups, (newVal) => {
  if (newVal) {
    populateAllIngredients();
  }
}, { deep: true })

const isOwned = (ingredientName) => {
  return ingredientStore.ownedIngredients.some(i => i.name === ingredientName);
};

onMounted(populateAllIngredients)
</script>

<style lang="scss" scoped>
.ingredients {
  background-color: #e1efc0;
  font-family: 'Inter', sans-serif;
  padding: 2%;
}

.ingredients ul {
  list-style-type: none;
  padding-left: 2%;
}

.owned-ingredient {
  color: darkgreen;
}

.missing-ingredient {
  color: maroon;
}

.title {
  padding-left: 2%;
  color: #4e3d42;
}

.subtitle {
  margin-top: 3%;
}

.button {
  padding-left: 2%;
  padding-top: 5%;
  text-align: right;
  color: #0D99FF;
  background-color: none;
}

.ingredient-icon {
  margin-right: 5px;
  font-size: 20px;
  color: #4e3d42;
}

.owned-ingredient .ingredient-icon {
  color: green;
}

.missing-ingredient .ingredient-icon {
  color: red;
}
</style>
