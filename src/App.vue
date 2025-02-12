<script setup lang="ts">
import Card from './components/Card.vue';
import Photo from './components/Photo.vue';
import Display from './components/Display.vue';
import Search from './components/Search.vue';
import Intro from './components/Intro.vue';
import Navigation from './components/Navigation.vue';

</script>

<template>
  <div>
    <!-- <Intro /> -->
    <!-- <Search /> -->
    <!-- <Navigation /> -->
    <Display />
  </div>
</template>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
  width: 100vw;
  font-size: 12px;
  background-color: #ececec;


  /* background: linear-gradient(to right, #f5f5f5 1px, transparent 1px),
  linear-gradient(to bottom, #f5f5f5 1px, transparent 1px);
  background-repeat: repeat;
  background-size: 10px 10px; */
}


</style>
