import Vue from 'vue'
import VueX from 'Vuex'
import state from './state'

Vue.use(VueX)

const store = new VueX.Store({

  strict:true,
  state
})
export default store;

