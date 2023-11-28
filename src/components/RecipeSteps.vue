<template>
  <div class="steps">
    <h1>{{ title }}</h1>
    <p><i>{{ caption }}</i></p>
    <br/>
    <h3>Steps</h3>
    <div v-if="recipeStepGroups[0].recipeSteps">
      <ul>
        <li v-for="(step, index) in sortedSteps" :key="step.recipeStepOrder">
          {{ step.instruction }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  caption: String,
  recipeStepGroups: Array,
  sortedSteps: Array
});
</script>

<style lang="scss" scoped>
  .steps {
    background-color: #efebce;
    font-family: 'Inter', sans-serif;
  }

  .steps ul {
  list-style: inside;
  padding: 2%;
}

  .steps h1, .steps h3, .steps p {
    font-family: 'Inter', sans-serif;
    padding-left: 2%;
  }
</style>
