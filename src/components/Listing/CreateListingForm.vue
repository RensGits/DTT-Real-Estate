<template>
    <h1 v-if="listingData.id === undefined">Create new listing</h1>
    <h1 v-if="listingData.id != undefined">Edit listing</h1>
    <form class = 'form' @submit.prevent = 'handleSubmit' enctype="multipart/form-data">
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="streetName">Street name*</label>
            <input class = 'inputField' type="text" id = 'streetName'  v-model = "listingData.streetName" @input ="v$.listingData.streetName.$touch">
            <span class = 'fieldError' v-if="v$.listingData.streetName.required.$invalid && v$.listingData.streetName.$dirty">
                This is a required field.
            </span>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="houseNumber">House number*</label>
                <input class = 'inputField' type="text" id = 'houseNumber'  v-model = "listingData.houseNumber" @input ="v$.listingData.houseNumber.$touch">
            <span class = 'fieldError' v-if="v$.listingData.houseNumber.required.$invalid && v$.listingData.houseNumber.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.houseNumber.numeric.$invalid && v$.listingData.houseNumber.$dirty">
                Please fill in a numeric value.
               
            </span>
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="addition">Addition (optional)</label>
                <input class = 'inputField' type="text" id = 'addition' v-model = "listingData.numberAddition">
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="postalCode">Postal Code*</label>
            <input class = 'inputField' type="text" id = 'postalCode'  v-model = "listingData.zip" @input ="v$.listingData.zip.$touch">
            <span class = 'fieldError' v-if="v$.listingData.zip.required.$invalid && v$.listingData.zip.$dirty">
                This is a required field.
            </span>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="city">City</label>
            <input class = 'inputField' type="text" id = 'city'  v-model = 'listingData.city' @input ="v$.listingData.city.$touch">
            <span class = 'fieldError' v-if="v$.listingData.city.required.$invalid && v$.listingData.city.$dirty">
                This is a required field.
            </span>
            
        </div>

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="uploadPicuture">Upload picture (PNG or JPG)*</label>
            <input type="file" id="uploadPicture" @change = 'handleFileUpload' accept="image/*"/>
            <img scr = ""/>
            <span class = 'fieldError' v-if="formError && !hasFile">
                Please upload an Image
            </span>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="price">Price*</label>
            <input class = 'inputField' type="text" id = 'price'  v-model = 'listingData.price' @input ="v$.listingData.price.$touch">
            <span class = 'fieldError' v-if="v$.listingData.price.required.$invalid && v$.listingData.price.$dirty">
                This is a required field.
               
            </span>
            <span class = 'fieldError' v-if="v$.listingData.price.numeric.$invalid && v$.listingData.price.$dirty">
                Please fill in a numeric value.
               
            </span>
        </div>
         <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="size">Size*</label>
                <input class = 'inputField' type="text" id = 'size'  v-model = 'listingData.size' @input ="v$.listingData.size.$touch">
            <span class = 'fieldError' v-if="v$.listingData.size.required.$invalid && v$.listingData.size.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.size.numeric.$invalid && v$.listingData.size.$dirty">
                Please fill in a numeric value.
               
            </span>
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="garage">Garage*</label>
                <select class = 'inputField' type="text" id = 'garage'  v-model = 'listingData.hasGarage'  @input ="v$.listingData.hasGarage.$touch">
                    <option value='true'>yes</option>
                    <option value='false'>no</option>
                </select>
                <span class = 'fieldError' v-if="v$.listingData.hasGarage.required.$invalid && v$.listingData.hasGarage.$dirty">
                    This is a required field.
                </span>
            </div>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bedrooms">BedRooms*</label>
                <input class = 'inputField' type="text" id = 'bedrooms'  v-model = 'listingData.bedrooms'  @input ="v$.listingData.bedrooms.$touch">
            <span class = 'fieldError' v-if="v$.listingData.bedrooms.required.$invalid && v$.listingData.bedrooms.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.bedrooms.numeric.$invalid && v$.listingData.bedrooms.$dirty">
                Please fill in a numeric value.
               
            </span>
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bathrooms">Bathrooms*</label>
                <input class = 'inputField' type="text" id = 'bathrooms'  v-model = 'listingData.bathrooms'  @input ="v$.listingData.bathrooms.$touch">
            <span class = 'fieldError' v-if="v$.listingData.bathrooms.required.$invalid && v$.listingData.bathrooms.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.bathrooms.numeric.$invalid && v$.listingData.bathrooms.$dirty">
                Please fill in a numeric value.
               
            </span>
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="constructionYear">Construction year*</label>
            <input class = 'inputField' type="text" id = 'constructionYear'  v-model = 'listingData.constructionYear' @input ="v$.listingData.constructionYear.$touch">
            <span class = 'fieldError' v-if="v$.listingData.constructionYear.required.$invalid && v$.listingData.constructionYear.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.constructionYear.numeric.$invalid && v$.listingData.constructionYear.$dirty">
                Please fill in a numeric value.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.constructionYear.minValue.$invalid && v$.listingData.constructionYear.$dirty">
                Sorry! We only list houses build after 1900!
            </span>
            
            
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="description">Description*</label>
            <input class = 'inputField' type="text" id = 'description'  v-model = 'listingData.description'  @input ="v$.listingData.description.$touch">
            <span class = 'fieldError' v-if="v$.listingData.description.required.$invalid && v$.listingData.description.$dirty">
                This is a required field.
            </span>
        </div>
        <input class = 'postButton' type = 'submit' value = 'POST'>
        
        

    </form>
        <div class = 'formModal' v-if = "modalVisible">
            <div v-if="formSubmitted">
                <h2>Your listing has been succesfully posted!</h2>
                <button class = 'postButton' @click="$router.push('/details/' + getRecentlyUploadedId)">See my listing</button>
            </div>
            <div v-if="formError">
                <h2>There seems to be a problem...</h2>
                <p>Some fields are not filled in correctly, please go back and check the field requirements.</p>
            </div>
            
            
            
        </div>
            
        <div class = 'modalOverlay' v-if = "modalVisible" @click="modalVisible = false"></div>
