import { defineStore } from 'pinia';
import { computed, reactive, toRefs } from "vue";

export const useIngredientStore = defineStore('ingredientStore', () => {
  const state = reactive({
    ownedIngredients: [
      { name: 'Blumenkohl', quantity: 2, unit: 'g' },
      { name: 'Butter', quantity: 1,  unit: 'g' },
    ],
    shoppingCart: [],
  })

  const addToShoppingCart = (ingredient) => {
    state.shoppingCart.push(ingredient);
  }

  const clearShoppingCart = () => {
    state.shoppingCart = [];
  };

  return {
    ...toRefs(state),
    addToShoppingCart,
    clearShoppingCart,
  }
});
