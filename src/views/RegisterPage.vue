<template>
  <div class = 'registerPageContainer'>
      <p>Register and get acces to creating listings, keeping track of your favorite real estate and more!</p>
      <form class = 'formContainer'>
        <div class =  'inputFieldContainer'>
            <label for="name" >Name</label>
            <input class = 'inputFieldRegister' id = "name" type="text" >
        </div>
        <div class =  'inputFieldContainer'>
            <label for="email">Email</label>
            <input class = 'inputFieldRegister' id = "email" type="text">
        </div>
        <div>
            <input class = 'inputFieldRegister inputFieldSubmit' type = 'submit' value = 'Register'>
        </div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    p{
        width: 30rem;
        text-align: center;
        line-height: 170%;
        margin-top: 7rem;
        color: rgb(230,85,64);
    }

    .registerPageContainer{
        display:flex;
        flex-direction: column;
        align-items: center;    
        height: auto;
        
        
    }

    .formContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        height: 14rem;
        margin-top: 5rem;
    }

    .inputFieldContainer{
        height: 100%;
        display:flex;
        justify-content: space-around;
    }

    .inputFieldRegister{
        height: 2.5rem;
        background-color: white;
        border-style: none;
        border-radius: 6px;
        font-size: 0.8rem; 
    }

    .inputFieldSubmit{
        margin-top: 2rem;
        width: 8rem;
        height: 2rem;
        background-color:rgb(230,85,64);
        color:white;
    }
</style>