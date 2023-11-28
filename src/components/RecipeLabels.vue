<template>
  <div class="label-box">
    <div v-for="label in labels" :key="label">  
      <v-chip class="chip">{{ label }}</v-chip>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { VChip } from 'vuetify/components'

const props = defineProps({
  labels: Array,
});
</script>

<style lang="scss" scoped>
.label-box {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(13, 153, 255, 0.3);
  font-family: 'Inter', sans-serif;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
  gap: 2%;
}

.chip {
  margin-top: 10px;
}

</style>
