import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    dataApigit:[]
  },
  mutations: {
  
   
  },
  actions: {},
  modules: {},
  getters: {
    getdataApigit: (state)=> (name) => {
      var dtaApigit =[];
   

      axios
      .get('https://api.github.com/users/'+name+'/repos')
      .then(response => {
       state.dataApigit = response;
        
      });
    
         return dtaApigit ;
  }
   


  },
});
