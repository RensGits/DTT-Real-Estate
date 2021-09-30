<template>
  <div>

    <!-- Page title, searchbar & buttons -->
    <div class = 'spacingPageTitle'>
      <h1>Houses</h1>
      <button id = 'createNewBtn' @click="$router.push('create-listing')">+ CREATE NEW</button>
    </div>
      <div class = 'spacingSearchbar'>
      <SearchBar/>
      <p>test</p>
      
      <div>
        <button id = 'btnleft' class = 'toggleBtn left' :class = '{toggleBtnActive: btnLeftActive }' @click='handleBtnToggle'>Price</button>
        <button id = 'btnright' class = 'toggleBtn right' :class = '{toggleBtnActive: btnRightActive }' @click='handleBtnToggle'>Size</button>
      </div>
      </div>

    <!-- Houses list / todo: add v-for and data handling -->
    <div> 
      <HouseOverviewTile 
        v-for="house in getFilteredHouses"
        :key= "house.id"
        :adress = 'house.location.street'
        :price = 'house.price'
        :postalCode = 'house.location.zip '
        :city = 'house.location.city'
        :numberOfBedrooms = 'house.rooms.bedrooms'
        :numberOfBathrooms = 'house.rooms.bathrooms'
        :surfaceArea = 'house.size' 
        :image = 'house.image'
        :id = 'house.id'/>
        
     
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
    btnLeftActive: true,
    btnRightActive: false
    }},
  

  computed: mapGetters(['getFilteredHouses']),
       
  methods: {
    ...mapActions(['fetchHouses', 'sortingToPrice', 'sortingToSize']),

    handleBtnToggle(e){
      console.log(e.target.id)
      if(e.target.id === 'btnright'){
        this.btnLeftActive = false;
        this.btnRightActive = true;
        this.sortingToSize();
      }
      if(e.target.id === 'btnleft'){
        this.btnLeftActive = true;
        this.btnRightActive = false;
        this.sortingToPrice();
      }}
    },
  
  created(){
    this.fetchHouses();
  
  },


  
  }
</script>

<style>


.spacingPageTitle, .spacingSearchbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.spacingPageTitle{ margin: 1.7rem 0;}

.spacingSearchbar{ margin: 1.4rem 0}

#createNewBtn{
  background-color: rgb(230,85,64);
  color: white;
  border-style: none;
  border-radius: 7px;
  font-size: 0.9rem;
  font-weight: 500;
  height: 2.4rem;
  width: 11rem;
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

.left{
  border-radius: 7px 0 0 7px;
}

.right{
  border-radius: 0 7px 7px 0;
}

.resultsCounter{
  flex: 1;
  padding-left: 1rem;
  font-size: 0.7rem
}

</style>