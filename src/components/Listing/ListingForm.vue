---------- Form for creating a new listing & editing an existing one ----------

<template>
    <div id = 'noPromission' v-if='noPromission' >
        <h2>You don't have promission to edit this house.</h2>
    </div>
    <div v-else id = 'listingFormContainer'>

    <!-- Listing page header -->

    <h1 class = 'formHeader' v-if="listingData.id === undefined">Create new listing</h1>
    <h1 class = 'formHeader' v-if="listingData.id != undefined">Edit listing</h1>
    <form id = 'form' @submit.prevent = 'handleSubmit' enctype="multipart/form-data">
        
       <!-- Street name input field -->

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="streetName">Street name*</label>
            
            <input 
                :class = "[v$.listingData.streetName.$error ? 'inputField inputFieldError' : 'inputField']" 
                type="text" 
                id = 'streetName'  
                v-model = "listingData.streetName" 
                @input ="v$.listingData.streetName.$touch" 
                placeholder="Enter the street name">
            
            <span class = 'fieldError' v-if="v$.listingData.streetName.required.$invalid && v$.listingData.streetName.$dirty">
                This is a required field.
            </span>
        </div>

        <div class = 'inputFieldContainerWrapper'>

            <!-- House number input field -->

            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="houseNumber">House number*</label>
                
                <input 
                    :class = "[v$.listingData.houseNumber.$error ? 'inputField inputFieldError' : 'inputField']" 
                    type="text" 
                    id = 'houseNumber'  
                    v-model = "listingData.houseNumber" 
                    @input ="v$.listingData.houseNumber.$touch" 
                    placeholder="Enter house number">

                <span class = 'fieldError' v-if="v$.listingData.houseNumber.required.$invalid && v$.listingData.houseNumber.$dirty">
                    This is a required field.
                </span>
                <span class = 'fieldError' v-if="v$.listingData.houseNumber.numeric.$invalid && v$.listingData.houseNumber.$dirty">
                    Please fill in a numeric value.
                
                </span>
            </div>

            <!-- Addition input field -->

            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="addition" >Addition (optional)</label>
                <input class = 'inputField' type="text" id = 'addition' v-model = "listingData.numberAddition" placeholder="e.g. A">
            </div>
        </div>

        <!-- Postal code input field -->

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="postalCode">Postal Code*</label>
            
            <input 
                :class = "[v$.listingData.zip.$error ? 'inputField inputFieldError' : 'inputField']" 
                type="text" 
                id = 'postalCode'  
                v-model = "listingData.zip" 
                @input ="v$.listingData.zip.$touch" 
                placeholder="e.g. 1000 AA">

            <span class = 'fieldError' v-if="v$.listingData.zip.required.$invalid && v$.listingData.zip.$dirty">
                This is a required field.
            </span>
        </div>

        <!-- City input field -->

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="city">City</label>
            
            <input 
                :class = "[v$.listingData.city.$error ? 'inputField inputFieldError' : 'inputField']" 
                type="text" 
                id = 'city'  
                v-model = 'listingData.city' 
                @input ="v$.listingData.city.$touch" 
                placeholder="e.g. Utrecht">

            <span class = 'fieldError' v-if="v$.listingData.city.required.$invalid && v$.listingData.city.$dirty">
                This is a required field.
            </span>
            
        </div>

        <!-- Picture upload field -->

        <div class = 'inputFieldContainer'>
            <p>Upload picture (PNG or JPG)*</p>
            <label class = 'inputFieldHeader' for="uploadPicture">

                <div v-if= "populated" :class = "populated ? 'populatedUploadImageWrapper' : 'uploadImageContainer' ">
                    <div class = 'populatedUploadImageContainer'>
                        <img class = 'populatedUploadImage' :src = "uploadImagePopulatedUrl" alt="" /> 
                    </div>
                    <img class = 'clearIcon' src = '../../assets/ic_clear_white.png' alt='' @click="handlePopulated"/>
                </div>
                 <div v-else-if= "!populated" :class = "populated ? 'uploadImageContainerPopulated' : 'uploadImageContainer' ">
                    <img class = 'uploadImagePlus' src = "../../assets/ic_upload@3x.png" alt="" /> 
                </div>
     
            </label>
            <input type="file" id="uploadPicture" @change = 'handleFileUpload' accept="image/*"/>
            <span class = 'fieldError' v-if="formErrorFile && !populated" >
                Please upload an Image
            </span>
        </div>

        <!-- Price input field -->

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="price">Price*</label>
            
            <input 
                :class = "[v$.listingData.price.$error ? 'inputField inputFieldError' : 'inputField']" 
                type="text" 
                id = 'price'  
                v-model = 'listingData.price' 
                @input ="v$.listingData.price.$touch" 
                placeholder="   e.g. 150.000 ">
            <p id = 'euro' class = 'inputAddition'>€</p>
            <span class = 'fieldError' v-if="v$.listingData.price.required.$invalid && v$.listingData.price.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.price.numeric.$invalid && v$.listingData.price.$dirty">
                Please fill in a numeric value.
            </span>
        </div>

         <div class = 'inputFieldContainerWrapper'>
            
            <!-- Size input field -->

            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="size">Size*</label>
                <input 
                    	:class = "[v$.listingData.size.$error ? 'inputField inputFieldError' : 'inputField']" 
                        type="text" 
                        id = 'size'  
                        v-model = 'listingData.size' 
                        @input ="v$.listingData.size.$touch" 
                        placeholder="e.g. 60">
            <p class = 'inputAddition m2'>m2</p>
            <span class = 'fieldError' v-if="v$.listingData.size.required.$invalid && v$.listingData.size.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.size.numeric.$invalid && v$.listingData.size.$dirty">
                Please fill in a numeric value. 
            </span>
            </div>

            <!-- Garage input field -->

            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="garage">Garage*</label>
                <select :class = "[v$.listingData.hasGarage.$error ? 'inputField inputFieldError' : 'inputField']" type="text" id = 'garage'  v-model = 'listingData.hasGarage'  @input ="v$.listingData.hasGarage.$touch" aria-placeholder= "Select" > 
                    <option value = '' disabled hidden selected><p class = 'selectPlaceholder'>Select</p> </option>
                    <option value='true'>yes</option>
                    <option value='false'>no</option>
                </select>
                <span class = 'fieldError' v-if="v$.listingData.hasGarage.required.$invalid && v$.listingData.hasGarage.$dirty">
                    This is a required field.
                </span>
            </div>
        </div>

        <div class = 'inputFieldContainerWrapper'>
            
            <!-- Bedrooms input field -->

            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bedrooms">BedRooms*</label>
                <input 
                    :class = "[v$.listingData.bedrooms.$error ? 'inputField inputFieldError' : 'inputField']" 
                    type="text" 
                    id = 'bedrooms'  
                    v-model = 'listingData.bedrooms'  
                    @input ="v$.listingData.bedrooms.$touch" 
                    placeholder="Enter amount">

            <span class = 'fieldError' v-if="v$.listingData.bedrooms.required.$invalid && v$.listingData.bedrooms.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.bedrooms.numeric.$invalid && v$.listingData.bedrooms.$dirty">
                Please fill in a numeric value.
            </span>
            </div>

            <!-- Bathrooms input field -->
            
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bathrooms">Bathrooms*</label>
                <input :class = "[v$.listingData.bathrooms.$error ? 'inputField inputFieldError' : 'inputField']" type="text" id = 'bathrooms'  v-model = 'listingData.bathrooms'  @input ="v$.listingData.bathrooms.$touch" placeholder="Enter amount">
            <span class = 'fieldError' v-if="v$.listingData.bathrooms.required.$invalid && v$.listingData.bathrooms.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.bathrooms.numeric.$invalid && v$.listingData.bathrooms.$dirty">
                Please fill in a numeric value.
            </span>
            </div>
        </div>

        <!-- Construction year input field --> 

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="constructionYear">Construction year*</label>
            <input 
                :class = "[v$.listingData.constructionYear.$error ? 'inputField inputFieldError' : 'inputField']" 
                type="text" 
                id = 'constructionYear'  
                v-model = 'listingData.constructionYear' 
                @input ="v$.listingData.constructionYear.$touch" 
                placeholder="e.g. 1990">

            <span class = 'fieldError' v-if="v$.listingData.constructionYear.required.$invalid && v$.listingData.constructionYear.$dirty">
                This is a required field.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.constructionYear.numeric.$invalid && v$.listingData.constructionYear.$dirty">
                Please fill in a numeric value.
            </span>
            <span class = 'fieldError' v-if="v$.listingData.constructionYear.minValue.$invalid && v$.listingData.constructionYear.$dirty">
                Sorry! We only list houses build after 1900!
            </span>
            <span class = 'fieldError' v-if="v$.listingData.constructionYear.maxValue.$invalid && v$.listingData.constructionYear.$dirty">
                Your house is build in the future, that can't be right. Or...
            </span>
            
            
        </div>

        <!-- Description input field -->

        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="description">Description*</label>
            <textarea   :class = "[v$.listingData.description.$error ? 'inputField inputFieldError' : 'inputField' ]" 
                        type="text" 
                        id = 'description'  
                        v-model = 'listingData.description'  
                        @input ="v$.listingData.description.$touch" 
                        placeholder="Enter description">
            </textarea>
            <span class = 'fieldError' v-if="v$.listingData.description.required.$invalid && v$.listingData.description.$dirty">
                This is a required field.
            </span>
        </div>
        <button class = 'postButton' type = 'submit' >POST</button>
        
        

    </form>

        <!-- Form submition modal -->

        <div class = 'modal' v-if = "modalVisible">

            <!-- Successful form submition -->
            <div class = 'innerModal' v-if="formSubmitted">
                <h2>Your listing has been succesfully posted!</h2>
                <button @click="handleRedirect">See my listing</button>
            </div>
            <!-- Unsuccesful form submiton -->
            <div v-if="formError">
                <div class = 'innerModal'>
                    <h2>There seems to be a problem...</h2>
                    <p>Some fields are not filled in correctly, please go back and check the field requirements.</p>
                </div>
            </div>  
        </div>
        <div class = 'modalOverlay' v-if = "modalVisible" @click="modalVisible = false , formError = false"></div>
    </div>
    <div class = 'spacer'></div>
    <div id = 'listingFormBackground'></div>

