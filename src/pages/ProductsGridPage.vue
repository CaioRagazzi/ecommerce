<template>
  <ProductsGrid />
</template>

<script>
import ProductsGrid from "../components/products/grid/productsGrid";

export default {
  components: {
    ProductsGrid
  },
  name: "ProductsGridPage"
};
</script>

<style>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
