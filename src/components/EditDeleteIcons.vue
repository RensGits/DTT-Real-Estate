<template>
        <div  id = 'iconsContainer'>
            <img class = 'iconEditDelete ' src = '../assets/ic_edit.png' alt = ''  @click="$router.push('/edit-listing')" />
            <img class = 'iconEditDelete' src = '../assets/ic_delete.png' alt = ''/>
        </div>
</template>

<script>
export default {

}
</script>

<style>
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