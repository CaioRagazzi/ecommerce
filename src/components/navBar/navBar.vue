<template>
  <b-navbar sticky fixed toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <h3 :class="isTop ? 'bigget-font' : 'small-font'">
        <span>{{ logoTextBig }}<transition name="fade"><span v-if="isTop">{{ logoTextSmall }}</span></transition></span>
      </h3>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-dropdown class="pr-3" size="sm" variant="link" toggle-class="text-decoration-none" right no-caret>
        <template v-slot:button-content>
          <eva-icon name="shopping-cart" animation="pulse" fill="#ffff" :height="iconsHeight"></eva-icon>
        </template>
        <b-dropdown-item><router-link to="cart">Go to cart</router-link></b-dropdown-item>
      </b-dropdown>

      <b-dropdown class="pr-3" size="sm" variant="link" toggle-class="text-decoration-none" right no-caret>
        <template v-slot:button-content>
          <eva-icon name="person-outline" animation="pulse" fill="#ffff" :height="iconsHeight"></eva-icon>
        </template>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
      </b-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";

export default {
  components: {
    [EvaIcon.name]: EvaIcon
  },
  name: "NavBar",
  data: () => {
    return {
      iconsHeight: 25,
      isTop: Boolean,
      logoTextBig: "Ecomm",
      logoTextSmall: "erce"
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY != 0) {
        this.isTop = false;
        this.iconsHeight = 20;
      } else {
        this.isTop = true;
        this.iconsHeight = 25;
      }
    }
  }
};
</script>

<style>
.small-font {
  font-size: 15px;
  transition: 0.3s;
}
.bigget-font {
  font-size: 30px;
  transition: 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.navbar-nav .dropdown-menu {
    position: absolute !important;
}
</style>