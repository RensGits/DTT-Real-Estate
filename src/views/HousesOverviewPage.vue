<template>
  <div>

    <!-- Page title, searchbar & buttons -->
    <div class = 'spacingPageTitle'>
      <h1>Houses</h1>
      <button id = 'createNewBtn' @click="$router.push('create-listing')">+ CREATE NEW</button>
    </div>
      <div class = 'spacingSearchbar'>
      <SearchBar/>
      <div>
        <button id = 'btnleft' class = 'toggleBtn left' :class = '{toggleBtnActive: btnLeftActive }' @click='handleBtnToggle'>Price</button>
        <button id = 'btnright' class = 'toggleBtn right' :class = '{toggleBtnActive: btnRightActive }' @click='handleBtnToggle'>Size</button>
      </div>
      </div>

    <!-- Houses list / todo: add v-for and data handling -->
    <div> 
      <HouseOverviewTile/>
      <HouseOverviewTile/>
      <HouseOverviewTile/>
      <HouseOverviewTile/>
    </div>
  </div>
</template>

<script>

import HouseOverviewTile from '../components/HousesOverview/HouseOverviewTile.vue'
import SearchBar from '../components/HousesOverview/SearchBar.vue'


export default {
  

  

  data(){
    return{
    btnLeftActive: true,
    btnRightActive: false
    }},

  components: {
    HouseOverviewTile,
    SearchBar
  },
  methods: {
    handleBtnToggle(e){
      console.log(e.target.id)
      if(e.target.id === 'btnright'){
        this.btnLeftActive = false;
        this.btnRightActive = true;
        this.$store.state.btnLeftActive = false;
        this.$store.state.btnRightActive = true;
      }
      if(e.target.id === 'btnleft'){
        this.btnLeftActive = true;
        this.btnRightActive = false;
        this.$store.state.btnLeftActive = true;
        this.$store.state.btnRightActive = false;
      }}
    }
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

</style>