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
                item.quantity += product.quantity
            }
        })
    },
    deleteItem(state, { product }){
        const itemToDelete = state.items.filter(item => {
            if (item.id === product.id) {
                return parseFloat(item.price) !== parseFloat(product.price)
            } else {
                return item.id !== product.id
            }
        })
        
        state.items = itemToDelete
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
    state,
    getters,
    actions,
    mutations
}