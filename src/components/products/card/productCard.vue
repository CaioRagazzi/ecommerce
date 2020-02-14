<template>
  <b-card
    border-variant="light"
    :img-src="product.urls.regular"
    style="max-width: 20rem;"
    class="m-3 cardProduct"
    :title="name"
  >
    <b-card-body>
      <b-card-text>{{ phrase }}</b-card-text>
      <b-card-text>$ {{ price }}</b-card-text>
      <b-button @click="emitClick" variant="primary">Add to cart</b-button>
    </b-card-body>
  </b-card>
</template>

<script>
import randomWords from "random-words";

export default {
  name: "ProductCard",
  props: ["product"],
  data: () => {
    return {
      price: 0,
      name: "",
      phrase: ""
    };
  },
  created() {
    this.getRandomPrice();
    this.getPhrase(10);
    this.getWord(1);
  },
  methods: {
    getPhrase(qtd) {
      const phrase = randomWords({ exactly: qtd, join: " " });
      this.phrase = this.turnFirstLetterUpperCase(phrase);
    },
    getWord(qtd) {
      const phrase = randomWords({ exactly: qtd, join: " " });
      this.name = this.turnFirstLetterUpperCase(phrase);
    },
    turnFirstLetterUpperCase(phrase) {
      return phrase.charAt(0).toUpperCase() + phrase.slice(1);
    },
    getRandomPrice() {
      const priceRandom = Math.random() * 500000 + 100000;
      this.price = priceRandom.toFixed(2);
    },
    emitClick() {
      this.$emit("clickCart", { name: this.name, phrase: this.phrase, price: this.price, ...this.product });
    }
  }
};
</script>

<style scoped>
img {
  width: 100% !important;
  height: 300px !important;
  object-fit: cover;
}
.div-flex {
  display: flex;
  justify-content: space-around;
}
.cardProduct {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>