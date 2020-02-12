<template>
  <b-card
    border-variant="light"
    :img-src="imagem"
    style="max-width: 20rem;"
    class="m-3"
    :title="getWords(1)"
  >
    <div>
      <b-card-text>{{ getWords(10) }}</b-card-text>
      <b-card-text>$ {{ getRandomPrice() }}</b-card-text>
      <b-button href="#" variant="primary">Add to cart</b-button>
    </div>
  </b-card>
</template>

<script>
import randomWords from "random-words";

export default {
  name: "ProductCard",
  props: ["imagem", "description", "altDescription"],
  methods: {
    getWords(qtd) {
      const phrase = randomWords({ exactly: qtd, join: " " });
      return this.turnFirstLetterUpperCase(phrase);
    },
    turnFirstLetterUpperCase(phrase) {
      return phrase.charAt(0).toUpperCase() + phrase.slice(1);
    },
    getRandomPrice() {
      const price = Math.random() * 500000 + 100000;
      return price.toFixed(2);
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
</style>