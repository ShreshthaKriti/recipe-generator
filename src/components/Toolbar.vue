<template>
  <v-toolbar fixed color="#adc178">
      <v-btn v-if="backButton" icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="toolbar-title">{{ title }}</v-toolbar-title>
      <ShoppingCart/>
    </v-toolbar>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { VToolbar, VToolbarTitle, VBtn, VIcon } from 'vuetify/components'
import ShoppingCart from '../components/ShoppingCart.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  backButton: {
    type: Boolean,
    default: false,
  }
});

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>