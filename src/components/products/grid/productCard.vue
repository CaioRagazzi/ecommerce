<template>
  <div>
    <div class="m-3 my-card">
      <img @click="showImage" :src="product.urls.small" class="my-img" />
      <div class="p-3">
        <h5>{{ name }}</h5>
        <p>{{ phrase }}</p>
        <p>$ {{ price }}</p>
        <b-button @click="emitClick" class="mt-3" variant="primary">Add to cart</b-button>
      </div>
    </div>
    <ImageModal :image="product.urls.full" :show="showImageFull" @modalClosed="showImageFull = false" />
  </div>
</template>

<script>
import randomWords from "random-words";
import ImageModal from "../../image/imageModal";

export default {
  name: "ProductCard",
  components: {
    ImageModal
  },
  props: ["product"],
  data: () => {
    return {
      price: 0,
      name: "",
      phrase: "",
      showImageFull: false
    };
  },
  created() {
    this.getRandomPrice();
    this.getPhrase(10);
    this.getWord(1);
  },
  methods: {
    showImage() {
      this.showImageFull = !this.showImageFull;
    },
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
      this.$emit("clickCart", {
        name: this.name,
        phrase: this.phrase,
        price: this.price,
        ...this.product
      });
    }
  }
};
</script>

<style scoped>
.my-img {
  width: 100% !important;
  height: 300px !important;
  object-fit: cover;
  cursor: pointer;
}
.my-card {
  max-width: 20rem;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transition: height 0.3s, box-shadow 0.3s;
}
.my-card:hover {
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}
</style>