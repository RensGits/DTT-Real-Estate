<template>
    <input id = 'searchBar' type = 'text' placeholder="Search for a house" :value = 'this.getCurrentSearchInput' @keyup="handleSearchInput"/>
    
    
</template>

<script>

import {mapActions,mapGetters} from 'vuex'


export default {

    computed: {
        ...mapGetters(['getCurrentSearchInput'])
    },

    methods: {
        ...mapActions(['searchInput','searchResultsCounter']),
        handleSearchInput(e){
            this.searchInput(e.target.value);
          
            
        },  
    },

    // computed: {
        
    //     getSearchResultsCounter(){
    //         console.log('getter triggered')
    //         console.log(this.$store.getters.getSearchResultsCounter)
    //         return this.$store.getters.getSearchResultsCounter},

    // },

   
}



</script>

<style>

    #searchBar{
    width: 33%;
    height: 2.3rem;
    background-color: rgb(233,233,233);
    border-style: none;
    border-radius: 6px;
    }

</style> 



 
