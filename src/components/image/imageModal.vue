<template>
  <b-modal
    v-model="showModal"
    @hide="emitClose"
    hide-header
    scrollable
    ok-only
    centered
    size="xl"
    ref="modal-image"
  >
    <b-img class="w-100 h-100" :src="image"></b-img>
  </b-modal>
</template>

<script>
export default {
  name: "ImageModal",
  props: ["show", "image"],
  data: () => {
    return {
      showModal: false
    };
  },
  watch: {
    show: function(newVal) {
      this.showModal = newVal;
    }
  },
  methods: {
    emitClose() {
      this.$emit("modalClosed");
    },
  }
};
</script>

<style>
</style>