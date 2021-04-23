import Vue from "vue"
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = new Vuex.Store({
    state: {
        name: 'Hello World!'
    },
    mutations: {
        edit(state, data) {
            state.name = data
        }
    },
    actions: {

    },
    plugins: [vuexLocal.plugin]
})

export default store
