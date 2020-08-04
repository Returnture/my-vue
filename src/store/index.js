import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'Hello World!'
    },
    mutations: {
        edit(state, data){
            state.name = data
        }
    },
    actions: {

    }
})

export default store