---------- Individual tile for the HousesOverviewPage (home) ----------

<template >
  <div id = 'overviewTileContainer'  >
      <div id = 'overviewTileLeft' @click ="$router.push('/details/' + id)" >
          <img id = "overviewTileImage" :src='image' alt="">
          <div id = 'overviewTileMiddle'>
                <h2 id = 'adress'>{{adress}}</h2>                  
                <h3 id = 'price'>€ {{price}}</h3>
                <p id = 'zipAndCity' class = 'textTertairy'>{{postalCode}}, {{city}}</p>
                <div class = 'detailsIconsContainer'>
                    <img id = 'bedIcon' class = 'iconSmall' src = '../../assets/ic_bed.png' alt = ''/>
                    <p id = 'numberOfBedrooms'>{{numberOfBedrooms}}</p>
                    <img id = 'bathIcon' class = 'iconSmall' src = '../../assets/ic_bath.png' alt = ''/>
                    <p id = 'numberOfBathrooms'>{{numberOfBathrooms}}</p>
                    <img id = 'sizeIcon' class = 'iconSmall' src = '../../assets/ic_size.png' alt = ''/>
                    <p id = 'surfaceArea'>{{surfaceArea}} m2</p>
                </div>
          </div>
          <FavoriteToggle class = 'favoriteContainerOverviewTile' :id = id />
      </div>
      <div id = 'overviewTileRight'>
        <div  id = 'detailsIconsContainer'>       
            <EditDeleteIcons :id = id />
        </div>
      </div>
  </div>
</template>

<script>

import EditDeleteIcons from '../SharedComponents/EditDeleteIcons.vue'
import FavoriteToggle from '../SharedComponents/FavoriteToggle.vue'
import {mapActions, mapGetters} from 'vuex'


export default {

    
    components:{
        EditDeleteIcons, FavoriteToggle

    },

    props: [
        'adress',
        'price',
        'postalCode',
        'city',
        'numberOfBedrooms',
        'numberOfBathrooms',
        'surfaceArea',
        'image',
        'id'
        ],

    computed:{
    ...mapGetters(['getIsUserFavorite']),
    
    },

    methods: {
    ...mapActions(['deleteHouseAPI']),
        deleteHouse(){
            console.log('delete button clicked')
            console.log(this.id)
            this.deleteHouseAPI(this.id)
        },
       
    }
}
    
</script>

<style>
    #overviewTileContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 11rem;
        margin: 1rem 0;
        border-radius: 8px;
        background-color: white;
    }

     #overviewTileContainer:hover{
        cursor: pointer;
        background-color:rgba(230, 86, 64, 0.576) ;
    }

    #overviewTileLeft{
        display: flex;
        position: relative;
        align-items: center;
        height: 100%;
        width: 90%;
        padding: 1rem;
    }


    #overviewTileMiddle{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 18%;
        height: 90%;
    }

    #overviewTileRight{
        display:flex;
        width: 6rem;
        align-self: start;
        padding: 2rem 2rem 0 0;
        align-items: center;
        justify-content: space-between;
    }

  

    #overviewTileImage{
      
        width: 9rem;
        height: 9rem;
        margin-right: 1.5rem;
        border-radius: 6px;
    }

    .clickableIcon:hover{
        cursor: pointer;
       
    }

    .favoriteContainerOverviewTile{
     
        position: absolute;
        left: 0.8rem;
        top: 1.5rem;
        z-index: 2500;
    }

        .detailsIconsContainer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.5rem;
            width: 11.5rem;
          
        }
    
   


    @media only screen and (max-width: 480px) {
        #overviewTileContainer{
            height: 9rem;
            
        }

        #overviewTileLeft{
            padding: 0.8rem 0 0.8rem 0.75rem;
            width: 100%;
        }

        #overviewTileMiddle{
            height: 95%;
        }

        #overviewTileRight{
            position: absolute;
            height: 2.4rem;
            width: 2.4rem;
            padding: 0;
            right: 10%;
        }

        #overviewTileImage{
            height: 7rem;
            width: 7rem;
            border-radius: 6px;
            margin-right: 0.7rem;
        }

        .detailsIconsContainer{
            width: 10rem;
        }
    }

 

    @media only screen and (max-width: 330px) {
       
        #numberOfBedrooms, #numberOfBathrooms, #zipAndCity, #bedIcon, #bathIcon{
            display: none;
        }

        #overviewTileRight{
            margin-top: 6rem;           
        }

        .detailsIconsContainer{
            justify-content: start;
        }
    }

</style>