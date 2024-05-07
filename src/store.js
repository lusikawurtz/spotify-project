import Vue from 'vue'
import Vuex from 'vuex'

import playlists from './playlists'

Vue.use(Vuex)

export default new Vuex.store( {
    modules: {
        playlists,
    }
})