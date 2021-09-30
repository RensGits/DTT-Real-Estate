<template>
    <h1>Edit listing</h1>
       
        <form class = 'form' @submit.prevent = 'handleSubmit' enctype="multipart/form-data">
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="streetName">Street name*</label>
            <input class = 'inputField' type="text" id = 'streetName' v-model = 'streetName'>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="houseNumber">House number*</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'houseNumber' >
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="addition">Addition (optional)</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'addition' >
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="postalCode">Postal Code*</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'postalCode' v-model = 'zip' >
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="city">City</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'city' v-model = 'city' >
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="uploadPicuture">Upload picture (PNG or JPG)*</label>
            <input placeholder = '-' class = 'uploadPictureBox' type="file" id="uploadPicture" @change = 'handleFileUpload'/>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="price">Price*</label>
            <input  class = 'inputField' type="text" id = 'price' v-model = 'price' >
        </div>
         <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="size">Size*</label>
                <input placeholder = '-.size' class = 'inputField' type="text" id = 'size' v-model = 'size' >
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="garage">Garage*</label>
                <select class = 'inputField' type="text" id = 'garage' v-model = 'hasGarage' >
                    <option value='true'>yes</option>
                    <option value='false'>no</option>
                </select>
            </div>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bedrooms">BedRooms*</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'bedrooms' v-model = 'bedrooms' >
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bathrooms">Bathrooms*</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'bathrooms' v-model = 'bathrooms' >
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="constructionDate">Construction date*</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'constructionDate' v-model = 'constructionYear' >
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="description">Description*</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'description' v-model = 'description'>
        </div>
        <input placeholder = '-' class = 'postButton' type = 'submit' value = 'SAVE' @click="handleClick">
        
    </form>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  data(){
      return{
            id: this.$route.params.id,
           
            price: '',
            bedrooms: '',
            bathrooms: '',
            size: '' ,
            streetName: '',
            houseNumber: '',
            numberAddition: '',
            zip: '',
            city: '',
            constructionYear: '',
            hasGarage: '',
            description: '',
            
        }
  },

            
  mounted(){
    let data = this.$store.getters.getHouseById(this.id)
    this.price = data.price
    this.bedrooms = data.rooms.bedrooms
    this.bathrooms = data.rooms.bathrooms
    this.size = data.size
    // this.streetName = data.location.street
    // this.houseNumber =
    // this.numberAddition
    this.zip = data.location.zip
    this.city = data.location.city
    this.constructionYear = data.constructionYear
    this.hasGarage = data.hasGarage
    this.description = data.description
  }    
    
 

}
</script>

<style>
     .form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 5rem) 12rem repeat(4, 5rem) 6rem;
        gap: 2rem;
        width: 25rem;
      
    }
    .inputField{
        height: 100%;
        background-color: white;
        border-style: none;
        border-radius: 6px;
        font-size: 0.8rem; 
    }

    .inputFieldContainer{
        display: flex;
        flex-direction: column;
        grid-column: 1/3;
        width: 100%;
    }

    .inputFieldContainerWrapper{
        display: flex;
        grid-column: 1/3;
        justify-content: space-between;
        width: 100%;
    }

    .inputFieldContainerWrapper > .inputFieldContainer{
        width: 48%;
    }

    .inputFieldHeader{
        font-weight: 500;
        margin-bottom: 0.5rem
    }

    .uploadPictureBox{
        display:none;
        display: grid;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        border-style:dashed;
        border-color: darkgray;
        border-width: 2px;
        border-spacing: 60px;
        font-size: 4rem;
        font-weight: 400;
        
    }

    .postButtonContainer{
        display: flex;
        width: 100%;
        justify-content:right;
    }

    .postButton{
        grid-column: 2;
        background-color: rgb(230,85,64);
        color: white;
        border-style: none;
        border-radius: 7px;
        font-size: 0.9rem;
        font-weight: 500;
        height: 2.4rem;
        width: 11rem;
    }


</style>