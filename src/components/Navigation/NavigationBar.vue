---------- Desktop & mobile navigation bar component ----------

<template>
  <div id = 'nav'>

      <!-- desktop navigation bar -->

      <div id = 'navItems'>
        <img id = 'mainLogo' src = '../../assets/DTT_logo_black.svg' alt = ''/>
        <div id = 'pagesLink'>
          <router-link id = 'housesRouterLink' to ='/'>Houses</router-link>
          <router-link id = 'aboutRouterLink' to ='/about'>About</router-link>
          <router-link id = 'myListingsRouterLink' to ='/my-listings'>My listings</router-link>
        </div>

        <!-- mobile bottom navigation bar -->

        <div id = 'pagesLinkMobile'>
          <router-link class = 'routerIcons' to ='/' @click = 'handleActiveToggle'>
            <div id = 'houseRouteIcon'></div>
          </router-link>
          
          <router-link class = 'routerIcons' to ='/about' @click = 'handleActiveToggle'>
            <div id = 'aboutRouteIcon'></div>
          </router-link>

          <router-link class = 'routerIcons' to ='/my-listings' @click = 'handleActiveToggle'>
            <div id = 'myListingRouteIcon'></div>
          </router-link>
        </div>
        
        
      </div> 
        
    </div>
</template>

<script>



export default {
  data(){
    return{
      pagesActiveMobile:{
        houseOverviewPage: true,
        aboutPage: false,
        myListings: false
      }
    }
  },
  methods: {
    handleActiveToggle(e){
      console.log(this.currentRouteName())
    }
  },

  computed: {
    computed: {
    currentRouteName(){
        return this.$route.name;
    }
}
  }
}
</script>

<style>
#nav {
  display:grid;
  position: sticky;
  top:0;
  max-width: 100%;
  height: 4.5rem;
  background-color: rgb(255,255,255);
  justify-items: center;
  z-index: 4000;
}

#navItems{
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
}

#navItems a {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: rgb(226, 226, 226);
  margin-left: 5rem;
}

#navItems a.router-link-exact-active {
  font-weight: 700;
  color:black;
}

#navItems img{
  width: auto;
  height: 50%;
}

#pagesLink{
  flex:1;
}

#registerLink{
  justify-self: flex-end;
}

#pagesLinkMobile{
  display: none;
}

@media only screen and (max-width: 990px) {
  #navItems{
    width: 80%
  }
  
}

@media only screen and (max-width: 768px) {


  #mainLogo{
    display:none;
  }

  #nav{
    position: fixed;
    bottom:0;
    left: 0;
    top: unset;
    width: 100%;
  }
  
  #navItems{
      width: 100%;
  }

  #pagesLink{
    display: none;
  }

  #pagesLinkMobile{
    display: flex;
    position: relative;
    z-index: 4000;
    width: 100%;
    height: 100%;
    justify-content: space-around;
   
  }

  .routerIcons{
    display: flex;
    height: 100%;
    margin-left: unset !important;
    
  }

  #houseRouteIcon,#aboutRouteIcon,#myListingRouteIcon{
    width: 4rem;
    height: 4rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  #houseRouteIcon{
    background-image: url('../../assets/ic_mobile_navigation_home.png');
  }
  #pagesLinkMobile a.router-link-exact-active #houseRouteIcon{
    background-image: url('../../assets/ic_mobile_navigation_home_active.png')
  }
  #aboutRouteIcon{
    background-image: url('../../assets/ic_mobile_navigation_info.png');
  }
  #pagesLinkMobile a.router-link-exact-active #aboutRouteIcon{
    background-image: url('../../assets/ic_mobile_navigation_info_active.png')
  }
  #myListingRouteIcon{
    background-image: url('../../assets/ic_my_listing.png')
  }
  #pagesLinkMobile a.router-link-exact-active #myListingRouteIcon{
    background-image: url('../../assets/ic_my_listing_active.png')
  }
}



</style>