import ProductsGridPage from '../pages/ProductsGridPage';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        { path: '/', component: ProductsGridPage }
    ]
});

export default router
