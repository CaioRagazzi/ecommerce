<template>
  <div class="flex-grid pt-5">
    <ProductCard
      v-for="item in result"
      :key="item.id"
      :imagem="item.urls.regular"
      :description="item.alt_description"
      :altDescription="item.description"
    />
  </div>
</template>

<script>
import ProductCard from "../card/productCard";
import axios from "axios";

export default {
  components: {
    ProductCard
  },
  name: "ProductsGrid",
  props: ["perPage", "currentPage", "query"],
  data: () => {
    return {
      clientId:
        "d0fe30c193ede820f30eb9b49ecb6d662099d549564b9da5fdf0faa979037817",
      result: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${this.clientId}&per_page=${this.perPage}&page=${this.currentPage}&query=${this.query}`
        )
        .then(res => {
          this.result = res.data.results;
          this.rows = res.data.total_pages;
        });
    }
  }
};
</script>

<style>
</style>