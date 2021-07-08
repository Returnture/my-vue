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
        count: 0,
        nums: 0,
        s_a: 0,
        s_b: 0
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
        },
        getaandb(state, n) {
            state.s_a = n.num1;
            state.s_b = n.num2;
        },
        GetNums(state) {
            state.nums = (state.s_a - 0) + (state.s_b - 0);
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