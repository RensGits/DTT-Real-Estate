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

/* Navigation / Headers */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap'); 

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

p{
  font-weight: 400;
  font-size: 1rem;
}


h1{
  font-size: 1.6rem;
  font-weight: 700;
}

h2{
  font-size: 1rem;
  font-weight: 700;
  
}

h3{
  font-size: 0.8rem;
  font-weight: 400;
}

.light{
  color: rgb(209, 209, 209);
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
  width: 100%;
  height: 4.5rem;
  background-color: rgb(255,255,255);
  justify-items: center;
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


   
</style>


