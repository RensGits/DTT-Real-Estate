import { createStore } from 'vuex'
import axios from 'axios'
import sortArray from 'sort-array'
import createPersistedState from 'vuex-persistedstate'


export default createStore({

  // strict: true,            // uncomment in development to check for any changes made to store state from anything else then mutations

  plugins: [createPersistedState({    // persists state on page refresh
    storage: window.sessionStorage,
      }
    )
  ],  

                                                                            // --------------------------------- STATE ------------------------------- //
  state: {
    
    houses: [],                     // All houses from GET api fetch
    currentHouse: [],               // Current selected house for details page
    userFavoritesId: [],            // Array id's of all the houses set as favorite
    userFavoriteHouses: [],         // Array of all houses data set as favorite
    userOwnListings: [],            // Array of all houses listed by user 
    recentlyUploadedId: '',         // Id of recent new listing to determine to what ID the picture should be assigned to
    currentSearchInput: '',         // Users present search input
    searchResultsCounter: null,     // Count how many search results search input holds
    noResults: false,               // True if search returns no results
    
   

    newListing: {                   // Data retrieved from Create Listing form (new or edit)      
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



                                                                            // --------------------------------- GETTERS ----------------------------- //

  getters: {

      getCurrentSearchInput: state => {           // gets current search input
        return state.currentSearchInput
      },

      getFilteredHouses: state => {               // gets filtered houses based on search input
        
        const filteredHouses = state.houses.filter(
          house =>  
          (house.location.zip.toLowerCase().includes(state.currentSearchInput.toLowerCase()))     ||    //filters on zipcode
          (house.location.street.toLowerCase().includes(state.currentSearchInput.toLowerCase()))  ||    //filters on streetname
          (house.location.city.toLowerCase().includes(state.currentSearchInput.toLowerCase()))    ||    //filters on city
          (JSON.stringify(house.size).includes(state.currentSearchInput.toLowerCase()))                 //filters on size
        );
        return filteredHouses
      },

      getHouseById: state => (id) => {            // gets house based on given id
        console.log('id in getHouseById: ')
        console.log(id)
        const singleHouse = state.houses.find(house => JSON.stringify(house.id) === id)  
        console.log('Current house data: ')
        console.log(singleHouse)
        return singleHouse
      },

      getNewListing: state => {                 // gets new listing based on create new listing or edit listing input
        return state.newListing
      },

      getNoResults: state => {                  // gets current state of results (results or none)
        return state.noResults
      },

      getRecentlyUploadedId: state => {         // gets ID of recently uploaded listing (new or edited)
        return state.recentlyUploadedId
      },

      getUserFavoritesId: state => {            
        return state.userFavoritesId
      },

      getIsUserFavorite: state => (id) => {
        if(state.userFavoritesId.includes(id)){
          return true
        }
        else return false
      },

      getUserFavoriteHouses: state => {
        return state.userFavoriteHouses
      },

      getUserOwnListings: state => {
        return state.userOwnListings
      },

      getFormattedPrice: state => (num) => {
          let number = num
          return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')   // formats price 
      },
  },



                                                                            // --------------------------------- ACTIONS ----------------------------- //
  
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
        )
      },

       


      async postHouse({commit, dispatch},payload){                                   // posts / edits house to API   ---- POST -----
      
        var FormData = require('form-data');
        var data = new FormData();

        data.append('price', payload.price.replace('.',''));
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
          url: payload.id === undefined ?                                     // check wether data comes from a new listing or an edited listing
            'http://localhost:8080/api/houses/' : 
            `http://localhost:8080/api/houses/${payload.id}`, 
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
            url: payload.id === undefined ?                                     // check wether image comes from a new listing or an edited listing
              `http://localhost:8080/api/houses/${idFromResponse}/upload` :  
              `http://localhost:8080/api/houses/${payload.id}/upload` ,
                              
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
  
      sortingToSizeAsc({commit, state}){       // sort house list to size commit
        const houses = state.houses                    
        commit('setSortedBySizeAsc', houses)
      },

      sortingToPriceAsc({commit, state}){      // sort house list to price commit
        const houses = state.houses                     
        commit('setSortedByPriceAsc', houses)
      },

      sortingToSizeDesc({commit,state}){
        const houses = state.houses
        commit('setSortedBySizeDesc',houses)
      },

      sortingToPriceDesc({commit,state}){
        const houses = state.houses
        commit('setSortedByPriceDesc',houses)
      },

      searchInput({commit},payload){        // sets user search input to currentSearchInput
        commit('setUserInput', payload)
      },
     
      noResults({commit},payload){          // sets no results to true or false (only after search input)
       commit('setNoResults', payload) 
      },

      userFavoritesId({commit},payload){    
        commit('setUserFavoritesId', payload)
      },

      userFavoriteHouses({commit, state}){
        console.log('userFavoriteHouses reached')
        let favoriteHouses = []
        this.state.userFavoritesId.forEach(
          id => favoriteHouses.push(state.houses.find(house => JSON.stringify(house.id) === JSON.stringify(id))))
        commit('setUserFavoriteHouses', favoriteHouses)
      },

      userOwnListings({commit, state}){
        let ownListedHouses = state.houses.filter(house => house.id > 11)
        commit('setUserOwnListings', ownListedHouses)
      },   
  },
      
    
                                                                            // --------------------------------- MUTATIONS ---------------------------- //
      

  mutations: {     

      setHouses(state,fetchResponseFromActions){          // inital houses list from fetch commmit
        state.houses = fetchResponseFromActions
      },

      setSortedByPriceAsc(state,houses){                     // sorts houses list to price upon toggeling filter button to price
        const sortedArray = sortArray(houses, {
          by: 'price',
          order: 'asc'
        })        
        state.houses = sortedArray
        console.log('sorted to price - ascending')
      },

      setSortedBySizeAsc(state, houses){                     // sorts houses list to size upon toggeling filter button to size
        const sortedArray = sortArray(houses, {
          by: 'size',
          order: 'asc'
        })           
        state.houses = sortedArray
        console.log('sorted to size - ascending')
      },

      setSortedByPriceDesc(state,houses){                     // sorts houses list to price upon toggeling filter button to price
        const sortedArray = sortArray(houses, {
          by: 'price',
          order: 'desc'
        })        
        state.houses = sortedArray
        console.log('sorted to price - decending')
      },

      setSortedBySizeDesc(state, houses){                     // sorts houses list to size upon toggeling filter button to size
        const sortedArray = sortArray(houses, {
          by: 'size',
          order: 'desc'
        })           
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
        state.houses = state.houses.splice(houseByIdFromActions,1)
      },

      setUserFavoritesId(state, idFromUserFavoritesActions){                      // toggles favorite status of clicked house in state
        const index = state.userFavoritesId.indexOf(idFromUserFavoritesActions)
        if(index === -1){
          state.userFavoritesId.push(idFromUserFavoritesActions)
        }
        else {
          state.userFavoritesId.splice(index, 1)
        }
      },

      setUserFavoriteHouses(state, favoriteHousesFromActions){
        state.userFavoriteHouses = favoriteHousesFromActions
      },

      setUserOwnListings(state, userOwnListingsFromActions){
        state.userOwnListings = userOwnListingsFromActions
      }
  },

  
})
