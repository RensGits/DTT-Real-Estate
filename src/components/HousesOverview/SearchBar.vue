<template>
    <input id = 'searchBar' type = 'text' placeholder="  Search for a house" @keyup="handleSearchInput"/>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    
 

    methods: {
        ...mapActions(['searchInput']),
        handleSearchInput(e){
            
            this.searchInput(e.target.value);
        
        }    
    }
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



 
