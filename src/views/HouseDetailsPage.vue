---------- Page for the house details (per specific house) ----------

<template>
    <div>
        <BackToHome v-if="!isMobile"/>
        <HouseDetailsTile :isMobile='isMobile'/>
    </div>
</template>

<script>

import BackToHome from '../components/SharedComponents/BackToHome.vue'
import HouseDetailsTile from '../components/HouseDetails/HouseDetailsTile.vue'

export default {

    data(){
        return{
            isMobile: false
        }
    },

    components:{
       BackToHome,
       HouseDetailsTile
    },

    methods: {
        handleResize() {                    // if window width < 768 , sets "mobile" to true on component created
            if(window.innerWidth < 768){
            this.isMobile = true}
            else this.isMobile = false
        }
    },

    created() {                                                     // event listener creation & deletion for "mobile" check
        window.addEventListener('resize', this.handleResize);
        this.handleResize(); 
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },    
}
</script>
