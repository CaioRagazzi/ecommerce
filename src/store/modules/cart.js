const state = {
    cartItems: [],
}

const getters = {
    hasItems: state => {
        return state.cartItems.length > 0
    },
    items: state => {
        return state.cartItems
    },
}


const mutations = {
    addToCart(state, { product }) {
        state.cartItems.push(product)
    },
    updateItem(state, { product }){
        state.cartItems.map(item => {
            if (item.id == product.id) {
                item.quantity += product.quantity
            }
        })
    },
    deleteItem(state, { product }){
        const itemToDelete = state.cartItems.filter(item => {
            if (item.id === product.id) {
                return parseFloat(item.price) !== parseFloat(product.price)
            } else {
                return item.id !== product.id
            }
        })
        
        state.cartItems = itemToDelete
    }
}

const actions = {
    addToCart({ commit }, product) {
        commit('addToCart', { product })
    },
    updateItem({ commit }, product){
        commit('updateItem', { product })
    },
    deleteItem({ commit }, product){
        commit('deleteItem', { product })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}