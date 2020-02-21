const state = {
    gridScrollPosition: 0,
}

const getters = {
    gridScrollPosition: state => {
        return state.gridScrollPosition
    },
}


const mutations = {
    setGridScrollPosition(state, position) {
        state.gridScrollPosition = position
    },
}

const actions = {
    setGridScrollPosition({ commit }, position) {        
        commit('setGridScrollPosition', position)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}