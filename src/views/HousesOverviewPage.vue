---------- Home page with the overview of all houses ----------

<template>
  <div>
    <div class = 'overviewPageContainer'>

      <!-- Page title, searchbar & filter buttons -->
      
      <div class = 'pageTitleContainer'>
        <h1 id = 'pageTitle'>Houses</h1>
        <button id = 'createNewButton' @click="$router.push('create-listing')">+ CREATE NEW</button>
        <img id = 'createNewButtonMobile' src="../assets/ic_plus_grey.png" alt=""  @click="$router.push('create-listing')">
      </div>
      <div id = 'searchAndFilters'>
        <SearchBar/>
        <div id = 'ascendingDescendingIcons'>
          <span v-if = 'descending' class="material-icons sortingIcon" @click='handleSortingToggle'>keyboard_double_arrow_down</span>
          <span v-if = '!descending' class="material-icons sortingIcon" @click='handleSortingToggle'>keyboard_double_arrow_up</span>
        </div>
        <div class = 'filterButtons'>
          <button id = 'btnleft' class = 'toggleBtn left' :class = '{toggleBtnActive: btnLeftActive }' @click='handleButtonToggle'>Price</button>
          <button id = 'btnright' class = 'toggleBtn right' :class = '{toggleBtnActive: btnRightActive }' @click='handleButtonToggle'>Size</button>
        </div>
      </div>

      <!-- House overview tiles -->
      
      <div v-if = 'getNoResults === false'> 
        
          <HouseOverviewTile
            class = 'enter'
            v-for="house in getFilteredHouses"
            :key= "house.id"
            :adress = 'house.location.street'
            :price = getFormattedPrice(house.price)
            :postalCode = 'house.location.zip '
            :city = 'house.location.city'
            :numberOfBedrooms = 'house.rooms.bedrooms'
            :numberOfBathrooms = 'house.rooms.bathrooms'
            :surfaceArea = 'house.size' 
            :image = 'house.image'
            :id = 'house.id'/>
        
      </div>

      <!-- Displays when serach returns no results  -->

      <div v-else-if = 'getNoResults' class = 'getNoResultsContainer'>
        <img id = 'getNoResultsImage' src="../assets/img_empty_houses@2x.png" alt="">
        <p class = 'p3'>No results found.<br/> Please try another keyword.</p>
      </div>

      <div class = 'spacer'></div>
    </div>
    
  </div>
</template>


<script>

import HouseOverviewTile from '../components/HousesOverview/HouseOverviewTile.vue'
import SearchBar from '../components/HousesOverview/SearchBar.vue'
import {mapGetters, mapActions} from 'vuex';

export default {
  
  components: {
    HouseOverviewTile,
    SearchBar
  },

  data(){           
    return{
      btnLeftActive: false,
      btnRightActive: false,
      descending: false
    }
  },

  computed: {
  ...mapGetters(['getFilteredHouses', 'getNoResults', 'getFormattedPrice']),
  },
       
  methods: {
    ...mapActions(['fetchHouses', 'sortingToPriceAsc', 'sortingToSizeAsc', 'sortingToSizeDesc','sortingToPriceDesc']),

    handleButtonToggle(e){                  // sets the clicked filter button as active, then calls sorting function
      if(e.target.id === 'btnright'){
        this.btnLeftActive = false;
        this.btnRightActive = true;
        this.handleSorting();
      }
      if(e.target.id === 'btnleft'){
        this.btnLeftActive = true;
        this.btnRightActive = false;
        this.handleSorting();
      }
    },

    handleSortingToggle(){                   // toggles ascending / descending filter
      this.descending = !this.descending
      this.handleSorting();
    },

    handleSorting(){                                    // Calls action from store depending on what sorting is applied
      if(this.btnRightActive && !this.descending){      // Sorting to size + ascending
        this.sortingToSizeAsc();
      }
      if(this.btnLeftActive && !this.descending){       // Sorting to price + ascending 
        this.sortingToPriceAsc();
      }
      if(this.btnRightActive && this.descending){       // Sorting to size + descending
        this.sortingToSizeDesc();
      }
      if(this.btnLeftActive && this.descending){        /// Sorting to price + descending
        this.sortingToPriceDesc();
      }
      
    }
    
  },
  
  created(){                    
    this.fetchHouses();
  },
}

</script>


<style>

 #searchAndFilters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.4rem 0
}


#createNewButton{
  background-color: rgb(230,85,64);
  color: white;
  border-style: none;
  border-radius: 7px;
  font-size: 0.9rem;
  font-weight: 500;
  height: 2.4rem;
  width: 11rem;
}

#createNewButtonMobile{
  display:none;
}

.toggleBtn{
  background-color: rgb(195,195,195);
  color: white;
  border-style: none;
  font-size: 0.75rem;
  font-weight: 700;
  height: 2.6rem;
  width: 7.5rem;
}

.toggleBtnActive{
  background-color: rgb(230,85,64);
}

#ascendingDescendingIcons{
  display: flex;
  justify-content: flex-end;
  color: #c3c3c3;
  flex: 1;
}

.sortingIcon{
  margin-right: 0.7rem;
  margin-left: 0;
  cursor: pointer;
}

.left{
  border-radius: 7px 0 0 7px;
}

.right{
  border-radius: 0 7px 7px 0;
}

.getNoResultsContainer{
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100% ;
  padding: 10%;
  text-align: center;
}

#getNoResultsImage{
  width: 25rem;
  margin-bottom: 2rem;
}



@media only screen and (max-width: 990px) {
  #searchAndFilters{
    display: grid;
    grid-template-rows: 4rem 4rem auto;
    grid-template-columns: 100%;
    width: 100%;
    justify-items: right;
  }

  .filterButtons{
    grid-row: 2;
    width: 100%;
  }

 .toggleBtn{
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  
  .overviewPageContainer{
    width: 100%;
    height: auto;
    padding: 0 5% ;
  }

  #pageTitle{
    flex: 1;
    text-align: center;
  }

  #createNewButton{
    display:none;
  }

  #createNewButtonMobile{
    display: block;
    position: absolute;
    right: 5%;
  }
  #getNoResultsImage{
    margin-top: 2rem;
    width: 20rem;
  }
}

@media only screen and (max-width: 330px) {
  #getNoResultsImage{
    margin-top: 2rem;
    width: 11rem;
  }
}

</style>