<template>
        <div  class = 'iconsContainer'>
            <img class = 'iconEditDelete' src = '../assets/ic_edit.png' alt = ''  @click="$router.push('/edit-listing/' + id)" />
            <img class = 'iconEditDelete' src = '../assets/ic_delete.png' alt = '' @click="handleModal"/>  
        </div>
        <div v-if = 'showModal' class = 'modal'>
            <div class = 'innerModal'>
                <h1 class = 'h12'>Delete listing</h1>
                <p class = 'p3'>Are you sure you want to delete this listing? <br/> This action cannot be undone.</p>
                <button class = 'modalButton' @click = "handleDelete" >YES, DELETE</button>
                <button class = 'modalButton elementSecondary' @click = "showModal = false" >GO BACK</button>
            </div>
        </div>
        <div v-if = 'showModal' class = 'modalOverlay'></div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    props: ['id'],

    data(){
        return{
            deleteAccepted: false,
            showModal: false
        }
    },

    methods:{
        ...mapActions(['deleteHouseAPI']),
        handleModal(){
            this.showModal = true
        },
        handleDelete(){
            this.deleteHouseAPI(this.id)
            this.showModal = false
        }
        
    },


    
}
</script>

<style>
    .iconsContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
    }


    .clickableIcon:hover{
        cursor: pointer; 
    }

    .iconEditDelete{
        width: 2rem;
        height: 2rem;
    }

    .modalButton{
        width: 100%;
        height: 1.8rem;
        font-size: 0.6rem;
    }

   

</style>