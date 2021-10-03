<template>
    <div class = 'toHomeContainer' @click="$router.push('/')">
        <img class = 'backArrow' src="../assets/ic_back_grey@2x.png" alt="">
        <h2>Back to overview</h2>
    </div>    
</template>

<script>

export default {
  

}
</script>

<style scoped>
    .toHomeContainer{
        width: 11.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3rem 0 1.7rem  0rem;
    }

    .backArrow{
        width: 1rem;
        height: 1rem;
    }
</style>