<template>
  <div class="pt-5">
    <b-container>
      <div v-for="(item,idx) in $store.getters.items" :key="idx">
        <b-card img-top class="mb-2">
          <h3>{{ item.name }}</h3>
          <h4>
            <b-badge
              size="sm"
              variant="primary"
              class="mr-1 mb-1"
              v-for="(tag, idx) in item.tags"
              :key="idx"
            >{{ tag.title }}</b-badge>
          </h4>
          <div class="d-flex">
            <b-img class="w-25 h-25" :src="item.urls.full" :alt="item.alt_description"></b-img>
            <div>
              <h4 class="pl-3">
                Phrase:
                <span>{{ item.phrase }}</span>
              </h4>
              <h4 class="pl-3">
                Description:
                <span>{{ item.description }}</span>
              </h4>
              <h4 class="pl-3">
                Quantity:
                <span>{{ item.quantity }}</span>
              </h4>
              <h4 class="pl-3">
                Price:
                <span>${{ item.price }}</span>
              </h4>
              <h4 class="pl-3">
                Total:
                <span>${{ item.price * item.quantity }}</span>
              </h4>
            </div>
          </div>
        </b-card>
      </div>
      <div>
        <h3 class="pl-3">
          Total Cart:
          <span>${{ getTotalCart() }}</span>
        </h3>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  created() {
    console.log(this.$store.getters.items);
  },
  methods: {
    getTotalCart() {
      let totalCart = 0;
      this.$store.getters.items.map(item => {
        totalCart += item.price * item.quantity;
      });
      return totalCart.toFixed(2);
    }
  }
};
</script>

<style scoped>
span {
  font-weight: normal;
}
@media only screen and (max-width: 1000px) {
  span {
    font-size: calc(0.58em + 0.58vw);
    font-weight: normal;
  }
  h4 {
    font-size: calc(0.68em + 0.68vw);
  }
  h3 {
    font-size: calc(0.78em + 0.78vw);
  }
}
</style>