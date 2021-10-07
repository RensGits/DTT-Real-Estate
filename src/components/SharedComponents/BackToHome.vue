---------- Back to overview component arrow (header + arrow) ----------

<template>
    <div class = 'toHomeContainer' @click="$router.push('/')">
        <img class = 'backArrow' src="../../assets/ic_back_grey@2x.png" alt="">
        <h2 id= "backToOverview">Back to overview</h2>
    </div>    
</template>

<script>

export default {}

</script>

<style scoped>

    .toHomeContainer{
        position: relative;
        width: 11rem ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3rem 0.1rem 1.7rem  0rem;
        overflow: contain;
        z-index: 100;
    }

    .backArrow{
        width: 1rem;
        height: 1rem;
    }

    @media only screen and (max-width: 768px) {
        .toHomeContainer{
            margin:0;
        }
    }

</style>