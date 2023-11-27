import { defineStore } from 'pinia';
import { computed, reactive, toRefs } from "vue";

export const useIngredientStore = defineStore('ingredientStore', () => {
  const state = reactive({
    ownedIngredients: [
      { name: 'Blumenkohl', quantity: 2, unit: 'g' },
      { name: 'Butter', quantity: 1,  unit: 'g' },
      ],
  })

  return {
    ...toRefs(state)
  }
});
