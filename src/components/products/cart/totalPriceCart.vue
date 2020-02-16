<template>
  <div v-if="$store.getters.items.length > 0" class="d-flex">
    <h5 class="pl-3">Total Cart:</h5>
    <span class="pl-1">${{ getTotalCart() }}</span>
  </div>
</template>

<script>
export default {
  name: "TotalPrice",
  methods: {
    getTotalCart() {
      let totalCart = 0;
      this.$store.getters.items.map(item => {
        totalCart += item.price * item.quantity;
      });
      return totalCart.toFixed(2);
    }
  }
};
</script>

<style>
</style>