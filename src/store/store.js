import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

import works from "./modules/works";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        works
    },
    plugins: [vuexLocal.plugin]
})