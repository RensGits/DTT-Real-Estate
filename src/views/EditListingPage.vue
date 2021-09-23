<template>
  <div>
      <BackToHome/>
      <EditListingForm/>
  </div>
</template>

<script>

import EditListingForm from '../components/Listing/EditListingForm.vue'
import BackToHome from '../components/BackToHome.vue'

export default {
    components: {
        EditListingForm,
        BackToHome
    }
}
</script>

<style>

</style>