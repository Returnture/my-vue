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
        info: {},
        count: 0
    },
    mutations: {
        initInfo(state, data) {
            state.info = data
        },
        editInfo(state, data) {
            state.info = data
            console.log(state);
        },
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        incrementAsync(context) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('increment')
                    resolve()
                }, 1000)
            })
        },
        decrementAsync(context) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('decrement')
                    resolve()
                }, 1000)
            })
        }
    },
    modules: {
        MapStore,
    },
    plugins: [vuexLocal.plugin]
})