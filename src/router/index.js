import ProductsGridPage from '../pages/ProductsGridPage';
import Cart from '../pages/Cart';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        { path: '/', component: ProductsGridPage },
        { path: '/cart', component: Cart }
    ]
});

export default router
