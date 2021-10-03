<template>
  <div id = 'app'>
    <div id = 'nav'>
      <div id = 'navItems'>
        <img src = './assets/DTT_logo_black.svg' alt = ''/>
        <div id = 'pagesLink'>
        <router-link to ='/'>Houses</router-link>
        <router-link to ='/about'>About</router-link>
        </div>
        <router-link id = 'registerLink' to = '/register'>Register</router-link>
        
      </div> 
        
    </div>
    <router-view id = 'routerView'/>
  </div>  
</template>

<script>



export default {
  name: 'App',
  components: {

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
}

textarea{
  padding: 1rem;
}




.material-icons{
  margin-left: 0.7rem;
}


html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
 
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


#app {
  min-height: 100vh;
  width: 100%;
  background-color: rgb(246,246,246);
}

#routerView{
  width: 100%;
  min-height: 80vh;
  height: auto;
  padding: 0 20%;
  margin-top: 2rem;
  padding-bottom: 3rem;
}

#nav {
  display:grid;
  position: sticky;
  top:0;
  min-width: 100%;
  height: 4.5rem;
  background-color: rgb(255,255,255);
  justify-items: center;
  z-index: 1500;
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


.modal{
 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1000;
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
    z-index: 900;
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
   
</style>


