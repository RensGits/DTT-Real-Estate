import { createStore } from 'vuex'
import axios from 'axios'
import sortArray from 'sort-array'
import createPersistedState from 'vuex-persistedstate'


export default createStore({

  // strict: true,            // Uncomment in development to check for any changes made to store state from anything else then mutations

  plugins: [createPersistedState({    // Persists state on page refresh
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

      getCurrentSearchInput: state => {           // Gets current search input
        return state.currentSearchInput
      },

      getFilteredHouses: state => {               // Gets filtered houses based on search input
        
        const filteredHouses = state.houses.filter(
          house =>  
          (house.location.zip.toLowerCase().includes(state.currentSearchInput.toLowerCase()))     ||    // Filters on zipcode
          (house.location.street.toLowerCase().includes(state.currentSearchInput.toLowerCase()))  ||    // Filters on streetname
          (house.location.city.toLowerCase().includes(state.currentSearchInput.toLowerCase()))    ||    // Filters on city
          (JSON.stringify(house.size).includes(state.currentSearchInput.toLowerCase()))                 // Filters on size
        );
        return filteredHouses
      },

      getHouseById: state => (id) => {            // Gets house based on given id
        console.log('id in getHouseById: ')
        console.log(id)
        const singleHouse = state.houses.find(house => JSON.stringify(house.id) === id)  
        console.log('Current house data: ')
        console.log(singleHouse)
        return singleHouse
      },

      getNewListing: state => {                 // Gets new listing data based on create new listing or edit listing input
        return state.newListing
      },

      getNoResults: state => {                  // Gets current state of results (results or no results)
        return state.noResults
      },

      getRecentlyUploadedId: state => {         // Gets ID of recently uploaded listing (new or edited)
        return state.recentlyUploadedId
      },

      getUserFavoritesId: state => {            // Gets array of id's set by user as favorite
        return state.userFavoritesId
      },

      getIsUserFavorite: state => (id) => {         // Checks if given id is included in the userFavoritesId 
        if(state.userFavoritesId.includes(id)){     // array and returns if so
          return true
        }
        else return false
      },

      getUserFavoriteHouses: state => {         // Returns data of all houses set to favorite by user
        return state.userFavoriteHouses
      },

      getUserOwnListings: state => {            // Returns data of all houses listed by the user
        return state.userOwnListings
      },

      getFormattedPrice: state => (num) => {    // Formats and returns the given price to include decimal seperators
          let number = num
          return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')   
      },
  },



                                                                            // --------------------------------- ACTIONS ----------------------------- //
  
  actions: {
    

      // ----------- API CALLS ---------- //
    
    
      async fetchHouses({commit}){      // Fetches houses from API  ---- GET ----
                                        // Replace http://localhost:8080/api/houses in production. 
        var config = {                  // Proxy used --> see vue.config.js in root folder.
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

       


      async postHouse({commit, dispatch},payload){      // posts/edits house data from listing form to API    ---- POST -----
                                                        // and uploads or edits picture added in listing form.
        var FormData = require('form-data');
        var data = new FormData();

        data.append('price', (payload.price).replace('.',''));
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
          url: payload.id === undefined ?                               // check wether data originated from a new listing or an edited listing
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
            url: payload.id === undefined ?                                         // check wether data originated from a new listing or an edited listing
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
          .then(function(){                                    // Sets the recently uploaded id for redirection to house details page,
            dispatch('fetchHouses')                            // after new posting or editing an existing one
            if(payload.id === undefined){
              commit('setRecentlyUploadedId', idFromResponse)
            }
            else{
              commit('setRecentlyUploadedId', payload.id)
            }
          })
      },



      async deleteHouseAPI({dispatch},id){                     // deletes house with given id from API   ---- POST ---
          
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
          .then(function(){                                // Fetches houses after deletion to update page
              dispatch('fetchHouses')
          })
      },


      // ---------- OTHER ACTIONS ---------- //
    
      currentHouseToNewListing({commit}){                           // Sets house to newListing in state
        commit('setCurrentHouseToNewListing', currentHouse)
      },
  
      sortingToSizeAsc({commit, state}){                // Sorts houses list to size ascending
        const houses = state.houses
        const sortedArray = sortArray(houses, {
          by: 'size',
          order: 'asc'
        })                      
        commit('setSortedBySizeAsc', sortedArray)
      },

      sortingToPriceAsc({commit, state}){               // Sorts houses list to price ascending
        const houses = state.houses 
        const sortedArray = sortArray(houses, {
          by: 'price',
          order: 'asc'
        })                            
        commit('setSortedByPriceAsc', sortedArray)
      },

      sortingToSizeDesc({commit,state}){                // Sorts houses list to size descending 
        const houses = state.houses
        const sortedArray = sortArray(houses, {
          by: 'size',
          order: 'desc'
        })           
        commit('setSortedBySizeDesc', sortedArray)
      },

      sortingToPriceDesc({commit,state}){               // Sorts houses list to price descending
        const houses = state.houses
        const sortedArray = sortArray(houses, {
          by: 'price',
          order: 'desc'
        })        
        commit('setSortedByPriceDesc', sortedArray)
      },

      searchInput({commit},payload){                     // Recieves user search input
        commit('setUserInput', payload)
      },
     
      noResults({commit},payload){                       // Recieves results status after search input (true is no results)
       commit('setNoResults', payload) 
      },

      userFavoritesId({commit, state},payload){                   // Removes house id from favorites array if already in the array,
        const index = state.userFavoritesId.indexOf(payload)      // else adds it to the array
        if(index === -1){
          commit('setUserFavoritesId', payload)}
        else commit('setSpliceUserFavoritesId', index)
      },

      userFavoriteHouses({commit, state}){                        // Adds data of every house listed in the userFavoritesID array,
        console.log('userFavoriteHouses reached')                 // to the favoriteHouses array
        let favoriteHouses = []
        this.state.userFavoritesId.forEach(
          id => favoriteHouses.push(state.houses.find(house => JSON.stringify(house.id) === JSON.stringify(id))))
        commit('setUserFavoriteHouses', favoriteHouses)
      },

      userOwnListings({commit, state}){                   // Adds data of every house that is not already in the API database to the ownListedHouses array 
        let ownListedHouses = state.houses.filter(house => house.id > 11)
        commit('setUserOwnListings', ownListedHouses)
      },   
  },
      
    
                                                                            // --------------------------------- MUTATIONS ---------------------------- //
      

  mutations: {     

      setHouses(state,fetchResponseFromActions){          // Commits houses data to store from fetch response
        state.houses = fetchResponseFromActions
      },

      setSortedByPriceAsc(state, sortedHousesFromActions){        // Commits price sorting ascending to store               
        
        state.houses = sortedHousesFromActions
        console.log('sorted to price - ascending')
      },

      setSortedBySizeAsc(state, sortedHousesFromActions){         // Commits size sorting ascending to store             
            
        state.houses = sortedHousesFromActions
        console.log('sorted to size - ascending')
      },

      setSortedByPriceDesc(state, sortedHousesFromActions){       // Commits price sorting descending to store                   
        
        state.houses = sortedHousesFromActions
        console.log('sorted to price - decending')
      },

      setSortedBySizeDesc(state, sortedHousesFromActions){        // Commits size sorting descending to store                
        
        state.houses = sortedHousesFromActions
        console.log('sorted to size - descending')
      },
      

      setUserInput(state,userInputFromActions){                                   // Commits user search input to store
        state.currentSearchInput = userInputFromActions
      },

      setNewListing(state, newListingFromActions){                                // Commits new listing to store
        state.newListing = newListingFromActions
      },

      setNoResults(state, noResultsFromActions){                                  // Commits no results (true or false) to store
        state.noResults = noResultsFromActions
      },

      setRecentlyUploadedId(state, idFromResponseFromActions){                    // Commits recently uploaded id to store
        state.recentlyUploadedId = idFromResponseFromActions
      },

      setRemoveHouseById(state, houseByIdFromActions){                            // Commits removal of house from id to store
        state.houses = state.houses.splice(houseByIdFromActions,1)
      },

      setUserFavoritesId(state, idFromUserFavoritesActions){                      // Commits the id of recently added favorite to store
          state.userFavoritesId.push(idFromUserFavoritesActions)
      },

      setSpliceUserFavoritesId(state, indexFromUserFavoritesActions){             // Commits removal of recently removed favorite to store
        state.userFavoritesId.splice(indexFromUserFavoritesActions, 1)
      },
       
      setUserFavoriteHouses(state, favoriteHousesFromActions){                    // Commits favorite houses data to store
        state.userFavoriteHouses = favoriteHousesFromActions
      },

      setUserOwnListings(state, userOwnListingsFromActions){                      // Commits users own listes houses data to store
        state.userOwnListings = userOwnListingsFromActions
      }
  },
})
