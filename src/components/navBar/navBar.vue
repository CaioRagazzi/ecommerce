<template>
  <b-navbar sticky fixed toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="cursor-set" @click="goToInitial">
      <h3 :class="isTop ? 'bigget-font' : 'small-font'">
        <span>{{ logoTextBig }}<transition name="fade"><span v-if="isTop">{{ logoTextSmall }}</span></transition></span>
      </h3>
    </b-navbar-brand>
    <b-navbar-nav class="d-flex flex-row ml-auto">
      <eva-icon v-if="hasItemsCart" name="shopping-cart" animation="pulse" fill="#ffff" :height="iconsHeight" class="pr-4 cursor-set" @click="goToCart"></eva-icon>
      <eva-icon v-else name="shopping-cart-outline" animation="pulse" fill="#ffff" :height="iconsHeight" class="pr-4 cursor-set" @click="goToCart"></eva-icon>
      
      <eva-icon name="person-outline" animation="pulse" fill="#ffff" :height="iconsHeight"></eva-icon>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

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
  computed: {
    ...mapGetters({
      hasItemsCart: "cart/hasItems"
    })
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
    },
    goToCart(){
      if (this.$router.currentRoute.path == '/cart') {
        return
      }
      this.setGridScrollPosition(window.scrollY)
      this.$router.push('cart')      
    },
    goToInitial(){
      if (this.$router.currentRoute.path == '/') {
        return
      }
      this.$router.push('/')      
    },
    ...mapActions({
      setGridScrollPosition: 'scroll/setGridScrollPosition'
    })
  }
};
</script>

<style scoped>
li a {
    text-decoration: none;
}

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
.cursor-set{
  cursor: pointer;
}
</style>