</template>

<script>

import{mapActions, mapGetters} from 'vuex'
import useValidate from '@vuelidate/core'
import { required, numeric, minValue, maxValue } from '@vuelidate/validators'

export default {

    props: [ 'id'],

    data(){
        
        return{
            
            listingData: {                      // Data connected with v-model in form
                price: '',                      // If listing form is editable, this data is populated on mount
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
                id: this.$route.params.id,
                hasFile: false,
            },

            v$: useValidate(),              // All other data points
            populated: false,
            uploadImagePopulatedUrl: '', 
            formAboutToSubmit: false,
            formError: false,
            formEroorFile: false,
            formSubmitted: false,
            modalVisible: false,
            noPromission: false,
        }
    },

        
       validations(){                       // Validations object used by Vuelidate
            return {                        // Sets what parameters is validated
                
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
                    constructionYear: {required, numeric, minValue: minValue(1901), maxValue: maxValue(2021)},
                    hasGarage: {required},
                    description: {required},
                    },
                }
        },

    computed:{
        ...mapGetters(['getRecentlyUploadedId', 'getHouseById']),
        handlePopulated(){                         // Sets populated in component data to true or false,
            this.populated = !this.populated       // true if image is selected, false if not
            this.hasFile = !this.hasFile       
        }
    },

    methods: {
        ...mapActions(['postHouse','fetchHouses']),
        handleSubmit(){                            // Handles submit: checks if form contains errors
            this.v$.$validate()                    // if false commits to store --> API post, if true blocks submit
            this.modalVisible = true    // Triggers modal pop-up   
            if(!this.v$.$error && this.populated){
                this.postHouse(this.listingData)
                this.formSubmitted = true           // Used by modal to show submition was succesfull
            }
            else {
                console.log('form declined')
                this.formError = true               // Used by modal show submiton was unsuccesfull
                this.formErrorFile = true 
            }
        },

        handleFileUpload(e){
            this.populated = true
            this.listingData.file = e.target.files[0]
            
            if (e.target.files && e.target.files[0]) {       // converts a recently selected file to a readable URL to display the preview in the upload container
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.uploadImagePopulatedUrl = e.target.result;
                }
                reader.readAsDataURL(e.target.files[0])
                this.populated = true
            }
        },
        
        handleRedirect(){
            this.fetchHouses();
            this.$router.push('/details/' + this.getRecentlyUploadedId)
        }
    },

    mounted(){
        if(this.listingData.id != undefined && this.listingData.id < 12){
            this.noPromission = true
        }
        if(this.listingData.id != undefined){       // Populates component data with listing data if available (if originating from edit link)
            this.populated = true
            this.listingData.hasFile = true
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
            this.uploadImagePopulatedUrl = data.image
        }
  }
}
</script>

