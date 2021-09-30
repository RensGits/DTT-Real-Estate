<template >
  <div id = 'overviewTileContainer'  >
      <div id = 'overviewTileLeft' @click ="$router.push('/details/' + id)" >
          <img id = "overviewTileImage" :src='image' alt="">
          <div id = 'overviewTileMiddle'>
              <h2>{{adress}}</h2>
              <h3>${{price}}</h3>
              <p class = 'light'>{{postalCode}}, {{city}}</p>
              <div id = 'iconsContainer'>
                  <img class = 'iconSmall' src = '../../assets/ic_bed.png' alt = ''/>
                  <p class = 'marginRight04'>{{numberOfBedrooms}}</p>
                  <img class = 'iconSmall' src = '../../assets/ic_bath.png' alt = ''/>
                  <p class = 'marginRight04'>{{numberOfBathrooms}}</p>
                  <img class = 'iconSmall' src = '../../assets/ic_size.png' alt = ''/>
                  <p class = 'marginRight04'>{{surfaceArea}} m2</p>
              </div>
          </div>
      </div>
      <div id = 'overviewTileRight'>
        <div  id = 'iconsContainer' v-if= 'id > 11'>
            <EditDeleteIcons :id = id />
        </div>
      </div>
  </div>
</template>

<script>

import EditDeleteIcons from '../EditDeleteIcons.vue'
import {mapActions} from 'vuex'


export default {
    components:{
        EditDeleteIcons
    },
    props: [
        'adress','price','postalCode','city','numberOfBedrooms','numberOfBathrooms','surfaceArea','image','id'
        ],
    

    methods: {
    ...mapActions(['deleteHouseAPI']),
        deleteHouse(){
            console.log('delete button clicked')
            console.log(this.id)
            this.deleteHouseAPI(this.id)
        }}}
    
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
        align-items: center;
        height: 100%;
        width: 90%;
        padding: 1rem;
    }

   


    #overviewTileMiddle{
        min-width: 20%;
    }

    #overviewTileRight{
        display:flex;
        height: 20%;
        width: 9em;
        align-self: start;
        padding: 2rem;
        align-items: center;
        justify-content: space-between;
    }

  

    #overviewTileImage{
        width: 9rem;
        height: 9rem;
        margin-right: 1.5rem;
        border-radius: 6px;
    }

    
    .iconSmall{
      
        margin-right: 0.5rem;
        height: 20%;
        
    }
   
    #iconsContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .clickableIcon:hover{
        cursor: pointer;
       
    }

    .iconEditDelete{
        width: 40%;
        height: auto;
    }

</style>