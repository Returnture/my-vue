import Vue from "vue"
import Vuex from 'vuex'
import MapStore from "@/store/MapStore"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
    state: {
        info: {}
    },
    mutations: {
        initInfo(state, data) {
            state.info = data
        },
        editInfo(state, data) {
            state.info = data
            console.log(state);
        }
    },
    actions: {

    },
    modules: {
        MapStore,
    },
    plugins: [vuexLocal.plugin]
})