</template>






<script>

import{mapActions, mapGetters} from 'vuex'
import useValidate from '@vuelidate/core'
import { required, numeric, minValue } from '@vuelidate/validators'



export default {

    props: [ 'id'],

    data(){
        
        return{
            
           
            

            listingData: {
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
                id: this.$route.params.id
            },

            v$: useValidate(),
            hasFile: false,
            formAboutToSubmit: false,
            formError: false,
            formSubmitted: false,
            modalVisible: false,
            
            
        }
    },

        
       validations(){
            return {
                
                listingData: {
                    price: {required, numeric},
                    bedrooms: {required, numeric},
                    bathrooms: {required, numeric},
                    size: {required, numeric},
                    streetName: {required},
                    houseNumber: {required, numeric},
                    numberAddition: {},
                    zip: {required},
                    city: {required},
                    constructionYear: {required, numeric, minValue: minValue(1901)},
                    hasGarage: {required},
                    description: {required},
                    },
                }
        },

    computed:{
        ...mapGetters(['getRecentlyUploadedId'])
    },

    methods: {
        ...mapActions(['postHouse']),
        handleSubmit(){
            this.v$.$validate()
            this.modalVisible = true   
            if(!this.v$.$error && this.hasFile){
                console.log('form accepted')
                    console.log(this.listingData)
                    this.postHouse(this.listingData)
                    this.formSubmitted = true
            }
            else {
                console.log('form declined')
                this.formError = true 
            }
        
       
        },
        handleFileUpload(e){
    
            this.hasFile = true
            this.listingData.file = e.target.files[0]
        },
     
    },

    mounted(){
       
        if(this.listingData.id != undefined){ 
            let data = this.$store.getters.getHouseById(this.listingData.id)
            this.listingData.price = data.price
            this.listingData.bedrooms = data.rooms.bedrooms
            this.listingData.bathrooms = data.rooms.bathrooms
            this.listingData.size = data.size
            this.listingData.streetName = data.location.street.split(/[0-9]/)[0]   
            this.listingData.houseNumber = data.location.street.match(/(\d+)/)[0]
            this.listingData.numberAddition = data.location.street.split(data.location.street.match(/(\d+)/)[0]).pop() 
            this.listingData.zip = data.location.zip
            this.listingData.city = data.location.city
            this.listingData.constructionYear = data.constructionYear
            this.listingData.hasGarage = data.hasGarage
            this.listingData.description = data.description
            this.listingData.file = data.file
        } 
  },
     
  
}
</script>

<style >
     .form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 8rem) 12rem repeat(4, 8rem) 12rem;
        gap: 2rem;
        width: 25rem;
      
    }
    .inputField{
        
        background-color: white;
        border-style: none;
        border-radius: 6px;
        font-size: 0.8rem; 
        height: 60%;
        
    }
    .fieldError{
        padding: 0;
        margin: 0;
        font-size: 0.6rem
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

    .formModal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 1000;
        width: 30rem;
        height: auto;
        padding: 2rem;
        background-color: white;
        border-radius: 8px;
        color: black;
        text-align: center;
       
    }

    .modalOverlay{
        position: fixed;
        height: 100%;
        top: 0;
        left:0;
        right: 0;
        background-color: rgba(0,0,0,0.2);
        z-index: 900;
    }


</style>