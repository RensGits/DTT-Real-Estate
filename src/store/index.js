import { createStore } from 'vuex'
import axios from 'axios'
import sortArray from 'sort-array'

export default createStore({

  strict: true,


                                                                     // --------------------------------- STATE ------------------------------ //
  state: {
    
    houses: [],
    registerd: false,
    currentSearchInput: '',
    searchResultsCounter: null,
    currentHouse: [],
    noResults: false,
    recentlyUploadedId: '',

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

      getNewListing: state => {                 // gets new listing based on create new listing or edit listing input
        return state.newListing
      },

      getNoResults: state => {
        return state.noResults
      },

      getRecentlyUploadedId: state => {
        return state.recentlyUploadedId
      }


     
  


  },
                                                                      // --------------------------------- ACTIONS ------------------------------ //
  

  actions: {
    

      // ----------- API CALLS ---------- //
    
    
      async fetchHouses({commit}){                                  // fetches houses from API ---- GET ----
     
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
        commit('setHouses', response.data)
      })
      
      .catch(err => {
        console.log('---- FETCH ERROR ----')
        console.log(err)}
       )},


      async postHouse({commit, dispatch},payload){                                   // posts / edits house to API   ---- POST -----
      
        
        var FormData = require('form-data');
        var data = new FormData();

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
          url: payload.id === undefined ? 'http://localhost:8080/api/houses/' : `http://localhost:8080/api/houses/${payload.id}`, // check wether data comes from a new listing or an edited listing
          headers: { 
            'X-Api-Key': 'Tom43Z5jLkqyMB0XniKsRa6NcC9EeAFV', 
          },
          data : data
        };

        let idFromResponse = ''
        let image = payload.file

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          idFromResponse = response.data.id
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(async function(){
          console.log(image)
          var dataPicture = new FormData();
          dataPicture.append('image', image);

          console.log(payload.id)

          var configPicture = {
            method: 'post',
            url: payload.id === undefined ?  `http://localhost:8080/api/houses/${idFromResponse}/upload` :  `http://localhost:8080/api/houses/${payload.id}/upload` ,
                              // check wether image comes from a new listing or an edited listing
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
          .then(function(){
            dispatch('fetchHouses')
            if(payload.id === undefined){
              commit('setRecentlyUploadedId', idFromResponse)
            }
            else{
              commit('setRecentlyUploadedId', payload.id)
            }
            
          })
          },



      async deleteHouseAPI({dispatch},id){                     // deletes house from API   ---- POST ---
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
          
          let idStore = ''

          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data))
            console.log(`House with ID: ${id} deleted`)
         
            
          })
          .catch(function (err) {
            console.log(err);
          })
          .then(function(){
              dispatch('fetchHouses')
          })
        },


      // ---------- OTHER ACTIONS ---------- //
    
      currentHouseToNewListing({commit}){   // sets house to newListing in state
        commit('setCurrentHouseToNewListing', currentHouse)
      },
  
      sortingToSize({commit, state}){       // sort house list to size commit
        const houses = state.houses                    
        commit('setSortedBySize', houses)
      },

      sortingToPrice({commit, state}){      // sort house list to price commit
        const houses = state.houses                     
        commit('setSortedByPrice', houses)
      },

      searchInput({commit},payload){        // sets user search input to currentSearchInput
        commit('setUserInput', payload)
        },
     
      
      noResults({commit},payload){          // sets no results to true or false (only after search input)
       commit('setNoResults',payload) 
      },

    },
    

      
                                                                        // --------------------------------- MUTATIONS ------------------------------ //
      

      


    mutations: {                
      setHouses(state,fetchResponseFromActions){          // inital houses list from fetch commmit
        state.houses = fetchResponseFromActions
        
      },
      setSortedByPrice(state,houses){                     // sorts houses list to price upon toggeling filter button to price
        const sortedArray = sortArray(houses, {
          by: 'price',
          order: 'asc'
        })         // price sorting commit
        state.houses = sortedArray
        console.log('sorted to price - ascending')
      },
      setSortedBySize(state, houses){                     // sorts houses list to size upon toggeling filter button to size
        const sortedArray = sortArray(houses, {
          by: 'size',
          order: 'asc'
        })            // size sorting commit
        state.houses = sortedArray
        console.log('sorted to size - ascending')
      },
      setUserInput(state,userInputFromActions){           // user search input commit
        state.currentSearchInput = userInputFromActions
      },
      setNewListing(state, newListingFromActions){        // new listing commit
        state.newListing = newListingFromActions
      },
      setNoResults(state, noResultsFromActions){
        state.noResults = noResultsFromActions
      },
      setRecentlyUploadedId(state, idFromResponseFromActions){
        state.recentlyUploadedId = idFromResponseFromActions
      },
      setRemoveHouseById(state, houseByIdFromActions){
        console.log('mutation reached')
        state.houses = state.houses.splice(houseByIdFromActions,1)
      }
    },

    
  })