<style >

    #listingFormContainer{
        position: relative;
        z-index: 100;
    }

    #listingFormBackground{
        position: fixed;
        top:0;
        left: 20%;
        right:0;
        bottom:0;
        background-image: url('../../assets/img_background@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 0;
    }

     #form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 6rem) 12rem repeat(4, 6rem) 12rem;
        gap: 2rem;
        width: 25rem;
    }

    .inputField{
        background-color: white;
        border-style: none;
        border-radius: 6px;
        font-size: 0.8rem; 
        height: 3rem;
    }

    .inputFieldError{
        border: 1px solid rgba(230, 86, 64, 0.905); 
    }

    .inputFieldError::placeholder{
        color:  rgba(230, 86, 64, 0.905)
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
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0.5rem
    }

    input[type="file"] {
        display: none;
    }

    .fieldError{
        color: rgba(230, 86, 64, 0.905);
        margin-top: 0.5rem;
    }

    .uploadImageContainer{
        display: grid;
        width: 8rem;
        height: 8rem;
        justify-content: center;
        justify-items: center;
        align-items: center;
        background-image: url('../../assets/uploadBorder.png');
        background-repeat: no-repeat;
        background-size: 8rem 8rem;
    }

    .uploadImageContainer:hover{
        cursor: pointer;  
    }

    .uploadImagePlus{
        width: 40%;
        height: auto;
    }

    .uploadImagePlus:hover{
        width: 45%;
    }

    .populatedUploadImageWrapper{
        display: grid;
        justify-content: left;
        align-items: center;
        position: relative; 
        width: 10rem;
        height: 10rem;
        overflow: hidden;
        border-radius: 7px; 
    }

    .populatedUploadImageContainer{
        width: 8rem;
        height: 8rem;
        object-fit: cover;
        overflow:hidden;
        border-radius: 7px; 
    }
    
    .populatedUploadImage{
        min-width: 8rem;
        min-height: 8rem;
        max-width: 12rem;   
    }

    .clearIcon{
        position: absolute;
        z-index: 1100;
        width: 20%;
        height: auto;
        top:2%;  
        right:11%;
        overflow: overlay;
        cursor: pointer;
    }

    .postButtonContainer{
        display: flex;
        width: 100%;
        justify-content:right;
    }

    .postButton{
        grid-column: 2;
    }

    .inputAddition{
        position: absolute;
        margin-top: 2.6rem;
        font-size: 0.8rem;
    }

    #euro{
        margin-left: 0.4rem;
    }

    .m2{
        margin-left: 10rem;
    }

    #noPromission{
        position: absolute;
        z-index: 10000;
        padding: 3rem 0;
    }

    @media only screen and (max-width: 990px){
      #listingFormBackground{
            top:30%;
            left: 10%;
            right:0;
            bottom:0;
        }
    }


    @media only screen and (max-width: 768px){
      #listingFormBackground{
          opacity: 0.5;
      }
      #euro{
          margin-top: 2.75rem;
      }
    }

    @media only screen and (max-width: 480px){
        #form, .formHeader{
            width: 100%;
        }

          #listingFormBackground{
            top:38%;
            left: 30%;
            right:0;
            bottom:0;
        }
    }

    @media only screen and (max-width: 330px) {
        #listingFormBackground{
            top: 50%;
        }
        .inputFieldContainerWrapper{
            display: flex;
            flex-direction: column;
            justify-items: space-between;
            
        }
        .inputFieldContainerWrapper > .inputFieldContainer{
            width: 100%;
            height: 100%
        }

        #form{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: unset;
            gap: 2rem;
        }
    }
    


</style>