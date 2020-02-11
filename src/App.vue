<template>
  <div id="app">
    <NavBar />
    <div class="flex-grid p-3">
      <ProductCard
        v-for="item in result"
        :key="item.id"
        :imagem="item.urls.thumb"
        :description="item.alt_description"
        :altDescription="item.description"
      />
    </div>
    <b-pagination
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
import ProductCard from "./components/products/productCard";
import axios from "axios";

export default {
  components: {
    NavBar,
    ProductCard
  },
  name: "App",
  data: () => {
    return {
      currentPage: 1,
      rows: 20,
      perPage: 12,
      clientId:
        "d0fe30c193ede820f30eb9b49ecb6d662099d549564b9da5fdf0faa979037817",
      query: "motorcycles",
      result: []
    };
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${this.clientId}&per_page=${this.perPage}&page=${this.currentPage}&query=${this.query}`
        )
        .then(res => {
          this.result = res.data.results;
          this.rows = res.data.total_pages
        });
    },
    changePage(page){
      this.currentPage = page
      this.getProducts()
    }
  }
};
</script>

<style>
.flex-grid {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (min-width: 176px) and (max-width: 550px) {
  .flex-grid {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    justify-content: center;
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 551px) and (max-width: 800px) {
  .flex-grid {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 801px) and (max-width: 1000px) {
  .flex-grid {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
