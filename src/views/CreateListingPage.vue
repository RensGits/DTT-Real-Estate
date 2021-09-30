<template>
      <div>
        <BackToHome/>
        <CreateListingForm/>
      </div>
</template>

<script>

import CreateListingForm from '../components/Listing/CreateListingForm.vue'
import BackToHome from '../components/BackToHome.vue'

export default {
    
    components: {
        CreateListingForm,
        BackToHome
    }
}

</script>

<style>
 
</style>