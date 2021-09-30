<template>
    <h1>Create new listing</h1>
    <form class = 'form' @submit.prevent = 'handleSubmit' enctype="multipart/form-data">
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="streetName">Street name*</label>
            <input class = 'inputField' type="text" id = 'streetName' v-model = "newListingData.streetName">
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="houseNumber">House number*</label>
                <input class = 'inputField' type="text" id = 'houseNumber' v-model = "newListingData.houseNumber">
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="addition">Addition (optional)</label>
                <input class = 'inputField' type="text" id = 'addition' v-model = "newListingData.numberAddition">
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="postalCode">Postal Code*</label>
            <input class = 'inputField' type="text" id = 'postalCode' v-model = "newListingData.zip">
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="city">City</label>
            <input class = 'inputField' type="text" id = 'city' v-model = 'newListingData.city'>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="uploadPicuture">Upload picture (PNG or JPG)*</label>
            <input class = 'uploadPictureBox' type="file" id="uploadPicture" @change = 'handleFileUpload'/>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="price">Price*</label>
            <input class = 'inputField' type="text" id = 'price' v-model = 'newListingData.price'>
        </div>
         <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="size">Size*</label>
                <input class = 'inputField' type="text" id = 'size' v-model = 'newListingData.size' accept="image/*">
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="garage">Garage*</label>
                <select class = 'inputField' type="text" id = 'garage' v-model = 'newListingData.hasGarage'>
                    <option value='true'>yes</option>
                    <option value='false'>no</option>
                </select>
            </div>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bedrooms">BedRooms*</label>
                <input class = 'inputField' type="text" id = 'bedrooms' v-model = 'newListingData.bedrooms'>
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bathrooms">Bathrooms*</label>
                <input class = 'inputField' type="text" id = 'bathrooms' v-model = 'newListingData.bathrooms'>
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="constructionDate">Construction date*</label>
            <input class = 'inputField' type="text" id = 'constructionDate' v-model = 'newListingData.constructionYear'>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="description">Description*</label>
            <input class = 'inputField' type="text" id = 'description' v-model = 'newListingData.description'>
        </div>
        <input class = 'postButton' type = 'submit' value = 'POST'>
        
    </form>
</template>






<script>

import{mapActions} from 'vuex'

export default {

    data(){
        return{
            newListingData: {
            price: '',
            bedrooms: '',
            bathrooms: '',
            size: '',
            streetName: '',
            houseNumber: '',
            numberAddition: '',
            zip: '',
            city: '',
            constructionYear: '',
            hasGarage: '',
            description: '',
            file: null,
            }
        }
    },

    methods: {
        ...mapActions(['postHouse']),
        handleSubmit(){
            console.log(this.newListingData)
            console.log(this.newListingData.file)
           this.postHouse(this.newListingData)
        },
        handleFileUpload(e){
            console.log('handleFileUpload triggered')
            
            this.newListingData.file = e.target.files[0]
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