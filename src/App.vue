<template>
  <div id="app">
    <NavBar />
    <div class="flex-grid p-5">
      <ProductCard imagem="https://vader-prod.s3.amazonaws.com/1561385328-zero_slr_cv_e3.jpg" />
      <ProductCard
        imagem="https://cdn11.bigcommerce.com/s-ox79uhj/images/stencil/1280x1280/products/40011/103499/pinarello_dyodo_BOB__95433.1540182200.jpg?c=2&imbypass=on"
      />
      <ProductCard
        imagem="https://content.competitivecyclist.com/images/items/900/BIA/BIA0014/GLOCEL.jpg"
      />
      <ProductCard
        imagem="https://static.evanscycles.com/production/bikes/road-bikes/product-image/484-319/bmc-roadmachine-02-three-2018-road-bike-white-orange-EV302709-9020-1.jpg"
      />
      <ProductCard
        imagem="https://cdn.shopify.com/s/files/1/0232/3305/products/state_bicycle_co_4130_road_8_speed_Black_silver_white_1.jpg?v=1571266684"
      />
      <ProductCard
        imagem="https://dks.scene7.com/is/image/dkscdn/16NISANSHKMRCP15XBAC_Red_is?wid=685&fmt=jpg"
      />
      <ProductCard
        imagem="https://www.pushys.com.au/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/pushys/b/bianchi-intenso-potenza-road-bike-YNB8GI501D-PAR.jpg"
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
    ></b-pagination>
  </div>
</template>

<script>
import NavBar from "./components/navBar/navBar";
import ProductCard from "./components/products/productCard";

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
      perPage: 10
    };
  },
  mounted() {
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
  grid-auto-rows: 1fr
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
