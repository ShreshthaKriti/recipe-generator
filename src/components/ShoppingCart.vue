<template>
  <v-dialog scrollable width="500px" v-model="dialog" class="shopping-cart">
    <template v-slot:activator="{ props }">
      <v-btn icon class="hidden-xs-only" v-bind="props">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">Your Shopping Cart</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(item, index) in cartItems" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item.quantity }} {{ item.unit }} {{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="checkout">Checkout</v-btn>
        <v-btn text @click="closeCart">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { VBtn, VIcon, VCard, VCardActions, VCardText, VDialog} from 'vuetify/components'

  const dialog = ref(false)

  const cartItems = ref([
  { name: 'Blumenkohl', quantity: 2, unit: 'g' },
  { name: 'Butter', quantity: 1,  unit: 'g' },
  ]);

  const checkout = () => {
    alert('Proceed to checkout')
  };

  const closeCart = () => {
    dialog.value = false
  };
</script>

<style scoped>
.shopping-cart .total-amount {
  margin-top: 20px;
  font-weight: bold;
  text-align: right;
}
</style>