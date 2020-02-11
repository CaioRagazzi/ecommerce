<template>
  <b-card>
    <div class="cardBody">
      <!-- <h3>{{ description }}</h3> -->
      <h4>Oi</h4>
      <div class="imgContainer pb-2">
        <b-img class="imagem" :src="imagem" fluid alt="Responsive image"></b-img>
      </div>
      <div class="btnContainer">
        <!-- <b-card-text>{{altDescription}}</b-card-text> -->
        <b-button variant="primary">Add to cart</b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["imagem", "description", "altDescription"]
};
</script>

<style scoped>
.cardBody {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>