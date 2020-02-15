<template>
  <div>
    <div v-for="item in $store.getters.items" :key="item.id">
      <h1> {{ item.id }} </h1>
    </div>
  </div>
</template>

<script>
export default {
  created(){
  }
};
</script>

<style>
</style>