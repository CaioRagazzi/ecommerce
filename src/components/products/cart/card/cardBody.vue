<template>
  <div class="d-flex flex-wrap">
    <img class="mb-3" @click="showImageFull = true" :src="item.urls.small" :alt="item.alt_description" />
    <div class="my-body-card">
      <div class="d-flex">
        <h5 class="pl-3">Phrase:</h5>
        <span class="pl-1">{{ item.phrase }}</span>
      </div>
      <div class="d-flex">
        <h5 class="pl-3">Description:</h5>
        <span class="pl-1">{{ item.description }}</span>
      </div>
      <div class="d-flex">
        <h5 class="pl-3">Quantity:</h5>
        <span class="pl-1">{{ item.quantity }}</span>
      </div>
      <div class="d-flex flex-grow-1">
        <h5 class="pl-3">Price:</h5>
        <span class="pl-1">${{ item.price }}</span>
      </div>
      <div class="pb-2">
        <div class="d-flex">
          <h5 class="pl-3">Total:</h5>
          <span class="pl-1">${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>
      </div>
    </div>
    <ImageModal :image="item.urls.full" :show="showImageFull" @modalClosed="showImageFull = false" />
  </div>
</template>

<script>
import ImageModal from "../../../image/imageModal";

export default {
  name: "CardBody",
  components: {
    ImageModal
  },
  data: () => {
    return {
      showImageFull: false
    }
  },
  props: ["item"]
};
</script>

<style scoped>
.my-body-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
img {
  max-width: 20%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
}
span {
  font-weight: normal;
  padding-top: 2px;
}
@media only screen and (max-width: 1024px) {
  span {
    font-size: calc(0.7em + 0.6vw);
    padding-top: 0.5px;
    font-weight: normal;
  }
  h5 {
    font-size: calc(0.8em + 0.8vw);
  }
  h3 {
    font-size: calc(0.78em + 0.78vw);
  }
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>