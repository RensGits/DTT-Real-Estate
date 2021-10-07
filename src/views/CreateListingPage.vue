---------- Page for the listing form ----------

<template>
    <div>
        <div id = 'createListingPageContainer'>
            <BackToHome/>
            <ListingForm/>
        </div>
    </div>
</template>


<script>

import BackToHome from '../components/SharedComponents/BackToHome.vue'
import ListingForm from '../components/Listing/ListingForm.vue'

export default {
    components:{
       BackToHome,
       ListingForm
    },
}

</script>


<style>

@media only screen and (max-width: 768px){
    #createListingPageContainer{
        padding: 5% 5%;
    }
}

</style>