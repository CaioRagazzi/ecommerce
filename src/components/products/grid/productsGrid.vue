<template>
  <div class="flex-grid pt-5">
    <ProductCard v-for="item in result" :key="item.id" :product="item" @clickCart="clickProduct" />

    <b-modal v-model="modal" id="modal-center" centered :title="product.name">
      <b-img :src="product.urls.full" fluid></b-img>
    </b-modal>
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
  data: () => {
    return {
      modal: false,
      product: {
        urls:{
          full: ""
        }
      },
      clientId:
        "d0fe30c193ede820f30eb9b49ecb6d662099d549564b9da5fdf0faa979037817",
      perPage: 20,
      currentPage: 1,
      result: [],
      query: "nature"
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
    },
    clickProduct(product) {
      console.log(product.urls.full);
      this.product = product;
      this.modal = true;
    }
  }
};
</script>

<style>
</style>