<template>

    <div class="navibox">
        <div class="logobar">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="rightbar">
            <el-input
                style="width: 240px"
                placeholder="搜索"
                :prefix-icon="Search"
            />
            <div class="userbar">
                <el-button text>登录</el-button>
                <el-button type="primary">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<style scoped>
.navibox{
    width: 100vw;
    height: 5rem;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    border: 1px black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
}

.logobar img{
    width: 3rem;
    height: 3rem;
    margin: 1rem;
}

.rightbar{
    display: flex;
    margin-right: 2rem;

}

.userbar button{
    border-radius: 0.5rem;
    font-size: 1.2rem;
}

/* .login{
    background-color: transparent;
    border: 0;
}

.register{
    border: 0;
    background-color: #D8F3DC;
    color: #2D6A4F;
} */

.search{
    border: 0;
    /* border-left: 1px solid gray; */
    border-right: 1px solid gray;
    padding: 0 1rem;
}

.search:focus{
    border: 0;
    border-right: 1px solid gray;

    outline: none;
}


</style>