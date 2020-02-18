import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import grid from './modules/grid'
import scroll from './modules/scroll'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        grid,
        scroll
    },
})