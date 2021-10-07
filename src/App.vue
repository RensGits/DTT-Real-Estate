<template>
  <div id = 'app' ref = 'app' @scroll = 'handleScroll' >
    <Nav/>
    <router-view id = 'routerView'/>
    <div id = 'customScrollIndicatorApp'>
      <div :style="{'position': 'fixed','height': scrollProgress + '%', 'width': '0.7rem', 'background-color': 'rgb(235,84,64)'}"></div>
    </div>
    
  </div>  
</template>

<script>

import Nav from './components/Navigation/NavigationBar.vue'

export default {
  
  name: 'App',

  components: {
    Nav
  },

  data(){
    return{
      scrollProgress : '50'
    }
  },

  methods: {
    handleScroll() {
            var winScroll = window.scrollY
            var height = this.$refs.app.clientHeight;
            var heightBody = document.body.clientHeight
            var scrolled =  winScroll / (height - heightBody) * 100
            this.scrollProgress = scrolled
        }
  },

  mounted() {
        window.addEventListener('scroll', this.handleScroll); 
    
    },

    beforeDestroyed(){
        window.removeEventListener('scroll', this.handleScroll); 
    }









}
</script>


<style>

                                                                                                                    /* GLOBAL STYLES */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Montserrat", 'sans-serif';
}

html,body{
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

body{
  height: 100vh;
}

p{
  font-family: "Open Sans", 'sans-serif';
  font-weight: 400;
  font-size: 1rem;
  margin: 0.1rem;
}

.p2{
  font-size: 0.8rem; 
}

.p3{
  font-size:0.7rem
}

h1{
  font-family: 'Montserrat', 'sans-serif';
  font-size: 1.6rem;
  font-weight: 700;
}

.h12{
  font-size: 1rem;
}

h2{
  font-family: 'Montserrat', 'sans-serif';
  font-size: 1rem;
  font-weight: 700;
  margin: 0.1rem;
}

h3{
  font-family: 'Montserrat' , 'sans-serif';
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0.1rem;
}

h4{
  font-family: 'Open Sans', 'sans-serif';
  font-weight: 600;
  font-size: 0.9rem;
  color: rgb(235,84,64);
}

ul{
  line-height: 2rem;
}

li{
  font-size: 0.9rem;
}

input{
  font-family: 'Open Sans', 'sans-serif';
  font-weight: 400;
  padding-left: 1rem;
}

input:focus{
  outline: none;
}

input::placeholder, textarea::placeholder{
  text-justify: start;
  text-align: start;
  font-family: 'Open Sans';      
  font-size: 0.9rem;
  font-weight: 400;
  color: rgb(195,195,195)
}

textarea{
  resize: none;
  height: 100% !important;
  padding: 1rem;
}


section{
  padding: 1rem 0;
}

.material-icons{
  margin-left: 0.7rem;
}

#customScrollIndicatorApp{
   position: fixed;
    right: 0;
    top: 6rem;
    bottom: 0;
    margin-top: -2rem;
    height: auto;
    width: 0.7rem;
    background-color: gray;
}

.sectionTitle{
  padding: 2% 0;
  color: rgb(235,84,64);
}

.pageTitleContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0;
}

.elementPrimary{
  background-color: rgb(235,84,64);
}

.elementSecondary{
  background-color: rgb(74,75,76);
}

.elementTertiary1{
  background-color: rgb(232,232,232);
}

.elementTertiary2{
  background-color: rgb(195,195,195);
}

.background1{
  background-color: rgb(246,246,246)
}

.background2{
  background-color: white
}

.textPrimary{
  color: black
}

.textSecondary{
  color: rgb(74,75,76)
}

.textTertairy{
  color: rgb(209, 209, 209);
}

.hyperlink{
  color: rgb(6,123,194)
}


button{
  background-color: rgb(230,85,64);
  color: white;
  border-style: none;
  border-radius: 7px;
  font-size: 0.9rem;
  font-weight: 500;
  height: 2.4rem;
  width: 11rem;
}

button:hover{
  cursor:pointer;
  color:rgb(225, 225, 225)
}



#app{
  min-height: 100vh !important;
  width: 100%;
  background-color: rgb(246,246,246);
}

body::-webkit-scrollbar {
    display: none;
}

#routerView{
  width: 100%;
  min-height: 80vh;
  height: auto;
  padding: 0 20%;
  margin-top: 2rem;
  padding-bottom: 3rem;
}

.modal{
 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 10000;
  width: 30rem;
  height: auto;
  padding: 2.5rem 7rem;
  background-color: white;
  border-radius: 8px;
  color: black;
  align-items: center;
}

.innerModal{
  display: grid;
  height: 100%;
  gap: 1rem;
  text-align: center;
  justify-items: center;
}

.modalOverlay{
    position: fixed;
    height: 100%;
    top: 0;
    left:0;
    right: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 9000;
}

.iconsContainer{
      display: flex;
      justify-content: space-between;
      align-items: center;
}

.iconSmall{
    height: 60%;
}

.iconMedium{
    height: 80%;
    margin-right: 0.6rem
}

.spacer{
  width: 100%;
  height: 5rem;
}

@media only screen and (max-width: 990px){
  #routerView{
    padding: 0 10%
  }
}

@media only screen and (max-width: 768px) {
  html{
    font-size: 14px; 
  }

  #mainLogo{
      display:none;
  }


  #routerView{
      margin-top: 0;
      padding: 0;
  }

  .pageTitleContainer{
    justify-content: center;
    margin-top: 0;
  }
  #customScrollIndicatorApp{
    display: none;
  }
}

@media only screen and (max-width: 480px){
  #routerView{
    
    width: 100%;
  }
}


</style>


