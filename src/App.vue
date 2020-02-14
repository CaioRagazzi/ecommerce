<template>
  <div id="app">
    <NavBar />
    <ProductsGrid :perPage="perPage" :currentPage="currentPage" :query="query" />
    <!-- <div class="flex-grid pt-5">
      <ProductCard
        v-for="item in result"
        :key="item.id"
        :imagem="item.urls.regular"
        :description="item.alt_description"
        :altDescription="item.description"
      />
    </div> -->
    <b-pagination
    class="pb-3"
      align="center"
      pills
      size="lg"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      @change="changePage"
    ></b-pagination>
  </div>
</template>

<script>
import NavBar from "./components/navBar/navBar";
import ProductsGrid from "./components/products/grid/productsGrid";
import axios from "axios";

export default {
  components: {
    NavBar,
    ProductsGrid
  },
  name: "App",
  data: () => {
    return {
      currentPage: 1,
      rows: 20,
      perPage: 50,
      clientId:
        "d0fe30c193ede820f30eb9b49ecb6d662099d549564b9da5fdf0faa979037817",
      query: "nature",
      result: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${this.clientId}&per_page=${this.perPage}&page=${this.currentPage}&query=${this.query}`
        )
        .then(res => {
          this.result = res.data.results;
          this.rows = res.data.total_pages;
        });
    },
    changePage(page) {
      this.currentPage = page;
      this.getProducts();
    }
  }
};
</script>

<style>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
