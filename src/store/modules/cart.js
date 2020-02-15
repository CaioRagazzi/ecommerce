const state = {
    items: [],
}

const getters = {
    hasItems: state => {
        return state.items.length > 0
    },
    items: state => {
        return state.items
    },
}


const mutations = {
    addToCart(state, { product }) {
        state.items.push(product)
    },
    updateItem(state, { product }){
        state.items.map(item => {
            if (item.id == product.id) {
                item.quantity += product.qtd
            }
        })
    }
}

const actions = {
    addToCart({ commit }, product) {
        commit('addToCart', { product })
    },
    updateItem({ commit }, product){
        commit('updateItem', { product })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}