<template>
  <div class="flex-grid pt-5">
    <ProductCard v-for="item in result" :key="item.id" :product="item" @clickCart="clickProduct" />

    <b-modal
      v-model="modal"
      centered
      :title="product.name"
      @ok="addProductToCart"
      @hidden="modalClosed"
      @show="loadTags"
    >
      <b-container>
        <b-badge variant="primary" class="mr-1 mb-1" v-for="tag in tags" :key="tag"> {{ tag }} </b-badge>

        <b-img class="mb-3" left :src="product.urls.full" fluid :alt="product.alt_description"></b-img>

        <p>{{ product.description }}</p>

        <b-input-group prepend="Quantity" class="mt-3 pt-3 w-50">
          <b-form-input v-model="productQuantity" disabled></b-form-input>
          <b-input-group-append>
            <b-button @click="productQuantity += 1" variant="success">+</b-button>
            <b-button @click="decreasesQuantity" variant="danger">-</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-container>
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
      tags: [],
      productQuantity: 1,
      modal: false,
      product: {
        urls: {
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
      this.product = product;
      this.modal = true;
    },
    decreasesQuantity() {
      if (this.productQuantity > 1) {
        this.productQuantity -= 1;
      } else {
        return;
      }
    },
    addProductToCart() {
      this.$store.dispatch("addToCart", {
        ...this.product,
        quantity: this.productQuantity
      });
    },
    modalClosed() {
      this.productQuantity = 1;
    },
    loadTags() {
      this.product.tags.map(item => {
        this.tags.push(item.title);
      });
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
</style>