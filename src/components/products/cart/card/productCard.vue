<template>
  <div>
    <div v-for="(item,idx) in cartItems" :key="idx" class="h-50">
      <b-card class="cardProduct mb-4">
        <CardHeader :item="item" />
        <CardBody :item="item" />
      </b-card>
    </div>
  </div>
</template>

<script>
import CardHeader from "./carHeader";
import CardBody from "./cardBody";
import { mapGetters } from "vuex";

export default {
  name: "ProductCard",
  components: {
    CardHeader,
    CardBody
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/items"
    })
  }
};
</script>

<style scoped>
.cardProduct {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>