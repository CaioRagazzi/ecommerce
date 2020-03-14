<template>
  <div v-if="hasItemCart" class="d-flex">
    <h5 class="pl-3">Total Cart:</h5>
    <span class="pl-1">${{ getTotalCart() }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalPrice",
  computed: {
    ...mapGetters({
      hasItemCart: "cart/hasItems",
      cartItems: "cart/items"
    })
  },
  methods: {
    getTotalCart() {
      let totalCart = 0;
      this.cartItems.map(item => {
        totalCart += item.price * item.quantity;
      });
      return totalCart.toFixed(2);
    }
  }
};
</script>

<style>
</style>