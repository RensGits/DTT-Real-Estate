<template>
  <div class = 'detailsTileContainer'>
      <div class = 'gridRow1'><img class = 'detailsTileImage' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tiny-houses-1579284305.png?crop=1.00xw:0.788xh;0,0.189xh&resize=640:*" alt=""></div>
      <div class = 'gridRow2'>
        
        <h1>Kleinegrootstraat 11</h1>
        <EditDeleteIcons/>
        
      </div>
      <div class = 'gridRow3'>
            
            <div class = 'iconsRow'>
                <img class = 'iconDetails' src = '../../assets/ic_location.png' alt = ''/>
                <p class = 'margingRight04'>3312 DT Antwerpen</p>
            </div>
            
            <div class = 'iconsRow'>
                 <img class = 'iconDetails' src = '../../assets/ic_price.png' alt = ''/>
                <p class = 'marginRight04'>200.000</p>
                 <img class = 'iconDetails' src = '../../assets/ic_size.png' alt = ''/>
                <p class = 'marginRight04'>120 m2</p>
                 <img class = 'iconDetails' src = '../../assets/ic_construction_date.png' alt = ''/>
                <p class = 'marginRight04'>1967</p>
            </div>
            
            <div class = 'iconsRow'>
                 <img class = 'iconDetails' src = '../../assets/ic_bed.png' alt = ''/>
                <p class = 'marginRight04'>1</p>
                 <img class = 'iconDetails' src = '../../assets/ic_bath.png' alt = ''/>
                <p class = 'marginRight04'>1</p>
                 <img class = 'iconDetails' src = '../../assets/ic_garage.png' alt = ''/>
                <p class = 'marginRight04'>Yes</p>
            </div>
      </div>
      <p class = 'gridRow4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolore vel dolor cupiditate quod delectus asperiores minus vero autem consequuntur natus ipsa labore nostrum sunt, commodi nulla magnam quaerat, quas, eligendi neque nesciunt ab ut. Itaque praesentium id incidunt harum!
      </p>
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
    
</style>