<template>
  <div>
    <div v-for="(item,idx) in $store.getters.items" :key="idx" class="h-50">
      <b-card class="cardProduct mb-4">
        <div class="my-card-header">
          <h4>{{ item.name }}</h4>
          <b-icon-x-circle-fill
            id="remove-button"
            class="h1 icon-delete"
            variant="danger"
            @click="deleteFromCart(item)"
          ></b-icon-x-circle-fill>
        </div>
        <h6>
          <b-badge
            size="sm"
            variant="primary"
            class="mr-1 mb-1"
            v-for="(tag, idx) in item.tags"
            :key="idx"
          >{{ tag.title }}</b-badge>
        </h6>
        <div class="d-flex flex-wrap">
          <b-img class="mb-3" left fluid :src="item.urls.full" :alt="item.alt_description"></b-img>
          <div>
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
            <div class="d-flex">
              <h5 class="pl-3">Price:</h5>
              <span class="pl-1">${{ item.price }}</span>
            </div>
            <div class="d-flex">
              <h5 class="pl-3">Total:</h5>
              <span class="pl-1">${{ item.price * item.quantity }}</span>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  methods: {
    deleteFromCart(item) {
      this.$store.dispatch("deleteItem", { ...item });
    }
  }
};
</script>

<style scoped>
.icon-delete {
  cursor: pointer;
}
.my-card-header {
  display: flex;
  justify-content: space-between;
}
img {
  max-width: 20%;
  height: auto;
  object-fit: cover;
}
.cardProduct {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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