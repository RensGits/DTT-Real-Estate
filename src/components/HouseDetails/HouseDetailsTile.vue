<template>
  <div class = 'detailsTileContainer'>
      <div class = 'gridRow1'><img class = 'detailsTileImage' :src='house.image' alt=""></div>
      <div class = 'gridRow2'>
        
        <h1>{{house.location.street}}</h1>
        <EditDeleteIcons :id = 'id'/>
        
      </div>
      <div class = 'gridRow3'>
            
            <div class = 'iconsRow'>
                <img class = 'iconDetails' src = '../../assets/ic_location.png' alt = ''/>
                <span class = 'margingRight04'>{{house.location.zip}}</span><span class = 'margingRight04'>{{house.location.city}}</span>
            </div>
            
            <div class = 'iconsRow'>
                 <img class = 'iconDetails' src = '../../assets/ic_price.png' alt = ''/>
                <p class = 'marginRight04'>{{house.price}}</p>
                 <img class = 'iconDetails' src = '../../assets/ic_size.png' alt = ''/>
                <p class = 'marginRight04'>{{house.size}}</p>
                 <img class = 'iconDetails' src = '../../assets/ic_construction_date.png' alt = ''/>
                <p class = 'marginRight04'>{{house.constructionYear}}</p>
            </div>
            
            <div class = 'iconsRow'>
                 <img class = 'iconDetails' src = '../../assets/ic_bed.png' alt = ''/>
                <p class = 'marginRight04'>{{house.rooms.bedrooms}}</p>
                 <img class = 'iconDetails' src = '../../assets/ic_bath.png' alt = ''/>
                <p class = 'marginRight04'>{{house.rooms.bathrooms}}</p>
                 <img class = 'iconDetails' src = '../../assets/ic_garage.png' alt = ''/>
                <p class = 'marginRight04'>{{house.hasGarage}}</p>
            </div>
      </div>
      <p class = 'gridRow4'>
          {{house.description}}
      </p>
  </div>
  
</template>

<script>

import EditDeleteIcons from '../EditDeleteIcons.vue'


export default {

    data(){
        return{
            id: this.$route.params.id 
        }
    },

    components:{
        EditDeleteIcons
    },

    computed: {
        house(){ // stores getter data in house property
            return this.$store.getters.getHouseById(this.id);  // gets page specific house data based on id
        }    
    },
    
}
</script>

<style scoped>
    .detailsTileContainer{
        display:grid;
        grid-template-rows: 30rem 10rem 10rem auto;
        background-color:white;
        width: 70%;
    }

   .gridRow2,.gridRow3,.gridRow4{
        padding: 2rem;
    }

    .gridRow2{
        grid-row: 2;
        display:flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 2rem;
        
    }

    .gridRow3{
        grid-row: 3;
        width: 60%;
    }

    .gridRow4{
        grid-row: 4
    }
    .detailsTileImage{
        object-fit: cover;
        width: 100%;
        max-height: 100%;
        
    }

    .editDeleteIcons{
        width: 100%;
        height: 100%;
    }

    .md-18{
        font-size: 1rem!important;
    }

    p{
        font-size: 0.75rem;
    }

    .gridRow4{
        font-size:0.85rem;
    }

    .iconsRow{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .iconDetails{
        margin-right: 0.5rem;
    }
    .margingRight04{
        margin-right: 0.4rem;
    }
</style>