import axios from "axios";

const state = {
    gridItems: [],
    loading: false,
    currentPage: 0,
    clientId:
        "d0fe30c193ede820f30eb9b49ecb6d662099d549564b9da5fdf0faa979037817",
    perPage: 20,
    query: "nature",
    rows: 0,
}

const getters = {
    gridItems: state => {        
        return state.gridItems
    },
    loading: state => {
        return state.loading
    },
}

const mutations = {
    addItemsToGrid(state, { products }) {
        state.gridItems.push(...products)        
    },
}

const actions = {
    addItemsToGrid({ commit, state }) {
        state.loading = true;
        state.currentPage += 1;
        axios
            .get(
                `https://api.unsplash.com/search/photos?client_id=${state.clientId}&per_page=${state.perPage}&page=${state.currentPage}&query=${state.query}`
            )
            .then(res => {                
                commit('addItemsToGrid', { products: res.data.results })
                state.rows = res.data.total_pages;
                state.loading = false;
            });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}