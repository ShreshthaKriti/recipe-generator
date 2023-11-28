<template>
  <div class="rating">
    <div> <!-- Container for text -->
      <h3 class="title">Recipe Info</h3>
      <div>
        <v-icon>mdi-clock-time-five-outline</v-icon> Cooking time: {{ preparationTime }} minutes
      </div>
      <div>
        <v-icon>mdi-chef-hat</v-icon> Difficulty: {{ difficulty }}
      </div>
      <div>
        <v-icon>mdi-star</v-icon> Rating: {{ rating }}
      </div>
    </div>
    
    <div class="qr">
      <div v-if="url">
        <qrcode-vue :value="url" :size="200"></qrcode-vue>
        <p><i>Scan the QR code to view more!</i></p>
      </div>
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

<style lang="scss" scoped>
.rating {
  background-color: #d8a48f;
  color: var(--text-color-black);
  padding: 2%;
  padding-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    flex: 1;
  }
}

.qr {
  text-align: right;
}

.qr p {
  text-align: right;
}
</style>
