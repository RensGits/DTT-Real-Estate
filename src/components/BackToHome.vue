<template>
    <div class = 'toHomeContainer' @click="$router.push('/')">
        <span class="material-icons">arrow_back</span>
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
    }

    .material-icons{
        margin:0;
    }
</style>