<template >
  <div id = 'overviewTileContainer' >
      <div id = 'overviewTileLeft'>
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
      <EditDeleteIcons/>
      </div>
  </div>
</template>

<script>

import EditDeleteIcons from '../EditDeleteIcons.vue'



export default {
    components:{
        EditDeleteIcons
    },
    props: [
        'adress','price','postalCode','city','numberOfBedrooms','numberOfBathrooms','surfaceArea','image'
        ],
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
   

</style>