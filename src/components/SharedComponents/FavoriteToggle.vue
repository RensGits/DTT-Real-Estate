---------- Component for toggeling favorite status of a single house (heart icon) ----------

<template>     
    <div @click.stop = 'handleFavoriteToggle'  >
        <span v-if = '!getIsUserFavorite(id)' class="material-icons favoriteIcon">favorite</span>
        <span v-if = 'getIsUserFavorite(id)' class="material-icons favoriteIconActive">favorite</span>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {

    props:['id'],

    computed:{
        ...mapGetters(['getIsUserFavorite']), 
    },

    methods:{
        ...mapActions(['userFavoritesId', 'userOwnListings', 'userFavoriteHouses']),
         handleFavoriteToggle(){
            this.userFavoritesId(this.id)           // adds house id to list of favorites, or removes it if it already is on the list
            this.userFavoriteHouses();              // updates current data list of favorite houses
        }
    }
}

</script>


<style>

.favoriteIcon{
    color: white; 
}

.favoriteIcon:hover, .favoriteIconActive:hover{
    cursor: pointer;
    transform: scale(1.1)
}

.favoriteIconActive{
    color: rgb(230,85,64)
}

</style>