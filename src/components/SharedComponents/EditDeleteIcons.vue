---------- Component for the edit and delete buttons through out the webpage + warning modal on delete ----------

<template>
        <div>
        <div v-if='!isMobile && editable' class = 'iconsContainer'>
            <img class = 'iconEditDelete' src = '../../assets/ic_edit.png' alt = ''  @click="$router.push('/edit-listing/' + id)" />
            <img class = 'iconEditDelete' src = '../../assets/ic_delete.png' alt = '' @click="handleModal"/>  
        </div>
        <div v-if='isMobile' id = 'iconsContainerMobile'>
            <div id = 'mobileBackArrowContainer'>
                <img id = 'mobileBackArrow' src = '../../assets/ic_back_white.png' @click="$router.push('/')" />
            </div>
            <div v-if='editable' class = 'iconEditDeleteMobileContainer'>
            <img class = 'iconEditDeleteMobile' src = '../../assets/ic_edit_white.png' alt = ''  @click="$router.push('/edit-listing/' + id)" />
                </div>
            <div v-if='editable' class = 'iconEditDeleteMobileContainer'>
                <img class = 'iconEditDeleteMobile' src = '../../assets/ic_delete_white.png' alt = '' @click="handleModal"/>  
            </div>
        </div>
        <div v-if = 'showModal' class = 'modal'>
            <div class = 'innerModal'>
                <h1 class = 'h12'>Delete listing</h1>
                <p class = 'p3'>Are you sure you want to delete this listing? <br/> This action cannot be undone.</p>
                <button class = 'modalButton' @click = "handleDelete" >YES, DELETE</button>
                <button class = 'modalButton elementSecondary' @click = "showModal = false" >GO BACK</button>
            </div>
        </div>
        <div v-if = 'showModal' class = 'modalOverlay' @click = "showModal = false"></div>
        </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    props: ['id', 'isMobile'],

    data(){
        return{
            deleteAccepted: false,
            showModal: false,
            showRedIcons: true,
            editable: false      // if false, white icons are shown
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

    mounted(){
        if(this.id > 11){
            this.editable = true
        } 
        else this.editable = false
    }
}
</script>


<style>
.iconsContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3.5rem;
}

.iconEditDelete{
    width: 1.2rem;
    height: 1.2rem;
}

.iconEditDelete:hover{
        transform: scale(1.2);
        cursor: pointer; 
}

.modalButton{
    width: 100%;
    height: 1.8rem;
    font-size: 0.6rem;
}

#mobileBackArrow{
    height: 100%;
}

@media only screen and (max-width: 768px) {

    #iconsContainerMobile{
        display: flex;
        position: fixed;
        justify-content: space-between;
        top: 2rem;
        left: 1rem;
        width: 90vw;
        height: 1.5rem;
        padding-left: 0.7rem;
    }

    #mobileBackArrowContainer{
        flex: 8;
        height: 100%;
    }

    .iconEditDeleteMobileContainer{
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
}


@media only screen and (max-width: 330px){
    
    .iconsContainer{
        width: 4rem;
    }
    .iconEditDelete{
        width: 30%!important;
    }
}

   

</style>