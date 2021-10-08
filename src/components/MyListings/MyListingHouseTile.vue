---------- Individual Tile for the MyListingSections component ------------

<template>
  <div id = 'myListingHouseTileContainer'>
    <FavoriteToggle class = 'favoriteContainerMyListingTile' :id = id />
     
    <div id = 'tileFrontSide'>
        <h2>{{street}}</h2>
        <img :src='image' alt="">
        <p>€{{price}},-</p>
        <h4 class = 'p3'> {{size}}m2</h4>
    </div>
    <div id = 'tileBackside'>
        <button  @click ="$router.push('/details/' + id)">GO TO LISTING</button>
    </div>
    <div id='overlay'></div>
    
  </div>
</template>

<script>

import FavoriteToggle from '../SharedComponents/FavoriteToggle.vue'
import EditDeleteIcons from '../SharedComponents/EditDeleteIcons.vue'

export default {
  
    props: ['image','street','price', 'size', 'id', 'favoriteToggle'],
  
    components: { 
        FavoriteToggle,
        EditDeleteIcons 
    },
}

</script>


<style scoped>

p,h2,h4{
    position: absolute;
    z-index: 1000;
    color:white;
    padding: 0 1rem;
}

h2{
    margin-top: 2rem;
}

p{
    margin-top: 5rem;
}

.p3{
    margin-top: 7rem;
    margin-left: 0.3rem;
}

img{
    position: absolute;
    z-index: 0;
    border-radius: 8px; 
}

#myListingHouseTileContainer, img, #overlay, #tileBackside {
    width: 10rem;
    height: 10rem;
}


#myListingHouseTileContainer{
    position: relative; 
}

#overlay{
    position: absolute;
    border-radius: 8px;
    z-index: 100;
    background-color: rgba(53, 53, 53, 0.261);  
}

#tileFrontSide{
    display: flex;
    justify-content: flex-start;
    align-content: center;
}

#tileBackside{
    display: flex;
    flex-direction: column;
    opacity: 0;
    position: absolute;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.261);   
    border-radius: 8px;
}

#tileBackside:hover{
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 8px;
}

button{
    width: 8rem;
    font-size: 0.7rem;
}

.favoriteContainerMyListingTile{
    position: absolute;
    left: unset !important;
    right: 0.8rem !important;
    top: 0.8rem !important;
    z-index: 2500;
}

@media only screen and (max-width: 768px) {
    
    #myListingHouseTileContainer, img, #overlay, #tileBackside {
        width: 14rem;
        height: 14rem;
    }

    #tileBackside{
        opacity: 1;
    }

    button{
        position: absolute;
        top: 10.5rem;
        right: 1rem;
    }
}

</style>