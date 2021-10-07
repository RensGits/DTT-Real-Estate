---------- Individual tile for the HouseDetailsPage ----------

<template>
  <div class = 'detailsTileContainer'>
      
      <div class = 'gridRow1'>
          <img id = 'detailsTileImage' :src='house.image' alt="">
      </div>
      <div class = 'gridRow2'>
        
        <h1>{{house.location.street}}</h1>
         <div id = 'favoriteToggleContainerDetails'>
            
        </div>
        <EditDeleteIcons :id = 'id' :isMobile = 'isMobile'/>
        
      </div>
      <div class = 'gridRow3'>
            
            <div class = 'iconsRow'>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_location.png' alt = ''/>
                    <p>{{house.location.zip}}</p>
                    <p>{{house.location.city}}</p>
                </div>
            </div>
            

            <div class = 'iconsRow'>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_price.png' alt = ''/>
                    <p>{{price}}</p>
                </div>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_size.png' alt = ''/>
                    <p>{{house.size}}</p>
                </div>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_construction_date.png' alt = ''/>
                    <p>{{house.constructionYear}}</p>
                </div>
            </div>
            
            <div class = 'iconsRow'>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_bed.png' alt = ''/>
                    <p>{{house.rooms.bedrooms}}</p>
                </div>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_bath.png' alt = ''/>
                    <p>{{house.rooms.bathrooms}}</p>
                </div>
                <div class = 'iconAndInfoContainer'>
                    <img class = 'iconMedium' src = '../../assets/ic_garage.png' alt = ''/>
                    <p>{{house.hasGarage}}</p>
                </div>
            </div>
      </div>
      <div class = 'gridRow4'>
          <p class = 'description textSecondary'>{{house.description}}</p>
      </div>
  
  </div>

  
</template>

<script>

import EditDeleteIcons from '../SharedComponents/EditDeleteIcons.vue'
import FavoriteToggle from '../SharedComponents/FavoriteToggle.vue'


export default {

    props: ['isMobile'],

    data(){
        return{
            id: '', 
            house: ''
        }
    },

    components:{
        EditDeleteIcons,
        FavoriteToggle
    },

    

    computed: {
        price(){
            return this.$store.getters.getFormattedPrice(this.house.price)
        }
    },

    created(){
        this.id = this.$route.params.id
        this.house = this.$store.getters.getHouseById(this.id)
    },
  
    
}
</script>

<style scoped>

p{
    font-size: 0.9rem;
}

.detailsTileContainer{
    display:grid;
    grid-template-rows: 25rem 5rem 6rem auto;
    background-color:white;
    width: 45rem;
    max-width: 100%;
    height: auto;
}

.gridRow2{
    grid-row: 2;
    display:flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 2rem 2rem 0.5rem 2rem;   
}

.gridRow3{
    display: grid;
    grid-gap: 0.6rem;
    grid-row: 3;
    width: 60%;
    padding: 0.5rem 0 1rem 2rem;
}

.gridRow4{ 
    grid-row: 4;
    padding: 0.5rem 4rem 2rem 2rem;
    font-size:0.85rem;
}

#detailsTileImage{
    object-fit: cover;
    width: 100%;
    max-height: 100%;  
}

.editDeleteIcons{
    width: 100%;
    height: 100%;
}


.description{
    padding: 1rem 0 2rem 0;
    font-family: 'Open Sans', 'sans-serif';
    font-size: 0.95rem;
    font-weight: 500;
    word-spacing: 0.15rem;
    line-height: 1.5rem;
}


.iconsRow{
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;  
}

.iconAndInfoContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
}


.margingRight04{
    margin-right: 0.4rem;
}


@media only screen and (max-width: 768px) {
    .detailsTileContainer{
        width: 100%
    }
}


@media only screen and (max-width: 480px) {
    .detailsTileContainer{
        position: relative;
        width: 100%;
    }
    #detailsTileImage{
        position: fixed;
        z-index: 100;
        min-height: 25rem;
    }

    .gridRow2,.gridRow3,.gridRow4{
        background-color:white;
        z-index: 200;
    }

    .gridRow3{
        width: 100%
    }

    .gridRow2{
        border-radius: 10px 10px 0 0 
    }
}

</style>