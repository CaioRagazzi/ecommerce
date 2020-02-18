<template>
  <div>
    <div class="flex-grid pt-3 pb-5">
      <ProductCard v-for="item in gridItems" :key="item.id" :product="item" @clickCart="clickProduct" />
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
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    ProductCard,
    ModalProduct
  },
  name: "ProductsGrid",
  computed:{
    ...mapGetters({
      buttonLoading: 'grid/loading',
      gridItems: 'grid/gridItems',
    })
  },
  data: () => {
    return {
      modal: false,
      product: {
        urls: {
          full: ""
        }
      },
    };
  },
  created() {
    this.addItemsToGrid();
  },
  methods: {
    getProducts() {
      this.addItemsToGrid();
    },
    clickProduct(product) {
      this.product = product;
      this.modal = true;
    },
    ...mapActions({
      addItemsToGrid: 'grid/addItemsToGrid'
    })
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