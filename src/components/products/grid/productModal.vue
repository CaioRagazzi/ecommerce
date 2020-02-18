<template>
  <b-modal
    v-model="showModal"
    centered
    :title="product.name"
    @ok="addProductToCart"
    @hidden="modalClosed"
    @show="loadTags"
  >
    <b-container>
      <b-badge variant="primary" class="mr-1 mb-1" v-for="tag in tags" :key="tag">{{ tag }}</b-badge>

      <b-img class="mb-3" left :src="product.urls.small" fluid :alt="product.alt_description"></b-img>

      <p>{{ product.description }}</p>

      <b-input-group prepend="Quantity" class="w-75">
        <b-form-input class="text-center" v-model="productQuantity" disabled></b-form-input>
        <b-input-group-append>
          <b-button @click="productQuantity += 1" variant="success">+</b-button>
          <b-button @click="decreasesQuantity" variant="danger">-</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-container>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "ModalProduct",
  props: ["product", "show"],
  data: () => {
    return {
      productQuantity: 1,
      tags: [],
      showModal: false
    };
  },
  watch: {
    show: function(val) {
      this.showModal = val;
    }
  },
  computed: {
    ...mapGetters({
      carItems: "cart/items"
    })
  },
  methods: {
    addProductToCart() {
      if (this.checkIfItemAlreadyExists()) {
        this.updateItemCart({
          ...this.product,
          quantity: this.productQuantity
        });
      } else {
        this.addItemToCart({ ...this.product, quantity: this.productQuantity });
      }
    },
    checkIfItemAlreadyExists() {
      const filteredStore = this.carItems.filter(item => {
        return this.product.id === item.id && this.product.price === item.price;
      });

      if (filteredStore.length > 0) {
        return true;
      }
      return false;
    },
    loadTags() {
      this.product.tags.map(item => {
        this.tags.push(item.title);
      });
    },
    modalClosed() {
      this.productQuantity = 1;
      this.tags = [];
      this.$emit("modalClosed", true);
    },
    decreasesQuantity() {
      if (this.productQuantity > 1) {
        this.productQuantity -= 1;
      } else {
        return;
      }
    },
    ...mapActions({
      addItemToCart: "cart/addToCart",
      updateItemCart: "cart/updateItem"
    })
  }
};
</script>

<style>
</style>