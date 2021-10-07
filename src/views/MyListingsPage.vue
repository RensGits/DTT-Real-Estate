---------- Page for overview of users favorites and listings ----------

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

export default {
    components:{
        MyListingsSections
    },
}

</script>


<style>

@media only screen and (max-width: 768px){
    #myListingsPageContainer{
        padding: 0 2.5% 0 2.5%;
    }
}

</style>