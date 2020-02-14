<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/navBar/navBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
</style>
