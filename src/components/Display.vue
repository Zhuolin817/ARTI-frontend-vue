<template>
    <div class="displaybox">
        <div class="display">
            <Card v-for="info in cardList" :key="info.postId" :info="info"/>
        </div>
        <el-pagination style="margin: 3rem 0;" @change="changePage" background layout="prev, pager, next" :page-count="totalPage" />

    </div>

</template>

<script setup>
import Card from './Card.vue';
import axios from 'axios';
import {ref, onMounted, reactive} from 'vue'

let cardList = reactive([])
let totalPage = ref(5)
let pageSize = 20

const getInfo = (page, size) => {
    axios.get("http://43.133.215.102:8080/api/v1/posts", {
        params:{
            page: page,    
            size: size
        }
    }).then(res => {
        cardList.splice(0, cardList.length, ...res.data.data.list); // newList 是新数组
        totalPage.value = res.data.data.pages
        console.log(res)
        
    }).catch(err => {
        console.log(err)
    })
}

const changePage = (e) => {
    getInfo(e, pageSize)
    document.documentElement.scrollTop = 0;
}

onMounted(() => {
    getInfo(1, pageSize)
})



</script>


<style scoped>
.display{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 5rem;
}

/* .container{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
} */

 .displaybox{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
</style>