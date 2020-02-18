<template>
  <div>
    <div class="flex-grid pt-3 pb-5">
      <ProductCard v-for="item in result" :key="item.id" :product="item" @clickCart="clickProduct" />
      <ModalProduct :product="this.product" :show="modal" @modalClosed="modal = false" />
    </div>
    <div class="button-load-more mb-5">
      <b-button variant="outline-primary w-25" @click="getProducts" :disabled="buttonLoading">
        <b-spinner v-if="buttonLoading" small type="grow"></b-spinner>
        {{ buttonLoading ? 'Loading...' : 'Load more'}}
      </b-button>
    </div>
  </div>
</template>

<script>
import ProductCard from "./productCard";
import ModalProduct from "./productModal";
import axios from "axios";

export default {
  components: {
    ProductCard,
    ModalProduct
  },
  name: "ProductsGrid",
  data: () => {
    return {
      modal: false,
      product: {
        urls: {
          full: ""
        }
      },
      clientId:
        "d0fe30c193ede820f30eb9b49ecb6d662099d549564b9da5fdf0faa979037817",
      perPage: 20,
      currentPage: 0,
      result: [],
      query: "nature",
      buttonLoading: false
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.buttonLoading = true;
      this.currentPage += 1;
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${this.clientId}&per_page=${this.perPage}&page=${this.currentPage}&query=${this.query}`
        )
        .then(res => {
          this.result.push(...res.data.results);
          this.rows = res.data.total_pages;
          this.buttonLoading = false;
        });
    },
    clickProduct(product) {
      this.product = product;
      this.modal = true;
    }
  }
};
</script>

<style>
img {
  width: 100% !important;
  height: 300px !important;
  object-fit: cover;
}
.button-load-more {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>