<template>
  <v-dialog 
        scrollable
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            class="hidden-xs-only"
            v-bind="props"
          >
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Shopping Cart">
            <v-card-text>
              Shopping Cart
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Exit"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { VBtn, VIcon, VCard, VCardActions, VCardText, VDialog} from 'vuetify/components'

</script>

<style scoped>
</style>