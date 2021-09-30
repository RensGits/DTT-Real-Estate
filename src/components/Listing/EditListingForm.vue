<template>
    <h1>Edit listing</h1>
       
        <form class = 'form' @submit.prevent = 'handleSubmit' enctype="multipart/form-data">
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="streetName">Street name*</label>
            <input class = 'inputField' type="text" id = 'streetName' v-model = "editedData.streetName">
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="houseNumber">House number*</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'houseNumber' v-model = 'editedData.houseNumber'>
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="addition">Addition (optional)</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'addition' v-model = 'editedData.numberAddition' >
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="postalCode">Postal Code*</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'postalCode' v-model = 'editedData.zip' >
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="city">City</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'city' v-model = 'editedData.city' >
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="uploadPicuture">Upload picture (PNG or JPG)*</label>
            <input placeholder = '-' class = 'uploadPictureBox' type="file" id="uploadPicture" @change = 'handleFileUpload'/>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="price">Price*</label>
            <input  class = 'inputField' type="text" id = 'price' v-model = 'editedData.price' >
        </div>
         <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="size">Size*</label>
                <input placeholder = '-.size' class = 'inputField' type="text" id = 'size' v-model = 'editedData.size' >
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="garage">Garage*</label>
                <select class = 'inputField' type="text" id = 'garage' v-model = 'editedData.hasGarage' >
                    <option value='true'>yes</option>
                    <option value='false'>no</option>
                </select>
            </div>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bedrooms">BedRooms*</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'bedrooms' v-model = 'editedData.bedrooms' >
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bathrooms">Bathrooms*</label>
                <input placeholder = '-' class = 'inputField' type="text" id = 'bathrooms' v-model = 'editedData.bathrooms' >
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="constructionDate">Construction date*</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'constructionDate' v-model = 'editedData.constructionYear' >
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="description">Description*</label>
            <input placeholder = '-' class = 'inputField' type="text" id = 'description' v-model = 'editedData.description'>
        </div>
        <input placeholder = '-' class = 'postButton' type = 'submit' value = 'SAVE'>
        
    </form>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  data(){
      return{


           
           
            editedData:{
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
            image: '',
            file: null,
            id: this.$route.params.id,
            }
        }
  },

            
  mounted(){
    let data = this.$store.getters.getHouseById(this.editedData.id)
    this.editedData.price = data.price
    this.editedData.bedrooms = data.rooms.bedrooms
    this.editedData.bathrooms = data.rooms.bathrooms
    this.editedData.size = data.size
    this.editedData.streetName = data.location.street.split(/[0-9]/)[0]
    this.editedData.houseNumber = data.location.street.match(/(\d+)/)[0]
    this.editedData.numberAddition = data.location.street.split(data.location.street.match(/(\d+)/)[0])
    this.editedData.zip = data.location.zip
    this.editedData.city = data.location.city
    this.editedData.constructionYear = data.constructionYear
    this.editedData.hasGarage = data.hasGarage
    this.editedData.description = data.description
    this.editedData.image = data.image
  },
  
  methods: {
        ...mapActions(['postHouse']),
        handleSubmit(){
            console.log(this.editedData)
            console.log(this.editedData.file)
           this.postHouse(this.editedData)
        },
        handleFileUpload(e){
            console.log('handleFileUpload triggered')
            
            this.editedData.file = e.target.files[0]
        }
    
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