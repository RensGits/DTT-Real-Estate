<template>
    <input id = 'searchBar' type = 'text' placeholder="Search for a house" @keyup="handleSearchInput"/>
    <p v-if = 'getFilteredHouses.length > 0' id = 'resultsCounter'>{{getFilteredHouses.length}} results found.</p>
    
</template>

<script>

import {mapActions,mapGetters} from 'vuex'


export default {

    computed: {
        ...mapGetters(['getCurrentSearchInput','getFilteredHouses', 'getNoResults'])

    },

    methods: {
        ...mapActions(['searchInput','searchResultsCounter','noResults']),
        handleSearchInput(e){                                                       // Returns search results on Enter key press

            if(e.key === 'Enter'){

                this.searchInput(e.target.value);                                   // sets noResults in store state to true or false
                if(this.getFilteredHouses.length < 1){
                    this.noResults(true);
                }
                else if (this.getFilteredHouses.length > 0){
                    this.noResults(false);
                }
            }
            if((e.key === 'Backspace' || 'Delete') && e.target.value === ''){       // Returns all results once input field is empty
                this.searchInput(e.target.value);
            }
            
        },
      
    },
   
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

    #resultsCounter{
        flex: 1;
        margin-left: 1rem;
        font-size: 0.8rem;
    }
</style> 



 
