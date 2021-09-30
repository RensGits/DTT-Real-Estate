<template>
        <div  id = 'iconsContainer'>
            <img class = 'iconEditDelete' src = '../assets/ic_edit.png' alt = ''  @click="$router.push('/edit-listing/' + id)" />
            <img class = 'iconEditDelete' src = '../assets/ic_delete.png' alt = '' @click="deleteHouse"/>
            <p>{{id}}</p>
        </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    props: ['id'],

    methods:{
        ...mapActions(['deleteHouse']),
        deleteHouse(){
            console.log('delete button clicked')
            this.deleteHouse(this.id)
        }
    },

    mounted(){
        console.log(this.id)
    },
    updated(){
        console.log('updated')
    }
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