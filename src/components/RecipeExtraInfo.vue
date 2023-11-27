<template>
  <div class="rating">
    <h3>Recipe Info</h3>
    <div>
      <v-icon>mdi-clock-time-five-outline</v-icon> Cooking time: {{ preparationTime }} minutes
    </div>
    <div>
      <v-icon>mdi-chef-hat</v-icon> Difficulty: {{ difficulty }}
    </div>
    <div>
      <v-icon>mdi-star</v-icon> Rating: {{ rating }}
    </div>
    <div v-if="url">
      <qrcode-vue :value="url" :size="200"></qrcode-vue>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import QrcodeVue from 'qrcode.vue'

const props = defineProps({
  preparationTime: String,
  difficulty: String,
  rating: String,
  url: String,
});
</script>

<style scoped>
  .rating {
    background-color: #d8a48f;
  }
</style>