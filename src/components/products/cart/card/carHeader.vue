<template>
  <div>
    <div class="my-card-header">
      <h4>{{ item.name }}</h4>
      <b-icon-x-circle-fill
        id="remove-button"
        class="h1 icon-delete"
        variant="danger"
        @click="showModal()"
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
    <b-modal ref="modalDelete" :title="'Deleting item ' + item.name" @ok="deleteFromCart">
      <p class="my-4">Are you sure you want to delete this item from your cart?</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: ["item"],
  methods: {
    showModal() {
      this.$refs["modalDelete"].show();
    },
    deleteFromCart() {
      this.$store.dispatch("deleteItem", { ...this.item });
    }
  }
};
</script>

<style>
.icon-delete {
  cursor: pointer;
}
.my-card-header {
  display: flex;
  justify-content: space-between;
}
</style>