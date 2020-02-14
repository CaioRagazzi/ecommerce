<template>
  <b-navbar
    sticky
    toggleable="lg"
    type="dark"
    variant="info"
  >
    <b-navbar-brand>
      <h3 :class="isTop ? 'bigget-font' : 'small-font'"> {{ isTop ? logoTextBig : logoTextSmall }} </h3>
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {
      isTop: true,
      logoTextBig: "Ecommerce",
      logoTextSmall: "Ecomm"
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
      if (window.scrollY !== 0) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
    },
  }
};
</script>

<style>
.small-font {
  font-size: 15px;
  transition: 0.5s;
}
.bigget-font {
  font-size: 30px;
  transition: 0.5s;
}
</style>