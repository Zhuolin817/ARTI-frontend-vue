<template>
    <div class="container">
        <div class="search">
            <input type="text">
            <button>Search</button>
        </div>
    </div>
    
</template>


<style scoped>
.container{
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search{
    width: 50vw;
    display: flex;
}
.search input{
    flex: 1;
    border: 0;
    height: 2.5rem;
    background-color: #c4c4c4;
    color: gray;
}

.search button{
    border: 0;
    height: 2.5rem;
    width: 5rem;
    color: #1B4332;
    background-color: #52B788;
}

.search input:focus{
    border: 0;
    outline: none;
}

</style>