<template>
        <div  id = 'iconsContainer'>
            <img class = 'iconEditDelete' src = '../assets/ic_edit.png' alt = ''  @click="$router.push('/edit-listing/' + id)" />
            <img class = 'iconEditDelete' src = '../assets/ic_delete.png' alt = '' @click="handleDelete"/>
            
        </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    props: ['id'],

    methods:{
        ...mapActions(['deleteHouseAPI']),
        handleDelete(){
            console.log('delete button clicked')
            console.log(this.id)
            this.deleteHouseAPI(this.id)
        }
    },


    
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