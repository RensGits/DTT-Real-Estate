<template>
      <div>
        <BackToHome/>
       
        <CreateListingForm isNewListing = 'isNewListing'/>
      </div>
</template>

<script>

import CreateListingForm from '../components/Listing/CreateListingForm.vue'
import BackToHome from '../components/BackToHome.vue'

export default {
    name: 'createListingForm',
    props: ['isNewListing'],
    components: {
        CreateListingForm,
        BackToHome
    }
}

</script>

<style>
 
</style>