const state = {
    items: [],
}

const mutations = {
    addToCart(state, { product }){
        state.items.push(product)
    }
}

const actions = {
    addToCart({ commit }, product) {
        commit('addToCart', { product })
    }
}

export default {
    state,
    actions,
    mutations
}