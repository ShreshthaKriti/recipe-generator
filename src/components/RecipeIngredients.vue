<template>
	<div class="ingredients mb-4">
		<h3>Ingredient list</h3>
		<div v-if="ingredientGroups">
			<ul v-for="ingredientList in ingredientGroups" :key="ingredientList.name">
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
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  ingredientGroups: Array,
});
</script>

<style scoped>
  .ingredients {
    background-color: #bb8588;
  }
</style>