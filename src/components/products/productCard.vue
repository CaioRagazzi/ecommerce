<template>
  <b-card>
    <div class="cardBody">
      <h3>Bike</h3>
      <b-img class="imagem" :src="this.imagem" fluid alt="Responsive image"></b-img>
      <div>
        <b-card-text>Bike Shimano.</b-card-text>
        <b-button variant="primary">Add to cart</b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["imagem"]
};
</script>

<style scoped>
.cardBody {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>