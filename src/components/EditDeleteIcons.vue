<template>
        <div  id = 'iconsContainer'>
          <span class="material-icons clickableIcon" @click="$router.push('/edit-listing')" >edit</span>
          <span class="material-icons clickableIcon">delete</span>
        </div>
</template>

<script>
export default {

}
</script>

<style>
 #iconsContainer{
        display: flex;
        align-items: center;
    }

    

    .material-icons.md-18 { 
        font-size: 18px;
        margin-right: 0.6rem; 
        margin-left: 0;
        color: rgb(181, 181, 181)
    }

    .marginRight04{
        margin-right: 0.4rem;
    }

    .clickableIcon:hover{
        cursor: pointer;
        font-size: 2rem;
    }
</style>