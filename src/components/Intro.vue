<template>

    <div class="introbox">
        <div class="centerbox">
            <img src="../assets/logo.svg" alt="">
            <p>Nobody is artist inborn, everyone can be ARTI.</p>
        </div>

    </div>
</template>

<style scoped>
.introbox{
    width: 100vw;
    height: 40vh;
    background: linear-gradient(to bottom, #3eb782, #ececec);
    display: flex;
    align-items: center;
    justify-content: center;
}

.introbox img{
    height: 10vh;
    width: 10vh;
    transition: transform 0.3s ease;

}

.introbox img:hover{
    transform: scale(1.1);
}

.centerbox{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.centerbox p{
    font-size: 1.5rem;
    padding: 2rem;
    /* font-weight: 600; */
}




</style>