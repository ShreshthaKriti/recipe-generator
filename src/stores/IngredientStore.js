import { defineStore } from 'pinia';
import { computed, reactive, toRefs } from "vue";

const ownedIngredients = [
  { name: 'Blumenkohl', quantity: 2, unit: 'g' },
  { name: 'Butter', quantity: 1,  unit: 'g' },
]

export const useIngredientStore = defineStore('ingredientStore', () => {
  const state = reactive({
    ownedIngredients: ownedIngredients,
    shoppingCart: [...ownedIngredients],
  })

  const addToShoppingCart = (ingredient) => {
    state.shoppingCart.push(ingredient);
  }

  const clearShoppingCart = () => {
    state.shoppingCart = [...ownedIngredients];
  };

  return {
    ...toRefs(state),
    addToShoppingCart,
    clearShoppingCart,
  }
});
