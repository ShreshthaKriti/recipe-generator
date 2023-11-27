<template>
  <v-dialog scrollable width="500px" v-model="dialog" class="shopping-cart">
    <template v-slot:activator="{ props }">
      <v-btn icon class="hidden-xs-only" v-bind="props">
        <v-icon>mdi-fridge-outline</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">Your Pantry</v-card-title>
      <v-card-text>
        <v-list v-if="store.ownedIngredients.length">
          <v-list-item v-for="(item, index) in store.ownedIngredients" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item.quantity }} {{ item.unit }} {{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div v-else>Your pantry is empty</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closePantry">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { VBtn, VIcon, VCard, VCardActions, VCardText, VDialog} from 'vuetify/components'
  import { useIngredientStore } from '../stores/IngredientStore'

  const store = useIngredientStore()

  const dialog = ref(false)

  const closePantry = () => {
    dialog.value = false
  }
</script>

<style scoped>
.shopping-cart .total-amount {
  margin-top: 20px;
  font-weight: bold;
  text-align: right;
}
</style>