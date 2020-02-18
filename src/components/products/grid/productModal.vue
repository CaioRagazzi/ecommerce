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
  methods: {
    addProductToCart() {
      if (this.checkIfItemAlreadyExists()) {
        this.$store.dispatch("updateItem", {
          ...this.product,
          quantity: this.productQuantity
        });
      } else {
        this.$store.dispatch("addToCart", {
          ...this.product,
          quantity: this.productQuantity
        });
      }
    },
    checkIfItemAlreadyExists() {
      const filteredStore = this.$store.getters.items.filter(item => {
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
    }
  }
};
</script>

<style>
</style>