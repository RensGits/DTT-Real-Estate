---------- Searchbar component + results counter ----------

<template>

        <!-- SearchBar, seach & clear icon -->
        <img id = 'searchBarIconSearch' src="../../assets/ic_search@2x.png" alt="">
        <img id = 'searchBarIconClear' src= "../../assets/ic_clear@2x.png" alt="" @click="handleSearchClear">
        <input id = 'searchBar' type = 'text' placeholder="Search for a house" @keyup="handleSearchInput" ref = 'searchBar' :value = 'getCurrentSearchInput'/>

        <!-- Counter shown after a result input -->
        <h2 v-if = "getFilteredHouses.length > 0 && getCurrentSearchInput != ''" id = 'resultsCounter'>{{getFilteredHouses.length}} results found</h2> 
        
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
                this.noResults(false)
            } 
        },
        handleSearchClear(){                                                        // Clears search input and returns all results
            this.$refs.searchBar.value = ''
            this.searchInput(this.$refs.searchBar.value)
            this.noResults(false)
        }
    }  
}

</script>

<style>
    
#searchBar{
    width: 35%;
    height: 2.45rem;
    background-color: rgb(233,233,233);
    border-style: none;
    border-radius: 6px;
    padding-left: 3rem;
}

#searchBar::placeholder{
    font-family: 'Open Sans', 'sans-serif';
}

#searchBarIconSearch{
    position: absolute;
    height: 1rem;
    left: 21%
}

#searchBarIconClear{
    position: absolute;
    height: 1rem;
    right: 60%;
    cursor: pointer;
}

#resultsCounter{
    flex: 1;
    margin-left: 1rem;
    font-size: 0.9rem;
}

@media only screen and (max-width: 990px) {
    #searchBar{
        grid-row: 1;
        width: 100%;
    }

    #searchBarIconClear{
        top: 13.5rem;
        left: 86%;  
    }

    #searchBarIconSearch{
        top: 13.5rem;
        left: 12%;
    }


}
@media only screen and (max-width: 768px) {

    #resultsCounter{
        grid-row: 3;
        padding-top: 2rem 0;
    }

    #searchBarIconClear{
        left: 90%;
        top: 7rem;
    }

    #searchBarIconSearch{
        top: 7rem;
        left: 8%;
    }
}

@media only screen and (max-width: 480px) {
    
    #searchBarIconClear{
        left: 86%;  
    }
}

</style> 



 
