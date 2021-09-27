import { createStore } from 'vuex'
import axios from 'axios'
import sortArray from 'sort-array'

export default createStore({
  //current state
  state: {
    
    houses: [],
    registerd: false,
    currentSearchInput: '',
    searchResultsCounter: null,
    currentHouse: []

  
 
  },

  getters: {
      allHouses: state =>{                        // gets current list of houses
        return state.houses
      },

      registered: state => {                      // gets registered state
        return state.registerd
      },

      getCurrentSearchInput: state => {           // gets current search input
        return state.currentSearchInput
      },

      getFilteredHouses: state => {               // gets filtered houses based on search input
        
        const filteredHouses = state.houses.filter(
          house =>  (house.location.zip.toLowerCase().includes(state.currentSearchInput.toLowerCase()))     ||    //filters on zipcode
                    (house.location.street.toLowerCase().includes(state.currentSearchInput.toLowerCase()))  ||    //filters on streetname
                    (house.location.city.toLowerCase().includes(state.currentSearchInput.toLowerCase()))    ||    //filters on city
                    (JSON.stringify(house.size).includes(state.currentSearchInput.toLowerCase()))                 //filters on size
        );
        return filteredHouses
      },

      getHouseById: state => (id) => {            // gets house based on id
        
        const singleHouse = state.houses.find(house => JSON.stringify(house.id) === id)  
        console.log('Current house data: ')
        console.log(singleHouse)
        return singleHouse
      }

     
    

    


  },
  

  actions: {
    
    async fetchHouses({commit}){  // initial data fetch on HousesOverviewPage mount
     
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
        console.log('response data: ')
        console.log(response.data);
        commit('setHouses',response.data)
       
      })
      
      .catch(err => {
        console.log('---- FETCH ERROR ----')
        console.log(err)}
      )
    },

    
   



    sortingToSize({commit, getters}){                         // sorts houses list to size upon toggeling filter button to size
      const sortedBySize = sortArray(getters.allHouses, {
        by: 'size',
        order: 'asc'
      })
      commit('setSortedByPrice', sortedBySize)
    },

    sortingToPrice({commit, getters}){                         // sorts houses list to price upon toggeling filter button to price
      const sortedByPrice = sortArray(getters.allHouses, {
        by: 'price',
        order: 'asc'
      })
      commit('setSortedByPrice', sortedByPrice)
    },

    searchInput({commit},payload){                            // sets user search input to currentSearchInput
      commit('setUserInput', payload)
    },

   
  

  
    

    
  },

  mutations: {                
    setHouses(state,fetchResponseFromActions){              // inital houses list commmit
      state.houses = fetchResponseFromActions
      
    },
    setSortedByPrice(state,sortStateFromActions){           // price sorting commit
      state.houses = sortStateFromActions
      console.log('sorted to price - ascending')
    },
    setSortedBySize(state,sortStateFromActions){            // size sorting commit
      state.houses = sortStateFromActions
      console.log('sorted to size - ascending')
    },
    setUserInput(state,userInputFromActions){               // user search input commit
      state.currentSearchInput = userInputFromActions
    },
  },

  
})
