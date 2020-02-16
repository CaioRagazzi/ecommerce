<template>
  <div class="pt-5">
    <b-container>
      <EmptyCard v-if="$store.getters.items.length == 0" />
      <ProductCard />
      <TotalPrice />
    </b-container>
  </div>
</template>

<script>
import ProductCard from "../components/products/cart/card/productCard";
import EmptyCard from "../components/products/cart/emptyCard";
import TotalPrice from "../components/products/cart/totalPriceCart";

export default {
  components: {
    ProductCard,
    EmptyCard,
    TotalPrice
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>