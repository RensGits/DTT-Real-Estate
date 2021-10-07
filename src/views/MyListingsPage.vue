<template>
  <div>
      <div id = 'myListingsPageContainer'>
          <div class = 'pageTitleContainer'>
              <h1>My Listings</h1>
          </div>
          
          <MyListingsSections/>
      </div>
  </div>
</template>

<script>

import MyListingsSections from '../components/MyListings/MyListingsSections.vue'
import {mapGetters} from 'vuex'

export default {
    components:{
        MyListingsSections
    },

    computed:{
        ...mapGetters(['getUserOwnListings'])
    }
}

</script>


<style>



@media only screen and (max-width: 768px){
    #myListingsPageContainer{
        padding: 0 2.5% 0 2.5%;
    }
}

</style>