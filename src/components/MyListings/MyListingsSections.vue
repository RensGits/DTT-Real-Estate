---------- Component that generates tiles for the 'My own listings' & 'My favorites' section on the My listings page ----------

<template>
    <div id = 'MyListingsSectionsContainer'>
        <div class ='myListingsSection'>
            <h2>My own listings</h2>
            <div class = 'autoFillGrid'>
            <MyListingHouseTile
                v-for="listing in getUserOwnListings" :key = listing
                :image = listing.image
                :street = listing.location.street
                :price = getFormattedPrice(listing.price)
                :size = listing.size
                :id = listing.id
            />
            </div>
        </div>

    <div class ='myListingsSection'>
        <h2>My favorites</h2>
        <div class = 'autoFillGrid'>
            <MyListingHouseTile
                v-for="favorite in getUserFavoriteHouses" :key = favorite
                :image = favorite.image
                :street = favorite.location.street
                :price = getFormattedPrice(favorite.price)
                :size = favorite.size
                :id = favorite.id
            />
        </div>
    </div>
        <div class = 'spacer'></div>
    </div>
</template>


<script>

import {mapGetters,mapActions} from 'vuex'
import MyListingHouseTile from './MyListingHouseTile.vue'

export default {

    

    components:{
        MyListingHouseTile
    },

    computed: {
        ...mapGetters(['getUserFavoritesId', 'getHouseById', 'getUserFavoriteHouses', 'getUserOwnListings', 'getFormattedPrice']),
    },

    methods:{
        ...mapActions(['userFavoriteHouses', 'userOwnListings']),
        handleClick(){
            this.userOwnListings();
        },
        
    },

    mounted(){
        this.userFavoriteHouses();
        this.getUserFavorites
        this.userOwnListings();
    }
}

</script>


<style scoped>
    #MyListingsSectionsContainer{
        display:grid;
        gap: 4rem;
    }

    .myListingsSection{
        display:grid;
        gap: 1rem;
    }

    .autoFillGrid{
        display: grid;
        width: 100%;
        gap: 1rem;
        row-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }

@media only screen and (max-width: 768px) {
    
.autoFillGrid {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    justify-items: center;
}

p,h2{
    text-align: center;
}
}


</style>