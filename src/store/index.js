import { createStore } from 'vuex'
import axios from 'axios'
import { _ } from 'core-js'
import sortArray from 'sort-array'

export default createStore({
  //current state
  state: {
    
    houses: [],
  
  //temporary state changes
  },

  getters: {
      allHouses: (state) =>{
        return state.houses
      },
      
  },
  

  // perpetual state changes
  actions: {
    
    async fetchHouses({commit}){
     
      var config = {
        method: 'get',
        url: 'http://localhost:8080/api/houses',
       
        headers: { 
          'X-Api-Key': 'Tom43Z5jLkqyMB0XniKsRa6NcC9EeAFV',
          
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log('---- FETCH SUCCES ----')
        console.log('fetch data: ')
        console.log(response.data);
        commit('setHouses',response.data)
      })
      .catch(err => {
        console.log('---- FETCH ERROR ----')
        console.log(err)}
      );
     
    },

    sortingToSize({commit, getters}){
      const sortedBySize = sortArray(getters.allHouses, {
        by: 'size',
        order: 'asc'
      })
      commit('setSortedByPrice', sortedBySize)
    },

    sortingToPrice({commit, getters}){
      const sortedByPrice = sortArray(getters.allHouses, {
        by: 'price',
        order: 'asc'
      })
      commit('setSortedByPrice', sortedByPrice)
    }    

    
  },

  mutations: {
    setHouses(state,fetchResponseFromActions){
      state.houses = fetchResponseFromActions
      console.log('current state: ')
      console.log(state.houses);
    },
    setSortedByPrice(state,sortStateFromActions){
      state.houses = sortStateFromActions
      console.log('sorted to price - ascending')
    },
    setSortedBySize(state,sortStateFromActions){
      state.houses = sortStateFromActions
      console.log('sorted to size - ascending')
    }
  },

  
})
