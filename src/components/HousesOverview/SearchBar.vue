<template>
        <img class = 'searchBarIconSearch' src="../../assets/ic_search@2x.png" alt="">
        <img class = 'searchBarIconClear' src= "../../assets/ic_clear@2x.png" alt="" @click="handleSearchClear">
        <input class = 'searchBar' type = 'text' placeholder="Search for a house" @keyup="handleSearchInput" ref = 'searchBar'/>
        <p v-if = 'getFilteredHouses.length > 0' class = 'resultsCounter'>{{getFilteredHouses.length}} results found</p>
   
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
            console.log(e);
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
        handleSearchClear(){                                                        // Clears search input and returns all results
            this.$refs.searchBar.value = ''
            this.searchInput(this.$refs.searchBar.value)
        }
     
    }  
}

</script>

<style>
    
.searchBar{
    width: 33%;
    height: 2.45rem;
    background-color: rgb(233,233,233);
    border-style: none;
    border-radius: 6px;
    padding-left: 3rem;
}

.searchBar::placeholder{
    font-family: 'Open Sans', 'sans-serif';
}

.searchBarIconSearch{
    position: absolute;
    height: 1rem;
    left: 21%
}

.searchBarIconClear{
    position: absolute;
    height: 1rem;
    left: 38%
}

.resultsCounter{
    flex: 1;
    margin-left: 1rem;
    font-size: 0.9rem;
}

</style> 



 
