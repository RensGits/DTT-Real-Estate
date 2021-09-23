<template>
  <div id = 'overviewTileContainer' >
      <div id = 'overviewTileLeft' @click="$router.push('/details')" >
          <img id = "overviewTileImage" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tiny-houses-1579284305.png?crop=1.00xw:0.788xh;0,0.189xh&resize=640:*" alt="">
          <div>
              <h2>Kleinegrootstraat 11</h2>
              <h3>$200.000</h3>
              <p class = 'light'>3312 DT Antwerpen</p>
              <div id = 'iconsContainer'>
                  <span class="material-icons md-18">bed</span>
                  <p class = 'marginRight04'>1</p>
                  <span class="material-icons md-18">bathtub</span>
                  <p class = 'marginRight04'>1</p>
                  <span class="material-icons md-18">aspect_ratio</span>
                  <p class = 'marginRight04'>120 m2</p>
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

    #overviewTileLeft{
        display: flex;
        align-items: center;
        height: 100%;
        width: 90%;
        padding: 1rem;
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

   

</style>