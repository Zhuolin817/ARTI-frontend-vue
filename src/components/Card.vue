<template>
  <div class="container" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"  @mouseenter="showDetail" @mouseleave="hideDetail">
    <div class="img" :class="{'detail': showText}" :style="{ backgroundImage: 'url(' + imageUrl + ')' }" ></div>
    <div class="info" :class="{ 'showtext': showText }">
      <p class="title">{{ title + '封数及时解决的房价是否据即使对方很少看见反函数科技孵化数据库' }}</p>
      <div class="userbar">
        <img :src="userAvatarUrl" alt="">
        <p>{{ userName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps} from 'vue';

const showText = ref(false);

const info = defineProps({
  info: Object
});

const showDetail = () => {
  showText.value = true
}

const hideDetail = () => {
  showText.value = false
}

let title = info.info.title
let imageUrl = info.info.imageUrl
console.log(info.info)
let userAvatarUrl = info.info.userAvatarUrl
let userName = info.info.userName

</script>

<style scoped>

.container {
  position: relative;
  width: 18rem;
  height: 30rem;
  background-color: rgb(48, 48, 48);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止文字超出 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin: 1.5rem;
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  /* filter: blur(1px); */
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background: rgba(255, 255, 255, 0.5); /* 半透明白色遮罩层 */
  backdrop-filter: blur(5px); /* 背景虚化效果 */

}

.img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-color: #464646;
  transition: transform 0.3s ease;

}

.info{
  position: absolute;
  height: 6rem;
  width: 100%;
  bottom: -6rem;
  font-size: 1rem;
  transition: bottom 0.3s ease;
  /* color: white; */
  /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  
}

.info.showtext{
  bottom: 0rem;
}

.img.detail{
  transform: translate(0, -3rem) scale(0.8);

}

.userbar{
  display: flex;
  align-items: center;
  width: 90%;
  position: absolute;
  bottom: 0.3rem;

}

.userbar img{
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 0.7rem;
}

.userbar p{
  /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
  padding-left: 0.3rem;
  color: #464646;

}

.title{
  width: 90%;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  max-height: 3.5rem;
  overflow: hidden;
  font-weight: 600;
}

</style>
