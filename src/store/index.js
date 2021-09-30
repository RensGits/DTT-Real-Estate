import { createStore } from 'vuex'
import axios from 'axios'
import sortArray from 'sort-array'

export default createStore({

  strict: true,


  //current state
  state: {
    
    houses: [],
    registerd: false,
    currentSearchInput: '',
    searchResultsCounter: null,
    currentHouse: [],

    newListing: {                   
      price: '',
      bedrooms: '',
      bathrooms: '',
      size: '',
      streetName: '',
      houseNumber: '',
      numberAddition: '',
      zip: '',
      city: '',
      constructionYear: '',
      hasGarage: '',
      description: '',
    }

  
 
  },

                                                                     // --------------------------------- GETTERS ------------------------------ //

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
      },

      getNewListing: state => {
        return state.newListing
      }


     
    

    


  },

                                                                     // --------------------------------- ACTIONS ------------------------------ //
  

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


    async postHouse({commit},payload){
      console.log(payload)
      var FormData = require('form-data');
      var data = new FormData();
      
      console.log(payload.file)

      data.append('price', payload.price);
      data.append('bedrooms', payload.bedrooms);
      data.append('bathrooms', payload.bathrooms);
      data.append('size',payload.size);
      data.append('streetName', payload.streetName);
      data.append('houseNumber', payload.houseNumber);
      data.append('numberAddition',payload.numberAddition);
      data.append('zip', payload.zip);
      data.append('city',payload.city);
      data.append('constructionYear', payload.constructionYear);
      data.append('hasGarage', payload.hasGarage);
      data.append('description', payload.description);

      var config = {
        method: 'post',
        url: 'http://localhost:8080/api/houses/',
        headers: { 
          'X-Api-Key': 'Tom43Z5jLkqyMB0XniKsRa6NcC9EeAFV', 
        },
        data : data
      };

      let id = ''
      let image = payload.file

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        id = response.data.id
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(async function(){
        console.log(image)
        var dataPicture = new FormData();
        dataPicture.append('image', image);

        var configPicture = {
          method: 'post',
          url: `http://localhost:8080/api/houses/${id}/upload`,
          headers: { 
            'X-Api-Key': 'Tom43Z5jLkqyMB0XniKsRa6NcC9EeAFV', 
            'Content-Type': 'multipart/form-data'
          },
          data : dataPicture
        };
      
        axios(configPicture)
        .then(function (response) {
        console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });



      })


      





      

    },






    async deleteHouseAPI({commit}, id){
        console.log('post method reached')
        console.log('id :')
        console.log(id)
        console.log('http://localhost:8080/api/houses/' + id)
      var config = {
        method: 'delete',
        url: 'http://localhost:8080/api/houses/' + id,
        headers: { 
          'X-Api-Key': 'Tom43Z5jLkqyMB0XniKsRa6NcC9EeAFV'
        }
      };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
          console.log(`House with ID: ${id} deleted`)
        })
        .catch(function (err) {
          console.log(err);
        })
    },

    
    currentHouseToNewListing({commit},id){
      
      commit('setCurrentHouseToNewListing', currentHouse)
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
    

   
  

    
                                                                     // --------------------------------- MUTATIONS ------------------------------ //
    

    


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
    setNewListing(state, newListingFromActions){
      state.newListing = newListingFromActions
    }
  },

  
})
