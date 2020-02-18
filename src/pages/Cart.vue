<template>
  <div class="pt-5">
    <b-container>
      <EmptyCard v-if="cartItems.length == 0" />
      <ProductCard />
      <TotalPrice />
    </b-container>
  </div>
</template>

<script>
import ProductCard from "../components/products/cart/card/productCard";
import EmptyCard from "../components/products/cart/emptyCard";
import TotalPrice from "../components/products/cart/totalPriceCart";
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductCard,
    EmptyCard,
    TotalPrice
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/items",
    })
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>